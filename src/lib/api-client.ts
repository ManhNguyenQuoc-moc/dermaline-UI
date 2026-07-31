export class ApiError extends Error {
  status: number;
  payload: any;

  constructor(message: string, status: number, payload: any = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.payload = payload;
  }
}

export const apiClient = async <T = any>(
  url: string,
  options: RequestInit = {}
): Promise<T | null> => {
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    let payload = null;
    try {
      payload = await res.json();
    } catch (_) {}

    throw new ApiError(
      payload?.message || `Request failed with status ${res.status}`,
      res.status,
      payload
    );
  }

  if (res.status === 204) return null;

  const text = await res.text();
  return text ? JSON.parse(text) : null;
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const fetchWithBackoff = async <T = any>(
  fn: () => Promise<T>,
  retries = 3,
  delay = 300
): Promise<T> => {
  try {
    return await fn();
  } catch (err: any) {
    const isAbort = err.name === 'AbortError';
    const isHttpError = typeof err.status === 'number';
    const isRetryable = !isAbort && (!isHttpError || err.status >= 500);

    if (retries <= 0 || !isRetryable) throw err;

    const nextDelay = delay * 2 + Math.random() * 100;
    await sleep(nextDelay);

    return fetchWithBackoff(fn, retries - 1, nextDelay);
  }
};

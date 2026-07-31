import React from 'react';

export interface SWTRenderIfProps {
  isTrue?: boolean;
  children: React.ReactNode;
}

export function SWTRenderIf({ isTrue = true, children }: SWTRenderIfProps) {
  return isTrue ? <>{children}</> : null;
}

export default SWTRenderIf;

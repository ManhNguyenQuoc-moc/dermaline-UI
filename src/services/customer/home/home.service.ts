import { HomeDataModel } from './models/home.model';
import { MOCK_HOME_DATA } from './home.mock';

export const getHomeDataService = (): HomeDataModel => {
  return MOCK_HOME_DATA;
};

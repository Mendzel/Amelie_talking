import axios from 'axios';
import qs from 'qs';

const client = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1',
  paramsSerializer: params => {
    const preparedValues: any = {};

    Object.entries(params).forEach(([key, value]) => {
      if (value === null || value === undefined || value === '') {
        return;
      }

      if (value instanceof Array) {
        preparedValues[key] = value.map(item => {
          return typeof item === 'object'
            ? JSON.stringify(item)
            : item;
        });
      } else if (typeof value === 'object') {
        preparedValues[key] = JSON.stringify(value);
      } else {
        preparedValues[key] = value;
      }
    });

    return qs.stringify(
      preparedValues,
      {
        arrayFormat: 'repeat',
      },
    );
  },
});

export const isHttpError = axios.isAxiosError;

export default client;

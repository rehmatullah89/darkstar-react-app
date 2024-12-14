// utils/api.ts
import { BASE_URL } from '@/utils/constants';

interface ApiResponse {
  data: any;
  error?: string;
}

export const useApi = () => {
  // fetch api has an issue of timeout so i'm using this function
  function timeoutPromise<T>(ms: number, promise: Promise<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error("promise timeout"));
      }, ms);
  
      promise.then(
        (res) => {
          clearTimeout(timeoutId);
          resolve(res);
        },
        (err) => {
          clearTimeout(timeoutId);
          reject(err);
        }
      );
    });
  }
  const fetchData = async (
    url: string,
    method: string = 'GET',
    data?: any,
    revalidate?: number,
    cache?: CacheType,
    timeout: number = 5000, // default timeout set to 5000ms
  ): Promise<ApiResponse> => {
    try {
      const headers: Record<string, string> = {
        // Add any other headers as needed
      };
  
      let body: any = undefined;
  
      if (method === 'POST') {
        if (data instanceof URLSearchParams) {
          headers['Content-Type'] = 'application/x-www-form-urlencoded';
          body = data;
        } else {
          headers['Content-Type'] = 'application/json';
          body = JSON.stringify(data);
        }
      } else {
        const queryString = data
          ? `?${new URLSearchParams(data).toString()}`
          : '';
        url = url + queryString;
      }
     // const config = {
      //   method,
      //   cache: 'no-store',
      //   headers,
      //   body,
      // };
      // console.log(url);

      const response = await timeoutPromise(10000, fetch(url, {
        method,
        headers,
        body,
          // cache, // Set cache control to 'no-store'
        next: { revalidate },
      }));
      
      const responseData = await response.json();
  
      if (!response.ok) {
        throw new Error(responseData.error || 'Something went wrong');
      }
  
      return { data: responseData };
    } catch (error: any) {
      // Handle error or log it
      console.error('API Error:', error.message);
      throw error;
    }
  };

  const get = async (
    url: string,
    data?: any,
    revalidate: number = 0,
    cache: CacheType = 'default',
  ): Promise<ApiResponse> => {
    return fetchData(url, 'GET', data, revalidate, cache);
  };
  type CacheType = 'default' | 'no-store' | 'force-cache';
  const post = async (
    url: string,
    data?: Record<string, any> | URLSearchParams,
    revalidate: number = 0,
    cache: CacheType = 'default',
  ): Promise<ApiResponse> => {
    return fetchData(url, 'POST', data, revalidate, cache);
  };

  return { get, post };
};

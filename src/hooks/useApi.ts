import { useUser } from "@/context/UserContext";
import { getLocalStorage } from "@/utils/helpers";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { WP_BASE_URL } from "@/utils/constants";
const baseURL = WP_BASE_URL+"/api";
const baseURL2 = WP_BASE_URL;

const useApi = () => {
  const router = useRouter();
  const pathname = usePathname();

  const tokenValue = getLocalStorage('access_token', null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkAuthentication = async () => {
    try {
      if (tokenValue === null) {
        router.push('/auth/login');
      }
    } catch (error) {
      console.error('Error while fetching user data:', error);
    }
  };

  useEffect(() => {
    const isPathMatch = pathname.startsWith('/my-account-new');
    if (isPathMatch) {
      checkAuthentication();
    }
  }, [pathname]);

  const token = tokenValue;
  const makeApiCall = async (
    endpoint: any,
    method = 'GET',
    body?: any,
    json = true,
    multipleType = false,
    WP_url = false,
  ) => {
    setLoading(true);

    try {
      const headers = {
        'Content-Type': multipleType
          ? 'multipart/form-data'
          : 'application/json',
        Authorization: `Bearer ${token}`,
      };

      const options = {
        method,
        headers,
        body: body ? (json ? JSON.stringify(body) : body) : null,
      };
      const url = `${WP_url ? baseURL2 : baseURL}/${endpoint}`;
      // console.log('API Request URL:', url);
      // console.log('API Request Options:', options);

      const response = await fetch(url, options);
      // console.log('API Response:', response);
      const data = await response.json();

      // console.log('API data:', data);
      return data;
    } catch (error) {
      console.error('Error in makeApiCall:', error);
      setError(error.message || 'Something went wrong,');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      console.error('Token is undefined');
    }
  }, [token]);

  return { makeApiCall, loading, error };
};

export default useApi;

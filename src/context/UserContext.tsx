'use client'
import { getLocalStorage, removeCookie, removeLocalStorage, setCookie, setLocalStorage } from '@/utils/helpers';
import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext<any | undefined>(undefined);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState<any>(getLocalStorage('user', null));
  const [userRefData, setUserRefData] = useState<any>(getLocalStorage('userRef', null));
  const [userToken, setUserToken] = useState<any>(getLocalStorage('access_token', null));
  const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchUserAndToken = async () => {
      try {
        setIsLoading(true);
        const tokenValue = getLocalStorage('access_token', null);
        const userValue = getLocalStorage('user', null);

        if (tokenValue && userValue) {
          setUser(userValue);
          setToken(tokenValue);
        } else {
          // setUser(null);
          // setToken(null);
          removeLocalStorage('access_token')
          removeCookie('access_token')
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserAndToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  const setUser = (data: any) => {
    setUserData(data);
    setLocalStorage('user', data)
  };
  const setUserRef = (data: any) => {
    setUserRefData(data);
    setLocalStorage('userRef', data)
  };
  const setToken = (data: any) => {
    setUserToken(data);
    setLocalStorage('access_token', data)
    setCookie('access_token',data,360)
  };

  // Function to update user data
  const updateUser = (key: any, value: any) => {
    setUserData({
      ...userData,
      [key]: value,
    });
  };
  const updateUserRef = (key: any, value: any) => {
    setUserRefData({
      ...userRefData,
      [key]: value,
    });
  };

  return (
    <UserContext.Provider value={{ userData, setUser, updateUser, userToken, setToken, updateUserRef, setUserRef, userRefData }}>
      {children}
    </UserContext.Provider>
  );
};

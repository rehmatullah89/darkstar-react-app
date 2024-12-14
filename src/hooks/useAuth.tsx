import React, { createContext, useContext, ReactNode } from 'react';

export interface User {
  id: string;
  databaseId: number;
  firstName: string;
  lastName: string;
  email: string;
  capabilities: string[];
}

interface AuthData {
  loggedIn: boolean;
  user?: User;
  loading: boolean;
}

const DEFAULT_STATE: AuthData = {
  loggedIn: false,
  user: undefined,
  loading: false,
};

const AuthContext = createContext(DEFAULT_STATE);

export function AuthProvider({ children }: { children: ReactNode }) {
  // const { data, loading, error } = useQuery(GET_USER);
  // const user = data?.viewer;
  // console.log(user)
  // const loggedIn = Boolean(user);

  // const value = {
  //   loggedIn,
  //   user,
  //   loading,
  //   error,
  // };

  return (
    <AuthContext.Provider value={DEFAULT_STATE}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export default useAuth;

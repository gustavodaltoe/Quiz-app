import React, { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';

import { useToaster } from './ToasterContext';

type AuthContext = {
  isAuthenticated: boolean;
  user: firebase.User | null;
  isLoading: boolean;
  register(email: string, password: string): Promise<firebase.User | null>;
  login(email: string, password: string): Promise<firebase.User | null>;
  anonymousLogin(): Promise<firebase.User | null>;
  logout(): void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext({} as AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { showToaster } = useToaster();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  async function login(
    email: string,
    password: string,
  ): Promise<firebase.User | null> {
    try {
      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL);

      if (!email && !password) {
        const { user } = await firebase.auth().signInAnonymously();

        setUser(user);
        return user;
      } else {
        const { user } = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);

        setUser(user);
        return user;
      }
    } catch (err) {
      console.log(err);
      showToaster('Incorrect email or password');
    }
    return null;
  }

  async function anonymousLogin() {
    return login('', '');
  }

  async function register(
    email: string,
    password: string,
  ): Promise<firebase.User | null> {
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      setUser(user);
    } catch (err) {
      console.log(err);
      showToaster('Failed to register, try again');
    }
    return null;
  }

  async function logout() {
    try {
      await firebase.auth().signOut();
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        login,
        anonymousLogin,
        register,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

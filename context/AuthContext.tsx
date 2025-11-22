"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  hasCourseAccess: boolean;
};

type AuthContextType = {
  user: User | null;
  loginAsDemo: () => void;
  logout: () => void;
  purchaseCourse: () => void; // "vásárlás" szimulálása
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = "levelup-english-user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // localStorage-ból betöltés
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const saveUser = (u: User | null) => {
    setUser(u);
    if (typeof window === "undefined") return;
    if (u) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  };

  const loginAsDemo = () => {
    const demoUser: User = {
      id: "demo-user",
      name: "Demo Student",
      email: "demo@student.com",
      hasCourseAccess: false
    };
    saveUser(demoUser);
  };

  const logout = () => {
    saveUser(null);
  };

  const purchaseCourse = () => {
    if (!user) return;
    saveUser({ ...user, hasCourseAccess: true });
  };

  return (
    <AuthContext.Provider value={{ user, loginAsDemo, logout, purchaseCourse }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

import type { ReactNode } from "react";

export interface DocumentListType {
  [key: string]: string
};

export interface LoginType {
  type: string;
  document: string;
  mobile: string;
};

export interface UserType {
  name:	string;
  lastName:	string;
  birthDay:	string;
};

export interface UserLoginType extends LoginType, UserType {}

export interface PlansType {
  name: string;
  price: number;
  description: Array<string>;
  age: number;
};

export interface AuthContextType {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
};

export interface ProviderProps {
  children: ReactNode;
}

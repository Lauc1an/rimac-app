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

export interface ListPlansType {
 list: Array<PlansType>;
};

export interface AuthContextType {
  signIn: ({type, document, mobile}: LoginType) => Promise<void>;
  signOut: () => void;
  name: string | null;
  loading: boolean;
};

export interface ProviderProps {
  children: ReactNode;
}

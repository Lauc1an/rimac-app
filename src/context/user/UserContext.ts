import { createContext } from "react";
import type { Dispatch } from "react";
import type { UserLoginType } from "@/utils/Types";

export interface Action {
  type: string;
  payload?: UserLoginType;
};

export const initialState: UserLoginType = {
  name: "",
  lastName: "",
  birthDay: "",
  type: "",
  document: "",
  mobile: "",
};

export const UserContext = createContext<{
  state: UserLoginType;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

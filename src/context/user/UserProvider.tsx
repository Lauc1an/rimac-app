import { useReducer } from "react";
import { UserContext, initialState } from "./UserContext";
import type { Action } from "./UserContext";
import type { UserLoginType, ProviderProps } from "@/utils/Types";

const UserReducer = (state: UserLoginType, action: Action): UserLoginType => {
  switch (action.type) {
    case "change": {
      return {
        name: action.payload!.name,
        lastName: action.payload!.lastName,
        birthDay: action.payload!.birthDay,
        type: action.payload!.type,
        document: action.payload!.document,
        mobile: action.payload!.mobile,
      };
    }
    case "delete": {
      return initialState;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export const UserProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

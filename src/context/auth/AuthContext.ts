import { createContext } from "react";
import type { AuthContextType } from "@/utils/Types";

export const AuthContext = createContext({} as AuthContextType);

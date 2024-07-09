import React from "react";
import { AuthAction } from "./AuthProvider";

export interface UserContextType {
  user: string;
  dispatch: React.Dispatch<AuthAction>;
}

const AuthContext = React.createContext<UserContextType>({} as UserContextType);

export default AuthContext;
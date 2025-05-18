import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { AuthContext } from "./AuthContext";
import { useUserContext } from "@/context/user/useUser";
import { getUser } from "@/models/User";
import type { ProviderProps, LoginType } from "@/utils/Types";

const useProtectedRoute = (name: string | null) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const inAuthGroup = location.pathname === "/planes" || location.pathname === "/resumen";

    if (!name && inAuthGroup) {
      navigate("/");
    } else if (name && !inAuthGroup) {
      navigate("/planes");
    }
  }, [name, location.pathname, navigate]);
};

export const AuthProvider = ({ children }: ProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string | null>(null);
  const { dispatch } = useUserContext();

  const signIn = async ({type, document, mobile}: LoginType) => {
    setLoading(true);

    try {
      const response = await getUser();

      if (response.status && response.data) {
        const userData = {
          name: response.data.name,
          lastName: response.data.lastName,
          birthDay: response.data.birthDay,
          type,
          document,
          mobile
        };

        localStorage.setItem('user', JSON.stringify(userData));
        setName(userData.name);

        dispatch({
          type: "change",
          payload: userData,
        });
      }
    } catch (error) {
      console.log("🚩 ~ signIn ~ error:", error)
    }

    setLoading(false);
  };

  const signOut = async () => {
    setLoading(true);
    localStorage.removeItem("user");
    setName(null);
    setLoading(false);
  };

  const isLoggedIn = async () => {
    const storageUser = localStorage.getItem("user");

    if (storageUser !== null && typeof storageUser !== "undefined") {
      const userData = JSON.parse(storageUser);
      setName(userData.name);

      dispatch({
        type: "change",
        payload: userData,
      });
    } else {
      setName(null);
      dispatch({ type: "delete" });
    }
  };

  useEffect(() => {
    isLoggedIn();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useProtectedRoute(name);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        name,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

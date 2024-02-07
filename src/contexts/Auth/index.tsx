"use client";

import Cookie from "js-cookie";

import { api } from "@/services/api";
import { User } from "@/@types/user";
import { useRouter } from "next/navigation";
import { SignInCredentials } from "@/@types/sign-in";

import {
  useState,
  Dispatch,
  ReactNode,
  useEffect,
  useContext,
  createContext,
  SetStateAction,
} from "react";

interface AuthState {
  token: string;
  admin: User;
}

interface AuthContextData {
  user: User;
  token: string;

  signIn: (
    credentials: SignInCredentials,
    isLoading: Dispatch<SetStateAction<boolean>>
  ) => Promise<void>;

  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    async function loadCookiesData() {
      const token = Cookie.get("auth_token");
      const user = Cookie.get("user_data");

      if (token && user) {
        setUserData({ token, admin: JSON.parse(user) });
      }

      return {} as AuthState;
    }

    loadCookiesData();
  }, []);

  const router = useRouter();

  const signIn = async (
    credentials: SignInCredentials,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) => {
    await api
      .post("/sessions", credentials)
      .then((res) => {
        const { administrator, token }: { administrator: User; token: string } =
          res.data;

        Cookie.set("auth_token", token);
        Cookie.set("adm_data", JSON.stringify(administrator));

        setUserData({ admin: administrator, token });

        router.push("/dashboard");

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);

        setLoading(false);
      });
  };

  const signOut = () => {
    Cookie.remove("auth_token", { path: "/" });
    Cookie.remove("adm_data", { path: "/" });

    setUserData({} as AuthState);

    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: userData.admin,
        token: userData.token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

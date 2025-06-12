"use client";
import { signIn, useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";

declare module "next-auth" {
  interface Session {
    error?: string;
  }
}

export default function SessionGuard({ children }: { readonly children: ReactNode }) {
  const { data } = useSession();
  useEffect(() => {
    if (data?.error === "RefreshAccessTokenError") {
      signIn("keycloak");
    }
  }, [data]);

  return <>{children}</>;
}
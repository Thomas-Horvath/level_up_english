import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "LevelUp English - B1 to B2",
  description: "English course landing page demo with mock auth."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

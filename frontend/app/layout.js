import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import { neobrutalism } from "@clerk/themes";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Servd - AI Recipes Platform",
  description: "",
  icons: [
    { rel: "icon", url: "/logo.png", type: "image/png" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={`${inter.className}`}>
        <ClerkProvider
          appearance={{
            baseTheme: neobrutalism,
          }}
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          {/* Footer */}
          <footer className="py-8 px-4 border-t">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Servd Logo"
                  width={48}
                  height={48}
                  className="w-14"
                />
              </div>
              <div className="flex-1 text-center">
                <p className="text-stone-500 text-sm">
                  Made with 💗 by Shree.Gowda
                </p>
              </div>
              <div className="hidden md:block w-[68px]" />
            </div>
          </footer>
        </ClerkProvider>
      </body>
    </html>
  );
}
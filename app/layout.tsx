import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/custom/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
    title: "Projet Rhizome",
    description: "Chatbot en Next.js basé sur Gemini.",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Toaster position="top-center" />
                    {children}
                </ThemeProvider>
            </body>
            <GoogleAnalytics gaId="G-8E0T3HCQTE" />
        </html>
    );
}

import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/custom/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
    title: "Projet Rhizome",
    description: "Chatbot intelligent sur le climat et l'environnement avec un jeu immersif en VR.",
    icons: {
        icon: "/images/Logo.png",
        shortcut: "/images/Logo.png",
        apple: "/images/Logo.png",
    },
    openGraph: {
        title: "Projet Rhizome",
        description: "Chatbot intelligent sur le climat et l'environnement avec un jeu immersif en VR.",
        url: "https://projet-rhizome.vercel.app/",
        siteName: "Projet Rhizome",
        images: [
            {
                url: "/images/Logo.png",
                width: 800,
                height: 600,
            },
        ],
    },
    
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
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

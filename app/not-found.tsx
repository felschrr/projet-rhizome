"use client";
import { useRouter } from "next/navigation";

import { Footer } from "./not-found/Footer";
import { Header } from "./not-found/Header";

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <Header />
      
      <main className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            404
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Oups ! Page non trouvée
          </h1>
          
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            La page que vous cherchez n&apos;existe pas ou a été déplacée.
            Explorez notre univers virtuel pour retrouver votre chemin.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => router.back()}
              className="px-8 py-3 border-2 border-white rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
            >
              ← Retour
            </button>
            
            <button
              onClick={() => router.push("/")}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-colors"
            >
              Accueil
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
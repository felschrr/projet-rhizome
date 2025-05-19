"use client"; // Nécessaire pour les interactions

import Image from "next/image";
import React, { useState } from "react"; 

import { ThemeToggle } from "@/components/custom/theme-toggle";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Image 
                src="/images/Logo.svg" 
                alt="Logo" 
                width={100} 
                height={40}
                className="w-24 h-auto sm:w-28"
              />
            </a>
          </div>

          {/* Menu Desktop (visible à partir de md) */}
          <div className="hidden md:flex">
            <nav>
              <ul className="flex items-center gap-2">
                <li>
                  <Button asChild variant="ghost" className="text-sm lg:text-base">
                    <a href="/realite-virtuelle">Réalité Virtuelle</a>
                  </Button>
                </li>
                <li>
                  <Button asChild variant="ghost" className="text-sm lg:text-base">
                    <a href="/contact">Contact</a>
                  </Button>
                </li>
                <li>
                  <Button asChild variant="default" className="text-sm lg:text-base">
                    <a href="/chat">Start Chat</a>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Menu Burger Mobile (visible en dessous de md) */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Menu Mobile (slide down) */}
        {isMenuOpen && (
          <div className="md:hidden bg-background pb-4 border-t">
            <nav>
              <ul className="space-y-2 px-4 pt-2">
                <li>
                  <Button asChild variant="ghost" className="w-full justify-start">
                    <a href="/realite-virtuelle" onClick={toggleMenu}>Réalité Virtuelle</a>
                  </Button>
                </li>
                <li>
                  <Button asChild variant="ghost" className="w-full justify-start">
                    <a href="/contact" onClick={toggleMenu}>Contact</a>
                  </Button>
                </li>
                <li>
                  <Button asChild variant="default" className="w-full justify-start">
                    <a href="/chat" onClick={toggleMenu}>Start Chat</a>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
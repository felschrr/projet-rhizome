import React from 'react';
import { Bot } from 'lucide-react';
import { BackgroundEffect } from './BackgroundEffect';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <BackgroundEffect />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-8">
            <div className="rounded-full bg-primary/20 p-3 shadow-lg">
              <Bot className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Project Rhizome
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            An AI-powered conversation about our planet's future, powered by Gemini and built with Next.js
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <a href="#features">Get Started</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#about">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
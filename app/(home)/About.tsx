import Image from 'next/image';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <div id="about" className="relative isolate overflow-hidden bg-primary py-24 sm:py-32">
      <Image
        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80"
        alt="Nature landscape"
        className="absolute inset-0 -z-10 size-full object-cover object-center md:object-center opacity-20"
        height={500}
        width={1000}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Card className="mx-auto max-w-2xl bg-background/80 backdrop-blur">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">About Project Rhizome</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Project Rhizome represents a unique approach to climate change education. Through the lens of an AI character from
              the future, we provide insights into the consequences of our present actions and offer guidance on creating a
              more sustainable world.
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Built with Next.js and powered by Google&apos;s Gemini API, our platform combines cutting-edge technology with
              environmental consciousness to deliver an engaging and educational experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
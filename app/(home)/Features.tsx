import { MessageSquare, Moon, Sun, Smartphone, Leaf, Clock } from 'lucide-react';
import React from 'react';

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    name: 'Real-time Chat',
    description: 'Engage in meaningful conversations about climate change with our AI from the future.',
    icon: MessageSquare,
  },
  {
    name: 'Dark/Light Mode',
    description: 'Comfortable viewing experience in any lighting condition.',
    icon: Moon,
  },
  {
    name: 'Responsive Design',
    description: 'Seamless experience across all your devices.',
    icon: Smartphone,
  },
  {
    name: 'Future Perspective',
    description: 'Unique insights from an AI character living in a climate-changed future.',
    icon: Clock,
  },
  {
    name: 'Practical Advice',
    description: 'Get actionable tips to reduce your carbon footprint.',
    icon: Leaf,
  },
  {
    name: 'Available 24/7',
    description: 'Access climate change information whenever you need it.',
    icon: Sun,
  },
];

export function Features() {
  return (
    <div id="features" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to understand climate change
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Powered by cutting-edge AI technology to provide you with accurate, engaging, and actionable insights about climate change.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.name}>
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="size-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="mt-4">{feature.name}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
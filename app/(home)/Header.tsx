import { Bot } from "lucide-react";
import React from "react";

import { ThemeToggle } from "@/components/custom/theme-toggle";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-sm border-b">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Bot className="size-6 text-primary" />
                        <span className="font-semibold text-lg text-foreground">
                            Project Rhizome
                        </span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <ThemeToggle />
                        <Button asChild variant="default">
                            <a href="/chat" className="flex items-center gap-2">
                                Start Chat
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

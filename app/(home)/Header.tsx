import Image from "next/image";
import React from "react";

import { ThemeToggle } from "@/components/custom/theme-toggle";
import { Button } from "@/components/ui/button";
// import Logo from "@/public/images/Logo.svg";

export function Header() {
    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-sm border-b">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <a href="/" className="flex items-center gap-2">
                            <Image src="/images/Logo.svg" alt="Logo" width={120} height={120} />
                        </a>
                    </div>
                    <div >
                        <ul className="flex items-center justify-center gap-4">
                            <li>
                                {/* Réalité Virtuelle */}
                                <Button asChild variant="ghost">
                                    <a href="/realite-virtuelle" className="flex items-center gap-2">
                                        Réalité Virtuelle
                                    </a>
                                </Button>

                            </li>
                            <li>
                                {/* Contact */}
                                <Button asChild variant="ghost">
                                    <a href="/contact" className="flex items-center gap-2">
                                        Contact
                                    </a>
                                </Button>

                            </li>
                            <li>
                                <Button asChild variant="default">
                                    <a href="/chat" className="flex items-center gap-2">
                                        Start Chat
                                    </a>
                                </Button>
                            </li>
                            <li>
                                {/* <ThemeToggle /> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

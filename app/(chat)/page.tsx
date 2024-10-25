"use client";

import { useState } from "react";
import { Chat } from "@/components/custom/chat";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/custom/theme-toggle";

export default function Page() {
    const [key, setKey] = useState(0);

    const handleResetChat = () => {
        setKey((prevKey) => prevKey + 1);
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="flex justify-between items-center m-4">
                <ThemeToggle />
                <Button onClick={handleResetChat} className=" self-end">
                    Nouveau chat
                </Button>
            </div>
            <Chat key={key} initialMessages={[]} />
        </div>
    );
}

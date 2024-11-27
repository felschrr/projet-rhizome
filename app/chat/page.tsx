"use client";

import { useState } from "react";
import { Chat } from "@/components/custom/chat";
import { ThemeToggle } from "@/components/custom/theme-toggle";
import { Button } from "@/components/ui/button";
import BackButton from "./BackButton";

export default function Page() {
    const [key, setKey] = useState(0);

    const handleResetChat = () => {
        setKey((prevKey) => prevKey + 1);
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="flex justify-between items-center m-4">
                <BackButton />
                <div className="flex items-center justify-center gap-4">
                    <ThemeToggle />
                    <Button onClick={handleResetChat} className=" self-end">
                        Nouveau chat
                    </Button>
                </div>
            </div>
            <Chat key={key} initialMessages={[]} />
        </div>
    );
}

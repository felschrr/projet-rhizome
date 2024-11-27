"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
    const router = useRouter();

    return (
        <span
            onClick={() => router.back()}
            className="gap-2 cursor-pointer p-4 w-fit"
        >
            <ArrowLeft className="size-8" />
        </span>
    );
};

export default BackButton;

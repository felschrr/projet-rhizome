"use client";

import {ChatRequestOptions, CreateMessage, Message } from "ai";
import { motion } from "framer-motion";
import React, {
    useRef,
    useEffect,
    useCallback,
} from "react";
import { toast } from "sonner";

import { ArrowUpIcon, StopIcon } from "./icons";
import useWindowSize from "./use-window-size";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const suggestedActions = [
    {
        title: "Conséquences futures",
        label: "du changement climatique",
        action: "Quelles sont les conséquences futures du changement climatique dans votre époque ?",
    },
    {
        title: "Conseils pour réduire",
        label: "mon empreinte carbone",
        action: "Donnez-moi des conseils pour réduire mon empreinte carbone et prévenir le réchauffement climatique.",
    },
    {
        title: "Innovations technologiques",
        label: "contre le réchauffement",
        action: "Quelles innovations technologiques ont été développées dans votre futur pour lutter contre le réchauffement climatique ?",
    },
    {
        title: "Comparaison passé-futur",
        label: "sur l'environnement",
        action: "Comparez l'état de l'environnement entre mon époque et la vôtre. Quels sont les changements majeurs ?",
    },
];

export function MultimodalInput({
    input,
    setInput,
    isLoading,
    stop,
    messages,
    append,
    handleSubmit,
}: {
    input: string;
    setInput: (value: string) => void;
    isLoading: boolean;
    stop: () => void;
    messages: Array<Message>;
    append: (
        message: Message | CreateMessage,
        chatRequestOptions?: ChatRequestOptions
    ) => Promise<string | null | undefined>;
    handleSubmit: (
        event?: {
            preventDefault?: () => void;
        },
        chatRequestOptions?: ChatRequestOptions
    ) => void;
}) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const { width } = useWindowSize();

    useEffect(() => {
        if (textareaRef.current) {
            adjustHeight();
        }
    }, []);

    const adjustHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${
                textareaRef.current.scrollHeight + 0
            }px`;
        }
    };

    const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(event.target.value);
        adjustHeight();
    };

    const submitForm = useCallback(() => {
        if (width && width > 768) {
            textareaRef.current?.focus();
        }
    }, [handleSubmit, width]);

    return (
        <div className="relative w-full flex flex-col gap-4">
            {messages.length === 0 && (
                    <div className="grid sm:grid-cols-2 gap-4 w-full md:px-0 mx-auto md:max-w-[500px]">
                        {suggestedActions.map((suggestedAction, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.05 * index }}
                                key={index}
                                className="border rounded-lg hover:border-green-900/25"
                            >
                                <button
                                    onClick={async () => {
                                        append({
                                            role: "user",
                                            content: suggestedAction.action,
                                        });
                                    }}
                                    className="border-none bg-muted/50 w-full text-left border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 rounded-lg p-3 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex flex-col"
                                >
                                    <span className="font-medium">
                                        {suggestedAction.title}
                                    </span>
                                    <span className="text-zinc-500 dark:text-zinc-400">
                                        {suggestedAction.label}
                                    </span>
                                </button>
                            </motion.div>
                        ))}
                    </div>
                )}

            <Textarea
                ref={textareaRef}
                placeholder="Envoyer un message..."
                value={input}
                onChange={handleInput}
                className="min-h-[24px] overflow-hidden resize-none rounded-lg text-base bg-muted border-none"
                rows={3}
                onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                        event.preventDefault();

                        if (isLoading) {
                            toast.error(
                                "Veuillez attendre que le modèle termine sa réponse !"
                            );
                        } else {
                            submitForm();
                        }
                    }
                }}
            />

            {isLoading ? (
                <Button
                    className="rounded-full p-1.5 h-fit absolute bottom-2 right-2 m-0.5 text-white"
                    onClick={(event) => {
                        event.preventDefault();
                        stop();
                    }}
                >
                    <StopIcon size={14} />
                </Button>
            ) : (
                <Button
                    className="rounded-full p-1.5 h-fit absolute bottom-2 right-2 m-0.5 text-white"
                    onClick={(event) => {
                        event.preventDefault();
                        submitForm();
                    }}
                    disabled={input.length === 0}
                >
                    <ArrowUpIcon size={14} />
                </Button>
            )}

        </div>
    );
}

import { motion } from "framer-motion";
import Link from "next/link";

import { MessageIcon, VercelIcon } from "./icons";

export const Overview = () => {
    return (
        <motion.div
            key="overview"
            className="max-w-[500px] mt-20 mx-4 md:mx-0"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ delay: 0.5 }}
        >
            <div className="border-none bg-muted/50 rounded-2xl p-6 flex flex-col gap-4 text-zinc-500 text-sm dark:text-zinc-400 dark:border-zinc-700">
                <p className="flex flex-row justify-center gap-4 items-center text-zinc-900 dark:text-zinc-50">
                    <VercelIcon />
                    <span>+</span>
                    <MessageIcon />
                </p>
                <h2 className="text-lg font-semibold text-center text-zinc-900 dark:text-zinc-50">
                    Bienvenue dans le Projet Rhizome
                </h2>
                <p>
                    Ce chatbot IA unique vous transporte dans un futur marqué
                    par les conséquences du réchauffement climatique. L&apos;IA
                    incarne un personnage vivant dans ce futur dystopique,
                    confronté à des catastrophes naturelles causées par la
                    pollution et le changement climatique.
                </p>
                <p>
                    En interagissant avec ce personnage du futur, vous pourrez :
                </p>
                <ul className="list-disc list-inside">
                    <li>
                        Découvrir les conséquences futures du changement
                        climatique
                    </li>
                    <li>
                        Obtenir des conseils sur la réduction de votre empreinte
                        carbone
                    </li>
                    <li>
                        Comprendre les différences entre notre époque et le
                        futur représenté
                    </li>
                    <li>
                        Explorer des solutions innovantes pour lutter contre le
                        réchauffement climatique
                    </li>
                </ul>
                <p>
                    Le chatbot utilise l&apos;API Gemini de Google et est construit
                    avec Next.js et l&apos;AI SDK de Vercel. Il emploie la fonction{" "}
                    <code className="rounded-sm bg-muted-foreground/15 px-1.5 py-0.5">
                        streamText
                    </code>{" "}
                    côté serveur et le hook{" "}
                    <code className="rounded-sm bg-muted-foreground/15 px-1.5 py-0.5">
                        useChat
                    </code>{" "}
                    côté client pour créer une expérience de chat fluide et
                    immersive.
                </p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Préparez-vous à un voyage dans le temps pour sauver notre
                    planète !
                </p>
            </div>
        </motion.div>
    );
};

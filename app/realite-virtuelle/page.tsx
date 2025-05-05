import Image from "next/image";
import React from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

const EcoVRPage = () => {
    return (
        <>
            <Header />
            <main className="bg-background text-foreground">
                <section className="px-4 sm:px-6 lg:px-20 py-16 md:py-24 lg:py-32 max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                        L&apos;Avenir Écologique Entre Vos Mains
                    </h2>
                    <p className="text-xl md:text-2xl lg:text-2xl mb-10 leading-relaxed max-w-4xl">
                        ECOCALYPSE Plongez dans une expérience immersive qui
                        mêle réalité virtuelle et intelligence artificielle pour
                        sensibiliser au dérèglement climatique. Dans ECOCALYPSE,
                        vous devrez ramasser des déchets, sauver des animaux et
                        restaurer la nature, tout en dialoguant avec un chatbot
                        éducatif venu d’un futur dystopique. Vos actions
                        transformeront les paysages dévastés en écosystèmes
                        vibrants de vie. Êtes-vous prêt à relever le défi et à
                        devenir un acteur du changement ?
                    </p>

                    {/* Media Gallery */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/eco1.png"
                                    alt="Environnement pollué"
                                    className="size-full object-cover"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/eco2.png"
                                    alt="Nettoyage des déchets"
                                    className="size-full object-cover"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/eco3.png"
                                    alt="Habitat restauré"
                                    className="size-full object-cover"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/eco4.png"
                                    alt="Interaction avec l'IA"
                                    className="size-full object-cover"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-3/4 mx-auto rounded-xl overflow-hidden shadow-2xl mb-10">
                            <video controls className="w-full aspect-video">
                                <source
                                    src="/videos/eco_video.mp4"
                                    type="video/mp4"
                                />
                                Votre navigateur ne supporte pas les vidéos
                                HTML5.
                            </video>
                        </div>
                        <div className="flex justify-center">
                            <button className="group border-2 border-white px-8 py-3 text-lg font-medium hover:bg-white hover:text-black transition duration-300">
                                Télécharger ECOCALYPSE
                            </button>
                        </div>
                    </div>
                </section>

                {/* Game Details Section */}
                <section className="px-4 sm:px-6 lg:px-20 py-16 md:py-24 bg-black/30">
                    <div className="max-w-4xl mx-auto">
                        <h4 className="text-lg md:text-xl lg:text-2xl font-medium mb-2 text-white">
                            ECOCALYPSE
                        </h4>
                        <p className="text-xl md:text-2xl mb-12 italic">
                            &quot;La planète compte sur vos actions. Montrez ce
                            dont vous êtes capable.&quot;
                        </p>

                        <div className="space-y-12">
                            <div>
                                <h4 className="text-2xl md:text-3xl font-bold mb-4">
                                    À propos du jeu
                                </h4>
                                <p className="text-lg md:text-xl leading-relaxed">
                                    ECOCALYPSE est une aventure immersive
                                    révolutionnaire qui fusionne réalité
                                    virtuelle et intelligence artificielle pour
                                    créer une expérience éducative inoubliable.
                                    Explorez différents scénarios climatiques
                                    extrêmes, prenez des décisions cruciales et
                                    découvrez en temps réel les conséquences de
                                    vos choix sur l&apos;environnement virtuel.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-2xl md:text-3xl font-bold mb-4">
                                    Vos missions dans ECOCALYPSE :
                                </h4>
                                <ul className="space-y-3 text-lg md:text-xl">
                                    <li className="flex items-start">
                                        <span className="mr-3">•</span>
                                        <span>
                                            Collecter et trier des déchets dans
                                            des environnements urbains et
                                            naturels dégradés
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3">•</span>
                                        <span>
                                            Secourir des espèces animales en
                                            danger et reconstituer leurs
                                            habitats naturels
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3">•</span>
                                        <span>
                                            Dialoguer avec une IA futuriste pour
                                            comprendre les enjeux climatiques et
                                            découvrir des solutions innovantes
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3">•</span>
                                        <span>
                                            Assister à la transformation
                                            progressive des écosystèmes sous
                                            l&apos;effet de vos actions
                                            positives
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-2xl md:text-3xl font-bold mb-4">
                                    Fonctionnalités clés :
                                </h4>
                                <ul className="space-y-3 text-lg md:text-xl">
                                    <li className="flex items-start">
                                        <span className="mr-3">•</span>
                                        <span>
                                            <strong>
                                                Réalité virtuelle immersive
                                            </strong>{" "}
                                            : Parcourez des environnements 3D
                                            ultra-réalistes montrant les impacts
                                            du changement climatique
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3">•</span>
                                        <span>
                                            <strong>
                                                IA conversationnelle avancée
                                            </strong>{" "}
                                            : Échangez avec un guide virtuel
                                            doté de connaissances approfondies
                                            sur l&apos;écologie
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3">•</span>
                                        <span>
                                            <strong>
                                                Mécaniques de jeu engageantes
                                            </strong>{" "}
                                            : Résolvez des énigmes écologiques
                                            et débloquez des zones restaurées
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3">•</span>
                                        <span>
                                            <strong>
                                                Impact visuel immédiat
                                            </strong>{" "}
                                            : Voyez l&apos;environnement évoluer
                                            en fonction de vos actions
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3">•</span>
                                        <span>
                                            <strong>
                                                Contenu éducatif validé
                                            </strong>{" "}
                                            : Des informations scientifiques
                                            précises intégrées naturellement
                                            dans le gameplay
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default EcoVRPage;

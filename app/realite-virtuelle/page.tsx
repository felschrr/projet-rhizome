"use client";

import Image from "next/image";
import React, { useState } from "react"; 

import { Footer } from "./Footer";
import { Header } from "./Header";

const EcoVRPage = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleDownloadClick = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <Header />
            <main className="bg-background text-foreground">
                {/* Popup VR Warning */}
                {showPopup && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                        onClick={closePopup}
                    >
                        <div 
                            className="bg-[#191919] border-2 border-white rounded-lg max-w-md w-full p-6 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={closePopup}
                                className="absolute top-4 right-4 text-white hover:text-gray-300"
                                aria-label="Fermer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h3 className="text-2xl font-bold mb-4">Information importante</h3>
                            <p className="mb-4">
                                ECOCALYPSE est une expérience conçue spécifiquement pour les casques de réalité virtuelle.
                            </p>
                            <p className="mb-6">
                                Pour une expérience optimale, nous recommandons l&apos;utilisation d&apos;un casque VR compatible avec SteamVR ou Oculus.
                            </p>
                            <div className="flex justify-center">
                                <a 
                                    href="https://drive.usercontent.google.com/download?id=1t4AUZ8zugastqe_l8qJbD_Q9AJSqzBRE&export=download&authuser=0"
                                    className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition flex items-center gap-2"
                                    onClick={closePopup}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    Télécharger maintenant
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                <section className="px-4 sm:px-6 lg:px-20 py-16 md:py-24 lg:py-32 max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                        L&apos;Avenir Écologique Entre Vos Mains
                    </h2>
                    <p className="text-xl md:text-2xl lg:text-2xl mb-10 leading-relaxed max-w-4xl">
                        Plongez dans une expérience immersive qui
                        mêle réalité virtuelle et intelligence artificielle pour
                        sensibiliser au dérèglement climatique. Dans ECOCALYPSE,
                        vous devrez ramasser des déchets, sauver des animaux et
                        restaurer la nature, tout en dialoguant avec un chatbot
                        éducatif venu d&apos;un futur dystopique. Vos actions
                        transformeront les paysages dévastés en écosystèmes
                        vibrants de vie. Êtes-vous prêt à relever le défi et à
                        devenir un acteur du changement ?
                    </p>

                    {/* Media Gallery */}
                    <div className="mb-16">
                            <div className="py-6 flex justify-center mt-12">
                                <button 
                                    onClick={handleDownloadClick}
                                    className="relative overflow-hidden group bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                        Télécharger maintenant
                                    </span>
                                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                                </button>
                            </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/vue_mer.png"
                                    alt="Environnement pollué"
                                    className="size-full object-cover"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/vue_ar.png"
                                    alt="Nettoyage des déchets"
                                    className="size-full object-cover"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/vue_tabl.png"
                                    alt="Vue du tableau de bord de résultats"
                                    className="size-full object-cover"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/vue_jeu.png"
                                    alt="Vue du jeu"
                                    className="size-full object-cover"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-3/4 mx-auto rounded-xl overflow-hidden shadow-2xl mb-10">
                            <iframe
                                className="w-full aspect-video"
                                src="https://www.youtube.com/embed/GabLdI8yhMc"
                                title="Présentation du projet"
                                style={{ border: "0" }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        
                        {/* Bouton de téléchargement amélioré */}
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
                                    ECOCALYPSE est une expérience immersive mêlant réalité virtuelle et intelligence artificielle, où chaque décision compte pour sauver un monde en crise écologique. Découvrez un avenir marqué par le dérèglement climatique et engagez-vous dans une quête interactive pour changer le cours des choses.
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
                                            Ramasser et recycler des déchets dans des environnements pollués
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3">•</span>
                                        <span>
                                            Sauver des animaux menacés et restaurer leurs habitats
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3">•</span>
                                        <span>
                                            Échanger avec un chatbot éducatif venu d’un futur dystopique pour apprendre à agir concrètement
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3">•</span>
                                        <span>
                                            Observer vos efforts transformer la planète et rendre l’espoir à la nature
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-2xl md:text-3xl font-bold mb-4">      
                                    Caractéristiques principales :
                                </h4>
                                <ul className="space-y-3 text-lg md:text-xl">
                                    <li className="flex items-start">
                                        <span className="mr-3">•</span>
                                        <span>
                                            <strong>
                                                Réalité virtuelle immersive
                                            </strong>{" "}
                                            : Explorez des décors 3D hyper réalistes qui illustrent les dégâts du dérèglement climatique
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3">•</span>
                                        <span>
                                            <strong>
                                                Gameplay stimulant et gratifiant 
                                            </strong>{" "}
                                            : Résolvez des défis écologiques et voyez vos actions restaurer la vie
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
                                                Un message d’espoir
                                            </strong>{" "}
                                            : Apprenez comment chaque petit geste compte pour protéger notre avenir commun
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
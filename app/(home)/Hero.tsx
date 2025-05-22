import Image from "next/image";
import React from "react";

export function Hero() {
    return (
        <div className="max-w-screen-2xl mx-auto">
            {/* Section Hero */}
            <section className="min-h-screen flex flex-col justify-between px-4 sm:px-6 py-10 lg:p-20 relative overflow-hidden">
                <div className="flex justify-start">
                    <Image
                        src="/images/Logohero.png"
                        alt="Logo"
                        className="w-32 md:w-48 lg:w-64 xl:w-80 h-auto"
                        width={200}
                        height={200}
                    />
                </div>

                <div className="max-w-4xl mt-10 lg:mt-0">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-6 leading-tight">
                        Dialoguez avec Jean
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl pb-10 leading-relaxed">
                        Plongez dans une expérience immersive où un humain, Jean, venu de l&apos;année 2125, vous révèles les conséquences du dérèglement climatique. 
                        Cet habitant du futur partage des faits saisissants de notre monde devenu apocalyptique et des solutions concrètes pour réécrire notre destin collectif.
                    </p>
                    <div className="flex justify-start">
                        <div className="group border-2 border-white p-1 hover:bg-white transition duration-300">
                            <a
                                href="/chat"
                                className="block border-2 border-white text-white px-6 py-3 text-lg group-hover:text-black group-hover:border-black text-center font-medium"
                            >
                                Commencer le dialogue
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 right-0 w-40 md:w-64 lg:w-80 opacity-70">
                    <Image
                        src="/images/Ellipsechat.png"
                        alt="Decoration"
                        className="w-full h-auto"
                        width={200}
                        height={200}
                    />
                </div>
            </section>

            {/* Section Jeu */}
            <section className="min-h-screen px-4 sm:px-6 lg:px-20 py-20 flex flex-col justify-center bg-black bg-opacity-/50 relative">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-6 leading-tight">
                        Apprenez en jouant, agissez pour la planète
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl pb-10 leading-relaxed">
                        Dans le jeu, vous vivrez une expérience immersive à travers différents niveaux éducatifs. 
                        Vous apprendrez notamment à nettoyer les plages en ramassant les déchets et à protéger les écosystèmes marins. 
                        Ces missions interactives vous montreront concrètement l&apos;impact positif de ces actions sur l&apos;environnement. 
                        Une façon ludique et engageante de comprendre l&apos;importance de préserver nos océans tout en vivant une aventure captivante en réalité virtuelle !
                    </p>
                    <div className="flex justify-start">
                        <div className="group border-2 border-white p-1 hover:bg-white transition duration-300">
                            <a
                                href="/realite-virtuelle"
                                className="block border-2 border-white text-white px-6 py-3 text-lg group-hover:text-black group-hover:border-black text-center font-medium"
                            >
                                Découvrir le jeu
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section Video Presentation du projet */}
            <section className="min-h-screen px-4 sm:px-6 lg:px-20 py-20 flex flex-col justify-center  bg-opacity-/50 relative">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-6 leading-tight">
                        Découvrez notre projet
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl pb-10 leading-relaxed">
                        Plongez dans notre projet à travers cette vidéo
                        captivante. Découvrez comment nous transformons la
                        sensibilisation climatique en une expérience immersive et
                        engageante.
                    </p>
                        <div className="w-full lg:w-2/4 mx-auto rounded-xl overflow-hidden shadow-2xl mb-10">
                            <video controls className="w-full aspect-video">
                                <source
                                    src="https://www.youtube.com/watch?v=WuFgRM8iTQ4"
                                    type="video/mp4"
                                />
                                Votre navigateur ne supporte pas les vidéos
                                HTML5.
                            </video>
                        </div>
                </div>
            </section>
    
            {/* Section Événement */}
            <section className="min-h-screen px-4 sm:px-6 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 bg-black gap-10 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-6 leading-tight">
                        Rencontrez-nous à au Le 19 Crac Montbéliard
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl pb-10 leading-relaxed">
                        Participez à notre événement le 11 juin à 14h au 19 Crac Montbéliard ! Venez rencontrer notre équipe, découvrir notre projet et tester notre technologie de réalité virtuelle immersive. Nous échangerons ensemble sur l’avenir de notre planète et l’impact du changement climatique sur nos vies. Saisissez cette opportunité unique de vous engager concrètement pour un futur durable. Nous vous attendons nombreux à l’adresse suivante : 19 AV des Alliés, 25200 Montbéliard.
                    </p>
                    <div className="group border-2 border-white p-1 hover:bg-white transition duration-300 inline-block">
                        <a
                            href="https://le19crac.com/"
                            className="block border-2 border-white text-white px-6 py-3 text-lg group-hover:text-black group-hover:border-black text-center font-medium"
                        >
                            le Crac 19 Montbéliard
                        </a>
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <Image
                        src="/images/le-19-crac-montbeliard.webp"
                        alt="Fête de la Science Montbéliard"
                        className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-lg shadow-xl"
                        width={200}
                        height={200}
                    />
                </div>
            </section>
        </div>
    );
}

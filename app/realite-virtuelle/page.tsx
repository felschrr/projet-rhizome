import React from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

const EcoVRPage  = () => {
    return (
         <>
         <Header/>
         <main className="bg-background text-foreground">
        <section className="px-10 py-20">
            <h2 className="font-extrabold py-4 ">L’Avenir Entre Vos Mains</h2>
            <h4>ECOCALYPSE</h4>
            <p className="text-xl pb-4">Plongez dans une expérience immersive qui mêle réalité virtuelle et intelligence artificielle pour sensibiliser au dérèglement climatique. Dans ECOCALYPSE, vous devrez ramasser des déchets, sauver des animaux et restaurer la nature, tout en dialoguant avec un chatbot éducatif venu d’un futur dystopique.
            Vos actions transformeront les paysages dévastés en écosystèmes vibrants de vie. Êtes-vous prêt à relever le défi et à devenir un acteur du changement ?</p>
            <div>
                {/* slider pour affiche 4 image et 1 video */}
                <div className="flex gap-4 overflow-x-auto py-10">
                    <img src="/images/eco1.png" alt="Image 1" className="w-1/4 h-auto rounded-lg" />
                    <img src="/images/eco2.png" alt="Image 2" className="w-1/4 h-auto rounded-lg" />
                    <img src="/images/eco3.png" alt="Image 3" className="w-1/4 h-auto rounded-lg" />
                    <img src="/images/eco4.png" alt="Image 4" className="w-1/4 h-auto rounded-lg" />
                    <video controls className="w-1/4 h-auto rounded-lg">
                        <source src="/videos/eco_video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
        <section className="px-10 pb-20">
            <h4>ECOCALYPSE</h4>
            <p>La planète a besoin de vous. Serez-vous à la hauteur ?</p>
            <h4>À propos du jeu</h4>
            <p>ECOCALYPSE est une expérience immersive mêlant réalité virtuelle et intelligence artificielle, où chaque décision compte pour sauver un monde en crise écologique. Découvrez un avenir marqué par le dérèglement climatique et engagez-vous dans une quête interactive pour changer le cours des choses.</p>
            <h4>Vos objectifs dans ECOCALYPSE :</h4>
            <ul>
                <li>Ramasser et recycler des déchets dans des environnements pollués</li>
                <li>Sauver des animaux menacés et restaurer leurs habitats</li>
                <li>Échanger avec un chatbot éducatif venu d’un futur dystopique pour apprendre à agir concrètement</li>
                <li>Observer vos efforts transformer la planète et rendre l’espoir à la nature</li>
            </ul>
            <h4>Caractéristiques principales :</h4>
            <ul>
                <li>Expérience VR immersive : Explorez des décors 3D hyper réalistes qui illustrent les dégâts du dérèglement climatique</li>
                <li>Interaction éducative avec IA : Découvrez des conseils pratiques grâce à un chatbot engageant et accessible</li>
                <li>Gameplay stimulant et gratifiant : Résolvez des défis écologiques et voyez vos actions restaurer la vie</li>
                <li>Un message d’espoir : Apprenez comment chaque petit geste compte pour protéger notre avenir commun</li>
            </ul>
        </section>
        </main>
        <Footer/>
        </>
    );
};
export default EcoVRPage ;
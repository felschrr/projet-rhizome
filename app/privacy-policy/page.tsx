import React from 'react';

import { Footer } from './Footer';
import { Header } from './Header';


const PrivacyPolicy = () => {
  return (
    <>
    
      <Header />
      
      <main className="bg-background text-foreground min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Politique de Confidentialité</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">1. Notre philosophie</h2>
              <p>
                Chez ECOCALYPSE, nous respectons profondément votre vie privée. Contrairement à la plupart des sites web, nous avons fait le choix délibéré de <strong>ne pas collecter de données personnelles</strong> inutiles.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">2. Ce que nous ne collectons pas</h2>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Nous <strong>ne suivons pas</strong> votre navigation sur le site</li>
                <li>Notre chatbot <strong>ne stocke pas</strong> vos conversations</li>
                <li>Nous <strong>n&apos;utilisons pas</strong> d&apos;outils d&apos;analyse comportementale</li>
                <li>Nous <strong>ne vendons pas</strong> de données car nous n&apos;en collectons pas</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">3. Formulaire de contact</h2>
              <p>
                Le seul moment où nous collectons des informations est lorsque vous choisissez volontairement de nous contacter via notre formulaire. Dans ce cas, nous ne conservons que :
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Votre adresse email (pour vous répondre)</li>
                <li>Le contenu de votre message</li>
              </ul>
              <p>
                Ces informations sont <strong>supprimées sous 30 jours</strong> après traitement de votre demande.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
              <p>
                Nous utilisons un seul cookie strictement nécessaire au fonctionnement du site :
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Cookie de session (disparaît quand vous quittez le navigateur)</li>
              </ul>
              <p>
                Aucun cookie de suivi ou de marketing n&apos;est utilisé.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">2. Hébergement chez Vercel</h2>
              <p>
                Notre site est hébergé par <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Vercel Inc.</a> Conformément à leur politique de confidentialité :
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Les données transitent par des serveurs situés aux États-Unis et en Europe</li>
                <li>Vercel peut collecter des logs techniques (adresses IP) pour la sécurité et maintenance</li>
                <li>Ces logs sont automatiquement purgés après <strong>30 jours maximum</strong></li>
              </ul>
              <p>
                Nous n&apos;avons pas accès à ces données brutes d&apos;hébergement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">6. Transparence</h2>
              <p>
                Nous croyons en la transparence. Si vous avez des questions sur notre approche de la vie privée, nous nous engageons à y répondre ouvertement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Nous contacter</h2>
              <p>
                Pour toute question concernant cette politique :
              </p>
              <address className="not-italic mt-4">
                ECOCALYPSE<br />
                Email : <a href="mailto:contact@ecocalypse.fr" className="text-blue-400 hover:underline">contact@ecocalypse.fr</a>
              </address>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
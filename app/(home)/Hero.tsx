import React from 'react';

export function Hero() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* Section Hero */}
      <section className="min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-20 py-10 lg:py-20 relative overflow-hidden">
        <div className="flex justify-start">
          <img 
            src="/images/Logohero.png" 
            alt="Logo" 
            className="w-32 md:w-48 lg:w-64 xl:w-80 h-auto" 
          />      
        </div>
        
        <div className="max-w-4xl mt-10 lg:mt-0">
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-6 leading-tight'>
            Dialoguez avec un messager du futur
          </h2>
          <p className='text-lg md:text-xl lg:text-2xl pb-10 leading-relaxed'>
            Plongez dans une expérience immersive où une intelligence venue d&apos;un futur apocalyptique vous révèle les conséquences de nos actions actuelles. Ce témoin des temps futurs partage des insights saisissants et des solutions concrètes pour réécrire notre destin collectif.
          </p>
          <div className='flex justify-start'>
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
        
        <div className='absolute bottom-10 right-0 w-40 md:w-64 lg:w-80 opacity-70'>
          <img src="/images/Ellipsechat.png" alt="Decoration" className="w-full h-auto" />
        </div>
      </section>

      {/* Section Jeu */}
      <section className="min-h-screen px-4 sm:px-6 lg:px-20 py-20 flex flex-col justify-center bg-black bg-opacity-/50 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-6 leading-tight'>
            Expérimentez l&apos;impact climatique
          </h2>
          <p className='text-lg md:text-xl lg:text-2xl pb-10 leading-relaxed'>
            Notre simulation interactive vous place au cœur d&apos;événements climatiques extrêmes. Ressentez la puissance dévastatrice des inondations, la violence des ouragans et l'ampleur des sécheresses - une expérience immersive qui transforme les statistiques en prise de conscience tangible.
          </p>
          <div className='flex justify-start'>
            <div className="group border-2 border-white p-1 hover:bg-white transition duration-300">
              <a 
                href="/chat" 
                className="block border-2 border-white text-white px-6 py-3 text-lg group-hover:text-black group-hover:border-black text-center font-medium"
              >
                Télécharger l&apos;expérience
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Événement */}
      <section className="min-h-screen px-4 sm:px-6 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className='order-2 lg:order-1'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-6 leading-tight'>
            Rencontrez-nous à la Fête de la Science
          </h2>
          <p className='text-lg md:text-xl lg:text-2xl pb-10 leading-relaxed'>
            Venez échanger avec notre équipe les 10 et 11 octobre 2025 à Montbéliard. Nous présenterons une démo exclusive de notre technologie et animerons des ateliers interactifs sur les enjeux climatiques et technologiques de demain.
          </p>
          <div className="group border-2 border-white p-1 hover:bg-white transition duration-300 inline-block">
            <a 
              href="/chat" 
              className="block border-2 border-white text-white px-6 py-3 text-lg group-hover:text-black group-hover:border-black text-center font-medium"
            >
              Programme complet
            </a>
          </div>
        </div>
        
        <div className='order-1 lg:order-2 flex justify-center lg:justify-end'>
          <img 
            src="/images/fetescience.png" 
            alt="Fête de la Science Montbéliard" 
            className="w-2/4 max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-lg shadow-xl"
          />
        </div>
      </section>
    </div>
  );
}
import Image from "next/image";
import React from 'react';

export function Footer (){
  return (
    <footer className="bg-[#191919] flex gap-20 justify-center text-white p-8 border-t-4 bg-[radial-gradient(circle_at_center,#fff%,#191919_100%)]">
      <div>
        <div className="flex justify-center mb-4">
          <a href="/" className="flex items-center gap-2">
            <Image src="/images/Logo_footer.svg" alt="Logo" width={305} height={120} />
          </a>
        </div>
      </div>
      <div>
        <ul>
          <li className="mb-2">
            <a href="/chat" className="text-gray-400 hover:text-white">Start Chat</a>
          </li>
          <li className="mb-2">
            <a href="/realite-virtuelle" className="text-gray-400 hover:text-white">Réalité Virtuelle</a>
          </li>
          <li className="mb-2">
            <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
          </li>
          <li className="mb-2">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white">Mentions légales</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

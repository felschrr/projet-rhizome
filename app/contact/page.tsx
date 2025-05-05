import React from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

const ContactPage = () => {
    return (
         <>
         <Header/>
         <main className="bg-background text-foreground">
        <section className="px-10 py-20">
            <h2 className="font-extrabold py-4 ">Nous contacter</h2>
            <p className="text-xl pb-4">Besoin d&apos;informations ? Une question ? Envie de participer ? Nous sommes à votre écoute ! </p>
            <div className="py-10 flex flex-col gap-4 justify-center items-center rounded " style={{ backgroundImage: "url(/images/bgcontact.png)", backgroundSize: "cover", backgroundPosition: "center",  }}>
                <h3 className="font-semibold">NOUS CONTACTER</h3>
                <div>
                    <form className="flex flex-col gap-4 max-w-[400px]">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Nom et Prénom :</label>
                            <input type="text" id="name" name="name" className="border rounded p-2" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Adresse e-mail :</label>
                            <input type="email" id="email" name="email" className="border rounded p-2" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message">Message :</label>
                            <textarea id="message" name="message" rows={5} className="border rounded p-2"></textarea>
                        </div>
                        <div>
                            {/* boxchque */}
                            <input type="checkbox" id="checkbox" name="checkbox" className="mr-2" />
                            <label htmlFor="checkbox">J&apos;accepte et j’ai lu les conditions générales d’utilisations.</label>    
                        </div>
                        <div className="mx-auto   border-2 border-white  p-2 flex justify-center items-center w-24  ">
                            <button type="submit" className="border-2 border-white text-white  p-2 hover:bg-white hover:text-black">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </main>
        <Footer/>
        </>
    );
};
export default ContactPage;
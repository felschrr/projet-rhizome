"use client";
import { useState } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header"; 


const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        agree: false
    });
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.agree) {
            setSubmitStatus({ success: false, message: "Veuillez accepter les conditions d'utilisation" });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        const formPayload = new FormData();
        formPayload.append('name', formData.name);
        formPayload.append('email', formData.email);
        formPayload.append('message', formData.message);

        try {
            const response = await fetch("https://formspree.io/f/xkgrebkz", {
                method: "POST",
                body: formPayload,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitStatus({ success: true, message: "Message envoyé avec succès !" });
                setFormData({ name: "", email: "", message: "", agree: false });
            } else {
                throw new Error('Échec de l\'envoi');
            }
        } catch (error) {
            setSubmitStatus({ success: false, message: "Une erreur est survenue. Veuillez réessayer." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>  
            <Header />  
            <main className="bg-background text-foreground min-h-screen">
                <section className="px-4 sm:px-6 lg:px-20 py-12 md:py-20">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Nous contacter</h2>
                        <p className="text-xl mb-8 md:mb-12">
                            Besoin d&apos;informations ? Une question ? Envie de participer ? 
                            Nous sommes à votre écoute !
                        </p>
                        
                        <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 md:p-10 border border-gray-700">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-semibold text-white">NOUS CONTACTER</h3>
                            </div>
                            

                            
                            <form 
                                onSubmit={handleSubmit}
                                className="max-w-md mx-auto space-y-6"
                            >
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium">
                                        Nom et Prénom :
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium">
                                        Adresse e-mail :
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                
                                <div className="space-y-2">
                                    <label htmlFor="message" className="block text-sm font-medium">
                                        Message :
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    ></textarea>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="agree"
                                            name="agree"
                                            type="checkbox"
                                            checked={formData.agree}
                                            onChange={handleChange}
                                            required
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-700 focus:ring-blue-500"
                                        />
                                    </div>
                                    <label htmlFor="agree" className="ml-3 text-sm">
                                        J&apos;accepte et j&apos;ai lu les conditions générales d&apos;utilisation.
                                    </label>
                                </div>
                                
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={!formData.agree || isSubmitting}
                                        className={`w-full border-2 border-white text-white px-6 py-3 rounded-lg font-medium transition-colors ${formData.agree && !isSubmitting ? 'hover:bg-white hover:text-black' : 'opacity-50 cursor-not-allowed'}`}
                                    >
                                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                                    </button>
                                </div>
                            </form>
                            {submitStatus && (
                                <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-900 text-green-100' : 'bg-red-900 text-red-100'}`}>
                                    {submitStatus.message}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer />
        </>
    );
};

export default ContactPage;
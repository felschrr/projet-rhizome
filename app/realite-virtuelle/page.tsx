import React from 'react';

import { Footer } from "./Footer";
import { Header } from "./Header";
const ContactPage = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Contactez-nous</h1>
            <p>Si vous avez des questions, Nhésitez pas à nous contacter via le formulaire ci-dessous :</p>
            <form style={{ maxWidth: '400px', marginTop: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Nom :</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message :</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    style={{
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        padding: '10px 15px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Envoyer
                </button>
            </form>
        </div>
    );
};
export default ContactPage;
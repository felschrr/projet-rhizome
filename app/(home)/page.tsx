import React from "react";

import { Header } from "./Header";
import { Hero } from "./Hero";
import { Footer } from "./Footer";


const page = () => {
    return (
        <>
        <Header/>
            <main className="bg-background text-foreground">
                <Hero />
            </main>
        <Footer/>
        </>
    );
};

export default page;

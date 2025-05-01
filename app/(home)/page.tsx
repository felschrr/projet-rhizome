import React from "react";

import { About } from "./About";
import { Features } from "./Features";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Footer } from "./Footer";


const page = () => {
    return (
        <>
        <Header/>
            <main className="bg-background text-foreground">
                <Hero />
                <Features />
                <About />
            </main>
        <Footer/>
        </>
    );
};

export default page;

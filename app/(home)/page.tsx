import React from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";

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

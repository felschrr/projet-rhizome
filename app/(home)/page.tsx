import React from "react";
import { About } from "./About";
import { Features } from "./Features";
import { Hero } from "./Hero";
import { Header } from "./Header";

const page = () => {
    return (
        <>
          <Header/>
            <main className="bg-background text-foreground">
                <Hero />
                <Features />
                <About />
            </main>
        </>
    );
};

export default page;

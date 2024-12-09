import React from "react";

import { About } from "./About";
import { Features } from "./Features";
import { Header } from "./Header";
import { Hero } from "./Hero";

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

import React from "react";
import mixpanel from "mixpanel-browser";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import BrowserOnly from "@docusaurus/BrowserOnly";

if (process.env.NODE_ENV === "production") {
  mixpanel.init("eec85d062d86fd7d20d2d8d5d20bf578");
  mixpanel.track("Waitlist");
}

export default function Waitlist() {
  return (
    <>
      <Header />
      <main>
        <BrowserOnly>
          {() => (
            <iframe
              className="mt-20 h-96 w-full"
              src="https://noteforms.com/forms/get-started-with-zksig-rp2qu7"
            ></iframe>
          )}
        </BrowserOnly>
      </main>
      <Footer />
    </>
  );
}

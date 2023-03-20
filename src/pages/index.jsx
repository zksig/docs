import React from "react";
import mixpanel from "mixpanel-browser";
import { CallToAction } from "../components/CallToAction";
import { Hero } from "../components/Hero";
import Features from "../components/Features";
import { HowItWorks } from "../components/HowItWorks";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

if (process.env.NODE_ENV === "production") {
  mixpanel.init("eec85d062d86fd7d20d2d8d5d20bf578");
  mixpanel.track("Home View");
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <CallToAction />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

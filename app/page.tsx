import Hero from "@/components/hero/hero";
import PageTransisition from "@/components/pageTransition";
import React from "react";

export default function Home() {
  return (
    <PageTransisition>
      <Hero />
    </PageTransisition>
  );
}

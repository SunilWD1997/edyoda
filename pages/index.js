import { useState } from "react";
import { createContext } from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";

export const rateContext = createContext();
export default function Home() {
  const [rate, setRate] = useState(99);

  return (
    <div>
      <rateContext.Provider value={{rate, setRate}}>
        <Header />
        <Hero />
      </rateContext.Provider>
    </div>
  );
}

import Hero from "../components/web/Hero";
import Article from "../components/web/Article";
import Accordian from "../components/web/Accordian";
import Aside from "../components/web/Aside";

import Reviews from "../components/web/Reviews";
import { supabase } from "@/lib/supabaseClient";
export default function Home() {
  
supabase.auth.getSession().then(console.log);
  return (
    <>
      <Hero />
      <Article />
      <Aside />
      <Accordian />
      <Reviews />
      
    </>
  );
}


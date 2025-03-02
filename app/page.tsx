import { Hero } from "@/components";
import Image from "next/image";

export default function Home() {
  console.log("Hello, world!");
  console.log("ENV ::: ", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
  
  return (
    <div >
      <Hero />
    </div>
  );
}

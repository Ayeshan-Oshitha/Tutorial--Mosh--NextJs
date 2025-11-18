"use client";

import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import coffee from "@/public/images/coffee.jpg";
import dynamic from "next/dynamic";
import { useState } from "react";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  // const session = await getServerSession(authOptions);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <main className="flex flex-col gap-y-3">
      <h1 className="font-poppins">
        {/* Hello {session && <span>{session.user?.name}</span>} */}
        Hello
      </h1>
      <Link href="/users">Go to Users Page</Link>
      <ProductCard />

      <button onClick={() => setIsVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />}

      {/* <Image
        src={coffee}
        alt="Coffee"
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width:480px) 100vw, (max-width:768px) 50vw, 33vw "
        quality={75}
      /> */}

      {/* remote image from bit.ly */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="Coffee"
        width="200"
        height="200"
      /> */}
    </main>
  );
}

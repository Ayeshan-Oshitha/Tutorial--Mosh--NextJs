import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Go to Users Page</Link>
      <ProductCard />
    </main>
  );
}

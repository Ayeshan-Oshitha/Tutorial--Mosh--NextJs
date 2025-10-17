import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-3">
      <h1>Hello World</h1>
      <Link href="/users">Go to Users Page</Link>
      <ProductCard />
    </main>
  );
}

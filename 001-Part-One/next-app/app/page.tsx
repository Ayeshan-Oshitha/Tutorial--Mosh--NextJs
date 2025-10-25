import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex flex-col gap-y-3">
      <h1>Hello {session && <span>{session.user?.name}</span>}</h1>
      <Link href="/users">Go to Users Page</Link>
      <ProductCard />
    </main>
  );
}

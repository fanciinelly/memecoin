// File: src/app/explore/page.tsx

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface MemeLaunch {
  _id: string;
  name: string;
  ticker: string;
  description: string;
  chain: string;
  imageUrl: string;
  contractAddress?: string;
}

export default function ExplorePage() {
  const [launches, setLaunches] = useState<MemeLaunch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // fetch("http://localhost:4000/launches")
    fetch("https://memebreaker-backend-production.up.railway.app/launches")
      .then((res) => res.json())
      .then((data) => setLaunches(data))
      .catch(() => setError("Failed to fetch launches"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="bg-black text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-10">Explore Meme Coins</h1>

      {loading && <p>Loading launches...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {launches.map((coin) => (
          <Link href={`/explore/${coin._id}`} key={coin._id} className="block">
            <div className="bg-neutral-900 p-6 rounded-xl border border-fuchsia-600 hover:border-fuchsia-400 transition">
              <Image
                src={coin.imageUrl}
                alt={coin.name}
                width={400}
                height={300}
                className="rounded-lg mb-4 object-cover w-full h-[200px]"
              />
              <h2 className="text-2xl font-semibold mb-1">
                {coin.name} (${coin.ticker})
              </h2>
              <p className="text-md text-gray-300 mb-2">Chain: {coin.chain}</p>
              <p className="text-sm text-gray-400 mb-2">{coin.description}</p>
              <p className="text-xs text-green-400">
                Status: {coin.contractAddress ? "Deployed ✅" : "Not yet deployed ❌"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

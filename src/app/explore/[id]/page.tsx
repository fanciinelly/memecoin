// File: src/app/explore/[id]/page.tsx

"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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

export default function LaunchDetailPage() {
  const { id } = useParams();
  const [launch, setLaunch] = useState<MemeLaunch | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/launches/${id}`)
      .then((res) => res.json())
      .then((data) => setLaunch(data))
      .catch(() => setError("Failed to fetch coin details"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) return <p className="p-10 text-white">Loading...</p>;
  if (error) return <p className="p-10 text-red-500">{error}</p>;
  if (!launch) return <p className="p-10 text-white">Coin not found</p>;

  return (
    <main className="bg-black text-white min-h-screen p-10">
      <Link href="/explore" className="text-fuchsia-500 underline mb-6 block">&larr; Back to Explore</Link>

      <div className="max-w-3xl mx-auto bg-neutral-900 p-10 rounded-xl border border-fuchsia-600">
        <Image
          src={launch.imageUrl}
          alt={launch.name}
          width={600}
          height={400}
          className="rounded-xl w-full h-[300px] object-cover mb-6"
        />

        <h1 className="text-4xl font-bold mb-2">{launch.name} (${launch.ticker})</h1>
        <p className="text-md text-gray-300 mb-2">Chain: {launch.chain}</p>
        <p className="text-md text-gray-300 mb-2">Status: {launch.contractAddress ? "Deployed ✅" : "Not yet deployed ❌"}</p>
        <p className="text-sm text-gray-400 mt-4">{launch.description}</p>

        {launch.contractAddress && (
          <div className="mt-6 text-sm text-green-400">
            <p className="mb-2">Contract Address:</p>
            <div className="flex items-center gap-4">
              <span className="break-all">{launch.contractAddress}</span>
              <button
                onClick={() => handleCopy(launch.contractAddress!)}
                className="bg-fuchsia-700 hover:bg-fuchsia-600 text-white px-3 py-1 rounded"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

// File: src/app/interact/[address]/page.tsx

"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  BrowserProvider,
  JsonRpcProvider,
  Contract,
  formatEther,
  parseEther,
  Eip1193Provider
} from "ethers";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const abi = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function transfer(address to, uint256 amount) returns (bool)"
];

export default function InteractPage() {
  const { address } = useParams();
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<any>(null);
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("");
  const [decimals, setDecimals] = useState<number | null>(null);
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [txStatus, setTxStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<any[]>([]);

  const connectWallet = async () => {
    if (!window.ethereum) return setError("MetaMask not found");
    const ethProvider = new BrowserProvider(window.ethereum as unknown as Eip1193Provider);
    await ethProvider.send("eth_requestAccounts", []);
    setProvider(ethProvider);
    setSigner(await ethProvider.getSigner());
  };

  const handleTransfer = async () => {
    if (!signer || !address) return setTxStatus("Wallet not connected");
    try {
      const contract = new Contract(address as string, abi, signer);
      const tx = await contract.transfer(to, parseEther(amount));
      await tx.wait();
      setTxStatus("Transfer successful ✅");
    } catch (err) {
      console.error(err);
      setTxStatus("Transfer failed ❌");
    }
  };

  useEffect(() => {
    if (!address) return;
    try {
      const ethProvider = new JsonRpcProvider("https://sepolia.base.org");
      const contract = new Contract(address as string, abi, ethProvider);

      contract.name().then(setName);
      contract.symbol().then(setSymbol);
      contract.totalSupply().then((s: any) => setSupply(formatEther(s)));
      contract.decimals().then(setDecimals);

      setStats([
        { name: "Supply", value: Number(formatEther("1000000")) },
        { name: "Holders", value: 152 },
        { name: "Transfers", value: 45 },
      ]);
    } catch (err) {
      console.error(err);
      setError("Failed to load token info");
    }
  }, [address]);

  return (
    <main className="bg-black text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4">Token Info</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="bg-neutral-900 p-6 rounded-xl border border-fuchsia-600 max-w-xl mb-10">
        <p className="mb-2">Name: {name}</p>
        <p className="mb-2">Symbol: {symbol}</p>
        <p className="mb-2">Total Supply: {supply}</p>
        <p className="mb-2">Decimals: {decimals ?? "?"}</p>

        <button
          onClick={connectWallet}
          className="mt-4 bg-fuchsia-700 hover:bg-fuchsia-600 px-4 py-2 rounded"
        >
          Connect Wallet
        </button>

        <div className="mt-8">
          <h2 className="text-xl mb-2">Transfer Tokens</h2>
          <input
            className="w-full bg-neutral-800 p-2 rounded mb-2"
            placeholder="Recipient address"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <input
            className="w-full bg-neutral-800 p-2 rounded mb-2"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            onClick={handleTransfer}
            className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded w-full"
          >
            Send
          </button>
          {txStatus && <p className="mt-2 text-sm text-yellow-400">{txStatus}</p>}
        </div>
      </div>

      <div className="bg-neutral-900 p-6 rounded-xl border border-fuchsia-600 max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">Stats Overview</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={stats}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Bar dataKey="value" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

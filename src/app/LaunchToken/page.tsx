"use client"
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/8.png";
import { useAppKitAccount } from "@reown/appkit/react";
import { GoUpload } from "react-icons/go";
import { FiHome } from "react-icons/fi";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { PiChartLineUpBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { MdCurrencyExchange } from "react-icons/md";
// import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { LiaTelegram } from "react-icons/lia";
import { AiOutlineDiscord } from "react-icons/ai";
import { TbBrandTiktok } from "react-icons/tb";

export default function LaunchToken() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<{ url: string; type: string } | null>(null);
  const [name, setName] = useState("");
  const [ticker, setTicker] = useState("");
  const [description, setDescription] = useState("");
  const [chain, setChain] = useState("Ethereum");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [wallets, setWallets] = useState<any>(null);

  const { address, isConnected } = useAppKitAccount();

  const handleClick = () => fileInputRef.current?.click();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview({ url, type: file.type });
      setImageFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isConnected || !address || !imageFile) {
      alert("Please connect your wallet and select an image");
      return;
    }

    try {
      const walletRes = await fetch("http://localhost:4000/wallets/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ connectedWallet: address })
      });
      const walletData = await walletRes.json();
      setWallets(walletData);

      const formData = new FormData();
      formData.append("file", imageFile);

      const uploadRes = await fetch("http://localhost:4000/uploads", {
        method: "POST",
        body: formData
      });
      const { imageUrl } = await uploadRes.json();

      const launchRes = await fetch("http://localhost:4000/launches/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          connectedWallet: address,
          name,
          ticker,
          description,
          chain,
          imageUrl,
          evmWalletAddress: walletData.evmWallet.address,
          solanaWalletAddress: walletData.solanaWallet.address
        })
      });

      const launchData = await launchRes.json();
      alert("Coin successfully launched! 🎉");
      console.log("Launch result:", launchData);
    } catch (err) {
      console.error("Submit failed:", err);
      alert("Something went wrong while submitting");
    }
  };

  return (
    <main className="relative w-screen flex flex-row min-h-screen montserrat bg-black text-white overflow-x-hidden">
      <div className="w-[320px] border-r-fuchsia-600 border-r-1 flex flex-col justify-between max-md:hidden">
        <div className="flex-none justify-center items-center pt-5 pr-5 border-b-1 border-b-fuchsia-500">
          <a href="">
            <Image src={logo} alt="logo" className="w-40 h-32 shrink-0 hover:cursor-pointer mx-auto" />
          </a>
        </div>
        <div className="flex h-full flex-col flex-grow w-[320px] border-r-1 border-r-fuchsia-600 pt-10">
          <div className="h-full text-xl font-medium flex flex-col gap-5 px-2">
            <Link href="/" className="flex flex-row justify-start items-center gap-5 hover:cursor-pointer active:bg-neutral-900 px-8 py-5 rounded-xl">
              <FiHome />
              <p>Home</p>
            </Link>
            <Link href="" className="flex flex-row gap-5 justify-start items-center hover:cursor-pointer active:bg-neutral-900 px-8 py-5 rounded-xl text-xl">
              <HiOutlinePlusCircle className="text-2xl" />
              <p>Create New Coin</p>
            </Link>
            <Link href="" className="flex flex-row gap-5 justify-start items-center hover:cursor-pointer active:bg-neutral-900 px-8 py-5 rounded-xl">
              <PiChartLineUpBold className="text-2xl" />
              <p>Block Zero</p>
            </Link>
            <Link href="" className="flex flex-row gap-5 justify-start items-center hover:cursor-pointer active:bg-neutral-900 px-8 py-5 rounded-xl">
              <CgProfile className="text-2xl" />
              <p>Profile</p>
            </Link>
            <Link href="./MarketMaker" className="flex flex-row gap-5 justify-start items-center hover:cursor-pointer active:bg-neutral-900 px-8 py-5 rounded-xl text-xl">
              <MdCurrencyExchange className="text-2xl" />
              <p>Market Maker</p>
            </Link>
          </div>
        </div>
        <div className="w-full flex-none h-[130px] border-t-[#7846D9] border-t-1 flex items-center justify-start px-10">
          <button className="flex items-center hover:cursor-pointer active:text-fuchsia-500 text-[18px]">
            <CgProfile /> &nbsp; Log out...
          </button>
        </div>
      </div>

      <div className="flex-grow flex-col relative flex justify-between overflow-auto">
        <form onSubmit={handleSubmit} className="w-[450px] h-[700px] m-auto">
          <p className="text-center text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] via-[#7b38ff] to-[#00ffff] font-bold mb-11 underline hover:cursor-pointer">
            [How it works]
          </p>
          <label className="text-sm">Name</label>
          <input className="w-full bg-neutral-800 p-2 rounded-md border-1 mt-2 mb-2" value={name} onChange={(e) => setName(e.target.value)} />
          <label className="text-sm">Ticker</label>
          <div className="flex flex-row w-full bg-neutral-800 rounded-md border-1 mt-2 mb-2">
            <p className="border-r-1 border-whi py-2 px-3">$</p>
            <input className="m-2 w-full" value={ticker} onChange={(e) => setTicker(e.target.value)} />
          </div>
          <label className="text-sm">Description</label>
          <input className="w-full bg-neutral-800 p-2 rounded-md border-1 mt-2 mb-2" value={description} onChange={(e) => setDescription(e.target.value)} />
          <label className="text-sm">Chain</label>
          <select className="bg-black border border-gray-300 text-white text-md rounded-md block w-full p-2 mt-2 mb-2" value={chain} onChange={(e) => setChain(e.target.value)}>
            <option value="Ethereum">Ethereum</option>
            <option value="BSC">BSC</option>
            <option value="Base">Base</option>
            <option value="Solana">Solana</option>
            <option value="Ton">Ton</option>
          </select>
          <label className="text-sm">Image or Video</label>
          <div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*,video/*"
              onChange={handleFileChange}
            />
            <div className="w-full bg-neutral-800 rounded-md border-1 mt-2 flex flex-col gap-4 p-7 items-center hover:cursor-pointer" onClick={handleClick}>
              {preview ? (
                preview.type.startsWith("image/") ? (
                  <Image
                    src={preview.url}
                    alt="Uploaded"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video controls className="w-full h-full">
                    <source src={preview.url} type={preview.type} />
                    Your browser does not support the video tag.
                  </video>
                )
              ) : (
                <div className="flex flex-col items-center gap-2 ">
                  <GoUpload className="text-2xl" />
                  <p className="text-center"> Drag and drop your image/video</p>
                  <p className="text-center">or</p>
                  <p className="text-cener text-[#6575FF] ">Browse</p>
                </div>
              )}
            </div>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-[#ff00ff] via-[#7b38ff] to-[#00ffff] p-4 rounded-xl border-1 font-bold mt-5">
            Create Coin
          </button>
          <p className="text-[12px] text-center mt-2">When your coin completes its bonding curve, you receive 0.5 SOL</p>
        </form>
      </div>
    </main>
  );
}

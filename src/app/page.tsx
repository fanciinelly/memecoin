"use client"
import Header from "@/app/Componenets/LandingPage/Header";
import Features from "@/app/Componenets/LandingPage/Features";
import UsePart from "@/app/Componenets/LandingPage/UsePart";
import PriceFee from "@/app/Componenets/LandingPage/PriceFee";
import Footer from "@/app/Componenets/LandingPage/Footer";
import { RxHamburgerMenu } from "react-icons/rx";
import ConnectWalletButton from "@/app/Componenets/LaunchToken/ConnectWalletButton";
import Link from "next/link";
import Image from "next/image";
import mainLogo from "@/assets/8.png"

export default function Home() {
  return (
    <main className="relative w-screen min-h-screen montserrat bg-black text-white overflow-x-hidden">
    <div className="w-full">
        <div className="mx-auto w-8/10 border-x-fuchsia-600 border-x-1 h-25 flex max-xl:p-10 max-md:p-5 max-md:w-9/10 items-center px-25 justify-between">
            <a href=""><Image src={mainLogo} alt="logo" className="w-25 h-21 shrink-0 hover:cursor-pointer" /></a>
            <div className="px-10 py-7 gap-16 flex items-center max-[1450px]:gap-6 text-white max-[1150px]:hidden">
                <Link href="" className="hover:text-fuchsia-500 active:text-indigo-400 transition duration-200 hover:cursor-pointer font-bold truncate">Home</Link>
                <Link href="/LaunchToken" className="hover:text-fuchsia-500 active:text-indigo-400 transition duration-200 hover:cursor-pointer font-bold truncate">Launch MEME</Link>
                <Link className="hover:text-fuchsia-500 active:text-indigo-400 transition duration-200 hover:cursor-pointer font-bold truncate" href="/MarketMaker">Market Maker</Link>
                <a className="hover:text-fuchsia-500 active:text-indigo-400 transition duration-200 hover:cursor-pointer font-bold truncate">Contact Us</a>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex items-center  border-1 rounded-xl max-[1150px]:hidden gap-2 
                        relative border-transparent hover:cursor-pointer active:bg-black group">
                    {/* <LuWallet className="text-2xl group- absolute left-5 z-10" /> */}
                    <ConnectWalletButton />
                    {/* <p className="font-semibold group-active:text-fuchsia-600 truncate ">Connect Wallet</p> */}
                </div>
                {/* <p className="px-[30px] py-5 font-semibold flex items-center bg-gradient-to-r from-[#ff00ff] from-[0%] via-80% to-170% via-[#4c32e2] to-[#00FFFF]  border-1  rounded-xl border-transparent">LAUNCH TOKEN NOW</p> */}

            </div>

            <RxHamburgerMenu className="text-5xl text-[#8c52ff] hover:cursor-pointer min-[1150px]:hidden active:text-[#833ad6]" />

        </div>
    </div>

    <div className="w-full border-t-1 border-t-fuchsia-600 ">
        {/* header */}
        <Header />
        <Features />
        {/* <Video /> */}
        <UsePart />
        <PriceFee />
        <Footer />

    </div>
</main>
  );
}

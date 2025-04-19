import { IoCheckmark } from "react-icons/io5";
import { ConceptShow } from "./Interfaces";
import PinkCircle from "./PinkCircle";
import Image from "next/image";
import text_logo from "@/assets/text-logo.png"
import snap from "@/assets/snap.png"
import rocket from "@/assets/rocket.png"
import sitting from "@/assets/sitting.png"
import eth from "@/assets/eth.png"
import solana from "@/assets/cryptocurrency-color_sol.png"
import ton from "@/assets/token-branded_ton.png"
import base from "@/assets/token-branded_base.png"
import bsc from "@/assets/token-branded_bscpad.png"

export default function Header() {
    return (<div className="w-8/10 mx-auto px-25 pb-25 pt-10 border-x-1 border-x-fuchsia-600 max-xl:p-10 max-md:p-5 max-md:w-9/10 relative">
        <PinkCircle />
        <div className="w-2/3 mx-auto mb-10 max-lg:w-full max-xl:w-4/5"> <video autoPlay loop muted > <source src="./VID1.mp4" type="video/mp4" /></video></div>
        <div className="relative"> <Image src={text_logo} alt="logo" className="w-[636px] h-[235px] max-[500px]:h-[150px] mb-5 z-10 max-[1500px]:mx-auto" />
            <Image src={snap} alt="logo" className="w-[453px] h-[489px]  absolute top-[-40px] right-[calc(100%/10)] max-[1835px]:left-[678px] max-[1500px]:hidden" />
            <div className="p-[34px] border-1 border-fuchsia-600 rounded-xl absolute right-0 top-[260px] inline-block shadow-[_0px_0px_10px_#ff00ff] backdrop-blur-[3px] bg-[#383838]/25 max-[1900px]:hidden">
                <p className="text-2xl orbitron font-semibold mb-2 bg-gradient-to-r from-[-10%] text-transparent bg-clip-text from-[#ff00ff] via-64% via-[#7b38ff] to-[#00ffff] to-150% ">Manage Tokens</p>
                <p className="text-lg orbitron font-medium mb-6">Like never before</p>
                <div className="text-sm font-medium flex flex-col gap-3">
                    <div className="flex flex-row gap-2">
                        <IoCheckmark className=" text-xl text-[#FF00FF]" />
                        <p>AI-driven stealth trading</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <IoCheckmark className=" text-xl text-[#FF00FF]" />
                        <p>Automated wallet distribution</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <IoCheckmark className=" text-xl text-[#FF00FF]" />
                        <p>Market-making strategies</p>
                    </div>
                </div>
            </div>
        </div>
        <Image src={snap} alt="logo" className="size-[450px min-[1500px]:hidden mx-auto" />

        <div>
            <div className="flex items-center mx-auto max-[1500px]:justify-center">
                <a className="text-[40px] orbitron font-bold relative from-[0%] text-transparent bg-clip-text bg-gradient-to-r  from-[#ff00ff] via-40% via-[#7b38ff] to-[#00ffff] to-150%  max-lg:text-[35px] max-md:text-[30px]">Meme Your Way to the Moon
                </a>
                <Image src={rocket} alt="logo" className="size-32 " />
            </div>
        </div>
        <div className="flex justify-between max-sm:flex-col max-sm:items-center">
            <p className="w-51/100 max-sm:w-full text-md max-sm:mt-0 my-10">MemeBreaker is the most advanced multi-chain bundling and launch bot designed for meme coin creators, traders, and market makers looking to take full control of their token’s launch, volume, and price action.
            </p>
            <div className="p-[34px] border-1 border-fuchsia-600 rounded-xl inline-block shadow-[_0px_0px_10px_#ff00ff] backdrop-blur-[3px] ml-10 max-sm:ml-0 bg-[#383838]/25 min-[1900px]:hidden">
                <p className="text-2xl orbitron font-semibold mb-2 bg-gradient-to-r from-[-10%] text-transparent bg-clip-text from-[#ff00ff] via-64% via-[#7b38ff] to-[#00ffff] to-150% ">Manage Tokens</p>
                <p className="text-lg orbitron font-medium mb-6">Like never before</p>
                <div className="text-sm font-medium flex flex-col gap-3">
                    <div className="flex flex-row gap-2">
                        <IoCheckmark className=" text-xl text-[#FF00FF]" />
                        <p>AI-driven stealth trading</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <IoCheckmark className=" text-xl text-[#FF00FF]" />
                        <p>Automated wallet distribution</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <IoCheckmark className=" text-xl text-[#FF00FF]" />
                        <p>Market-making strategies</p>
                    </div>
                </div>
            </div>
        </div>
        {/* chains or*/}
        <div className="flex flex-wrap gap-4 mt-10 max-[1200px]">
            <div className="p-4 border-1 border-fuchsia-600 rounded-2xl flex gap-2 max-md:gap-[2px] items-center hover:shadow-[_0px_0px_5px_#ff00ff] group">
                <p className="group-hover:cursor-pointer truncate max-md:text-sm">Ethereum (ETH)</p>
                <Image src={eth} alt="logo" className="size-[18px] " />
            </div>
            <div className="p-4 border-1 border-fuchsia-600 rounded-2xl flex gap-2 max-md:gap-[2px] items-center hover:shadow-[_0px_0px_5px_#ff00ff] group">
                <p className="group-hover:cursor-pointer truncate max-md:text-sm">Binance Smart Chain (BSC)</p>
                <Image src={bsc} alt="logo" className="size-[18px] " />
            </div>
            <div className="p-4 border-1 border-fuchsia-600 rounded-2xl flex gap-2 max-md:gap-[2px] items-center hover:shadow-[_0px_0px_5px_#ff00ff] group">
                <p className="group-hover:cursor-pointer truncate max-md:text-sm">BASE</p>
                <Image src={base} alt="logo" className="size-[18px] " />
            </div>
            <div className="p-4 border-1 border-fuchsia-600 rounded-2xl flex gap-2 max-md:gap-[2px] items-center hover:shadow-[_0px_0px_5px_#ff00ff] group">
                <p className="group-hover:cursor-pointer truncate max-md:text-sm">Solana (SOL)</p>
                <Image src={solana} alt="logo" className="size-[18px] " />
            </div>
            <div className="p-4 border-1 border-fuchsia-600 rounded-2xl flex gap-2 max-md:gap-[2px] items-center hover:shadow-[_0px_0px_5px_#ff00ff] group">
                <p className="group-hover:cursor-pointer truncate max-md:text-sm">TON</p>
                <Image src={ton} alt="logo" className="size-[18px] " />
            </div>
        </div>
        {/* ----chains or*/}
        <button className="px-12 py-[22px] border-1 font-semibold border-fuchsia-600 rounded-xl mt-[42px] bg-gradient-to-r from-[0%] from-[#ff00ff] via-90% via-[#7b38ff] to-[#00ffff] to-200% hover:cursor-pointer active:text-fuchsia-600">Get Started</button>
        <div className="relative">
            <Image src={sitting} alt="logo" className="w-[536px] h-[558px] absolute right-0 max-md:right-[-40px] max-xl:size-[400px] max-md:size-[250px] bottom-0" />
            <p className="text-[40px] orbitron my-16 font-bold bg-gradient-to-r from-[-10%] text-transparent bg-clip-text from-[#ff00ff] via-40% via-[#7b38ff] to-[#00ffff] to-55%  max-lg:text-[35px] max-md:text-[30px]">What MemeBreaker Is For?</p>
            <ConceptShow title="Meme Coin Creator" contents="Launch your token with instant liquidity and auto-sniping" />
            <div className="w-2/5 h-[1px] my-10 max-xl:my-5 max-md:my-2 max-lg:mt-6 bg-gradient-to-r from-0% from-[#ff00ff] to-[#010101] via-44% via-[#8c52ff] to-100%" ></div>
            <ConceptShow title="Make Markets (volume bot)" contents="Generate volume, maintain price floors, and drive hype" />
            <div className="w-2/5 h-[1px] my-10 max-xl:my-5 max-md:my-2 bg-gradient-to-r from-0% from-[#ff00ff] to-[#010101] via-44% via-[#8c52ff] to-100%" ></div>
            <ConceptShow title="Traders" contents="Automate buys, sells, and stealth strategies for maximum profit" />
        </div>

    </div>
    )
}
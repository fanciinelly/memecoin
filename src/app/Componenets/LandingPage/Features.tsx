import PinkCircle from "@/app/Componenets/LandingPage/PinkCircle"
// import { FeatureCard } from "@/app/Componenets/LandingPage/Interfaces"
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { LuWallet } from "react-icons/lu";
import { LuChartLine } from "react-icons/lu";
import { FiLayout } from "react-icons/fi";
// import f1 from "./assets/f1.png"
// import f2 from "./assets/f2.png"
// import f3 from "./assets/f1.png"
// import f4 from "./assets/f4.png"


export default function Features() {
    return (
        <div className="w-full border-t-1  border-t-fuchsia-600">
            <div className="w-8/10 mx-auto p-25 max-xl:p-10 max-md:p-5 max-md:w-9/10 border-x-1 border-x-fuchsia-600 relative flex flex-col items-center">
                <PinkCircle />
                {/* main content */}
                <p className=" orbitron font-bold bg-gradient-to-r from-[-10%] text-transparent bg-clip-text from-[#ff00ff] via-70% via-[#7b38ff] to-[#00ffff] to-130% text-center text-[40px] max-lg:text-[35px] max-md:text-[30px]">Key Features of MemeBreaker</p>
                <div className="flex justify-between max-xl:flex-col gap-6 mb-6 mt-12">

                    <div className={`py-7 px-[35px] max-md:py-4 max-md:px-5 border-1 rounded-2xl bg-[#383838]/25 border-fuchsia-600   
      hover:shadow-[_0_0_10px_#ff00ff] hover:scale-101 transition duration-300 w-6/10  max-xl:w-full`}>
                        <div className=" p-[10px] border-1 border-fuchsia-600 rounded-[14px] inline-block">
                            <MdOutlineGeneratingTokens className="size-[38px] max-xl:size-[25px] shrink-0" />
                        </div>
                        <p className="orbitron text-2xl max-md:text-lg max-lg:text-2xl my-4 max-md:my-1 hover:[text-shadow:_0px_0px_10px_#ffffff]">1. Instant Token Bundling & Block Zero Launch</p>
                        <p className="max-lg:text-sm">Auto-create  meme tokens on PancakeSwap, Pump.fun, Uniswap & more Snipes a set % of supply across up to 100 wallets instantly Master wallet auto-distribution – No need to manually send funds
                        </p>
                    </div>
                    <div className={`py-7 px-[35px] max-md:py-4 max-md:px-5 border-1 rounded-2xl bg-[#383838]/25 border-fuchsia-600 hover:shadow-[_0_0_10px_#ff00ff] hover:scale-101 transition duration-300 w-4/10  max-xl:w-full`}>
                        <div className=" p-[10px] border-1 border-fuchsia-600 rounded-[14px] inline-block">
                            <LuBrain className="size-[38px] max-xl:size-[25px] shrink-0" />
                        </div>
                        <p className="orbitron text-2xl max-md:text-lg max-lg:text-2xl my-4 max-md:my-1 hover:[text-shadow:_0px_0px_10px_#ffffff]">2. AI-Driven Market Making & Volume Boosting</p>
                        <p className="max-lg:text-sm">Volume Bot: Automates buy/sell cycles to maintain volume & liquidity Slow Sell Feature: Controls sell pressure to avoid dumps Chart Manipulation AI: Generates bullish chart patterns to attract buyers
                        </p>
                    </div>
                    {/* <FeatureCard title="1. Instant Token Bundling & Block Zero Launch" content="Auto-create  meme tokens on PancakeSwap, Pump.fun, Uniswap & more Snipes a set % of supply across up to 100 wallets instantly Master wallet auto-distribution – No need to manually send funds" iconsrc="f1" addclass="w-6/10" /> */}
                    {/* <FeatureCard title="2. AI-Driven Market Making & Volume Boosting" content="Volume Bot: Automates buy/sell cycles to maintain volume & liquidity Slow Sell Feature: Controls sell pressure to avoid dumps Chart Manipulation AI: Generates bullish chart patterns to attract buyers" iconsrc="f2" addclass="w-4/10" /> */}
                </div>
                <div className="flex gap-6 max-xl:flex-col justify-between">

                    <div className={`py-7 px-[35px] max-md:py-4 max-md:px-5 border-1 rounded-2xl bg-[#383838]/25 border-fuchsia-600 hover:shadow-[_0_0_10px_#ff00ff] hover:scale-101 transition duration-300 w-4/10  max-xl:w-full`}>
                        <div className=" p-[10px] border-1 border-fuchsia-600 rounded-[14px] inline-block">
                            <LuWallet className="size-[38px] max-xl:size-[25px] shrink-0" />
                        </div>
                        <p className="orbitron text-2xl max-md:text-lg max-lg:text-2xl my-4 max-md:my-1 hover:[text-shadow:_0px_0px_10px_#ffffff]">3. Stealth Trading & Wallet Automation</p>
                        <p className="max-lg:text-sm">Avoids bot detection with randomized trade execution. Creates & rotates wallets dynamically to spoof transactions. Buys from one wallet, sells from another, then cycles back to master wallet</p>
                    </div>

                    <div className={`py-7 px-[35px] max-md:py-4 max-md:px-5 border-1 rounded-2xl bg-[#383838]/25 border-fuchsia-600 hover:shadow-[_0_0_10px_#ff00ff] hover:scale-101 transition duration-300 w-4/10  max-xl:w-full`}>
                        <div className=" p-[10px] border-1 border-fuchsia-600 rounded-[14px] inline-block">
                            <LuChartLine className="size-[38px] max-xl:size-[25px] shrink-0" />
                        </div>
                        <p className="orbitron text-2xl max-md:text-lg max-lg:text-2xl my-4 max-md:my-1 hover:[text-shadow:_0px_0px_10px_#ffffff]">4. Multi-Chain Support for Maximum Reach</p>
                        <p className="max-lg:text-sm">Supports Ethereum, BSC, SOL, BASE, and TON. Cross-chain liquidity and market manipulation capabilities</p>
                    </div>

                    <div className={`py-7 px-[35px] max-md:py-4 max-md:px-5 border-1 rounded-2xl bg-[#383838]/25 border-fuchsia-600 hover:shadow-[_0_0_10px_#ff00ff] hover:scale-101 transition duration-300 w-4/10  max-xl:w-full`}>
                        <div className=" p-[10px] border-1 border-fuchsia-600 rounded-[14px] inline-block">
                            <FiLayout className="size-[38px] max-xl:size-[25px] shrink-0 " />
                        </div>
                        <p className="orbitron text-2xl max-md:text-lg max-lg:text-2xl my-4 max-md:my-1 hover:[text-shadow:_0px_0px_10px_#ffffff]">5. Easy Web-Based UI with Live Tracking</p>
                        <p className="max-lg:text-sm">User-friendly dashboard to control all bot features. Live monitoring of transactions, wallets, and market trends. Adjustable trading parameters for full customization</p>
                    </div>

                    {/* <FeatureCard title="3. Stealth Trading & Wallet Automation" content="Avoids bot detection with randomized trade execution. Creates & rotates wallets dynamically to spoof transactions. Buys from one wallet, sells from another, then cycles back to master wallet" addclass="w-4/10" iconsrc="f3" /> */}
                    {/* <FeatureCard title="4. Multi-Chain Support for Maximum Reach" content="Supports Ethereum, BSC, SOL, BASE, and TON. Cross-chain liquidity and market manipulation capabilities" addclass="w-4/10" iconsrc="f4" /> */}
                    {/* <FeatureCard title="5. Easy Web-Based UI with Live Tracking" content="User-friendly dashboard to control all bot features. Live monitoring of transactions, wallets, and market trends. Adjustable trading parameters for full customization" iconsrc="f5" addclass="w-4/10" /> */}
                </div>
                <button className="font-lg font-semibold p-6  mt-13  bg-gradient-to-r from-[#ff00ff] from-[0%] via-80% to-170% via-[#4c32e2] to-[#00FFFF]  border-1  rounded-xl  border-fuchsia-600 hover:cursor-pointer active:text-fuchsia-600">LAUNCH TOKEN NOW</button>
            </div>
        </div>
    )
}
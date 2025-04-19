import PinkCircle from "./PinkCircle";
import { PriceFeeShow } from "./Interfaces";
import Image from "next/image";
import hide from "@/assets/hide.png"
import shoot from "@/assets/shoot.png"

export default function PriceFee() {
    return (
        <div className="w-full border-t-1  border-t-fuchsia-600">
            <div className="w-8/10 mx-auto p-25 max-xl:p-10 max-md:p-5 max-md:w-9/10 border-x-1 border-x-fuchsia-600 relative">
                <PinkCircle />
                {/* main content  */}
                <div className="relative">
                    <Image src={hide} alt="logo" className="bottom-[0px] right-[-145px] w-[595px] h-[648px] absolute z-20 max-xl:w-[450px] max-xl:h-[480px] max-md:top-[0px] max-md:hidden" />
                    <p className="text-[40px] orbitron font-bold bg-gradient-to-r from-[-10%] text-transparent bg-clip-text from-[#ff00ff] via-64% via-[#7b38ff] to-[#00ffff] to-150% max-lg:text-[35px] max-md:text-[30px] text-center mb-7">MemeBreaker Pricing & Fees</p>
                    <p className="orbitron font-semibold text-[20px] max-lg:mb-3 mb-7">We offer flexible pricing to match your needs:</p>
                    <p className="text-[12px] mb-5">Fees are automatically deducted from your master wallet for smooth operation.</p>
                    <div className="grid-cols-2 grid w-3/4 gap-7 max-xl:grid-cols-1 max-md:grid-cols-2 relative max-md:w-full max-sm:grid-cols-1 max-sm:gap-3">
                        <PriceFeeShow title="01. Flat Activation Fee" content="One-time bot activation fee (0.1 - 0.5 ETH)" />
                        <PriceFeeShow title="02. Percentage-Based Fees" content="0.5% fee on each transaction executed by the bot"/>
                       <PriceFeeShow title="03. Subscription Model" content="Monthly access fee (0.2 ETH/month) for continued updates & features"/>
                       <PriceFeeShow title="04. Hybrid Model (Recommended)" content="One-time activation + Small transaction fee for sustained bot use" />
                    </div>
                </div>
                <Image src={shoot} alt="logo" className="size-[400px] mx-auto md:hidden"/>
                <div className="flex flex-col items-center mt-[170px] max-lg:mt-20 mx-auto relative group">
                    <Image src={shoot} alt="logo" className="w-[620px] h-[610px] absolute bottom-[0px]  group left-[-200px] max-2xl:h-[500px] max-2xl:w-[505px]
                    max-md:hidden max-xl:left-[-] max-lg:size-[400px]" />
                    <p className="orbitron font-bold text-[40px] mb-11v bg-gradient-to-r from-[-10%] text-transparent text-center bg-clip-text from-[#ff00ff] via-64% via-[#7b38ff] to-[#00ffff] to-150%   max-lg:text-[35px] max-md:text-[30px]">Why MemeBreaker?</p>
                    <div className="flex flex-col w-full items-center">
                        <p className="orbitron font-medium text-[24px] mt-8 mb-[14px] text-center [text-shadow:_0px_0px_5px_#ffffff]  transition duration-500 max-md:text-[20px] max-md:text-lg max-lg:text-2xl"> AI-Powered Automation</p>
                        <p className="text-center max-md:text-sm">Smarter trading, better execution</p>
                        <div className="h-[2px] my-8 w-1/2 bg-gradient-to-r from-[#010101] from-0% via-50% to-100% via-[#621ff0] to-[#010101]" ></div>
                    </div>
                    <div className="flex flex-col w-full items-center">
                        <p className="orbitron font-medium text-[24px] mb-[14px] text-center [text-shadow:_0px_0px_5px_#ffffff]  transition duration-500 max-md:text-lg max-lg:text-2xl"> Stealth Mode Enabled</p>
                        <p className="text-center max-md:text-sm">Avoid bot detection & track-free transactions</p>
                        <div className="h-[2px] my-8 w-1/2 bg-gradient-to-r from-[#010101] from-0% via-50% to-100% via-[#621ff0] to-[#010101]" ></div>
                    </div>
                    <div className="flex flex-col w-full items-center">
                        <p className="orbitron font-medium text-[24px] mb-[14px] max-md:text-lg max-lg:text-2xl text-center [text-shadow:_0px_0px_5px_#ffffff]  transition duration-500">Multi-Chain Flexibility</p>
                        <p className="text-center max-md:text-sm">Deploy on ETH, BSC, SOL, BASE & TON</p>
                        <div className="h-[2px] my-8 w-1/2 bg-gradient-to-r from-[#010101] from-0% via-50% to-100% via-[#621ff0] to-[#010101]" ></div>
                    </div>
                    <div className="flex flex-col w-full items-center">
                        <p className="orbitron font-medium text-[24px] mb-[14px] text-center [text-shadow:_0px_0px_5px_#ffffff]  transition duration-500 max-md:text-lg max-lg:text-2xl">Proven Market-Making Strategies</p>
                        <p className="text-center max-md:text-sm">Dominate meme coin trading</p>
                    </div>
                </div>
                <div className="border-[3px] bg-gradient-to-r from-0% to-100% via-50% from-[#8C52FF] to-[#8C52FF] via-[#010101] flex flex-col items-center py-5 mt-30 max-xl:mt-20 max-md:mt-10 px-10 max-lg:px-5 max-md:px-5 max-md:rounded-xl max-md:py-3 border-[#ff00ff] rounded-3xl gap-4 relative">

                    <p className="text-[32px] max-md:text-lg max-lg:text-2xl orbitron text-center
                      [text-shadow:_0px_0px_5px_#ffffff]">Ready to Launch Your Meme Coin Like a Pro?</p>
                    <a className=" text-center underline text-[24px] max-md:text-sm max-lg:text-lg active:text-[#8C52FF]  hover:cursor-pointer" href="">Join the future of automated token trading now!</a>
                </div>
            </div>

        </div>
    )
}
import PinkCircle from "./PinkCircle";

export default function UsePart() {
    return (
        <div className="w-full border-t-1 border-t-fuchsia-600 ">
            <div className="w-8/10 mx-auto px-25 pt-[50px] pb-[74px] max-xl:p-10 max-md:p-5 max-md:w-9/10 border-x-1 border-x-fuchsia-600 relative  bg-center bg-no-repeat flex flex-col items-center bg-[length:1113px_1113px] bg-[url('/backcat.png')]">
                <div className="w-[2px] bg-gradient-to-b from-[#ff00ff] from-[0%] via-80% to-170% via-[#4c32e2] to-[#00FFFF] flex flex-col items-center justify-between absolute right-1/2 top-70 h-[calc(100%-450px)] max-md:h-[calc(100%-300px)] max-md:top-50 max-lg:left-1/10 max-lg:h-[calc(100%-380px)] max-lg:top-[240px]
                                 max-[557px]:h-[calc(100%-500px)]">
                    <div className="size-[27px] rounded-full border-3 border-[#FF00FF] bg-[#010101]"></div>
                    <div className="size-[27px] rounded-full border-3 border-[#8C52FF] bg-[#010101]"></div>
                    <div className="size-[27px] rounded-full border-3 border-[#FF00FF] bg-[#010101]"></div>
                    <div className="size-[27px] rounded-full border-3 border-[#8C52FF] bg-[#010101]"></div>
                </div>
                <PinkCircle />
                <p className="text-[40px] orbitron font-bold bg-gradient-to-r from-[-10%] text-transparent bg-clip-text from-[#ff00ff] via-64% via-[#7b38ff] to-[#00ffff] to-150% max-lg:text-[35px] max-md:text-[30px] text-center">How to Use MemeBreaker?</p>
                <div className="flex flex-col w-3/4 mt-15 gap-8">
                    <div className="w-full flex justify-start max-lg:justify-center">
                        <div className="px-[70px] py-[45px] max-2xl:px-[40px] max-2xl:py-[25px] border-2 w-45/100 max-lg:w-7/10 max-md:w-9/10 inline-block rounded-[8px] border-dashed backdrop-blur-xl border-fuchsia-600 ">
                            <p className="font-semibold text-[24px] orbitron">Set Up & Fund
                            </p>
                            <p className="font-medium mt-[14px]">Connect your wallet & select your chain. Choose between token launch mode or volume boost mode</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-end max-lg:justify-center">
                        <div className="px-[70px] py-[45px] max-2xl:px-[40px] max-2xl:py-[25px] border-2 w-45/100 max-lg:w-7/10 max-md:w-9/10 inline-block rounded-[8px] border-dashed backdrop-blur-xl border-fuchsia-600">
                            <p className="font-semibold text-[24px] orbitron">Configure Your Strategy
                            </p>
                            <p className="font-medium mt-[14px]">Set buy/sell cycles, stealth features, and wallet automation. Define liquidity management rules</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-start max-lg:justify-center">
                        <div className="px-[70px] py-[45px] max-2xl:px-[40px] max-2xl:py-[25px] border-2 w-45/100 max-lg:w-7/10 max-md:w-9/10 inline-block rounded-[8px] border-dashed backdrop-blur-xl border-fuchsia-600">
                            <p className="font-semibold text-[24px] orbitron">Launch & Execute
                            </p>
                            <p className="font-medium mt-[14px]">Deploy your meme token & auto-buy supply instantly
                                . The bot handles volume generation & market-making automatically
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex justify-end max-lg:justify-center">
                        <div className="px-[70px] py-[45px] max-2xl:px-[40px] max-2xl:py-[25px] border-2 w-45/100 max-lg:w-7/10 max-md:w-9/10 inline-block rounded-[8px] border-dashed backdrop-blur-xl border-fuchsia-600">
                            <p className="font-semibold text-[24px] orbitron">Monitor & Adjust
                            </p>
                            <p className="font-medium mt-[14px]">Track real-time data & adjust trading patterns. Fine-tune settings to optimize profits & control price action
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* main content */}
        </div>
    )
}
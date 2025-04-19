import PinkCircle from "./PinkCircle";
import { FaXTwitter } from "react-icons/fa6";
import { LiaTelegram } from "react-icons/lia";
import { AiOutlineDiscord } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandTiktok } from "react-icons/tb";

export default function Footer() {
    return (
        <div className="w-full border-t-1  border-t-fuchsia-600">
            <div className="w-8/10 p-15 max-xl:p-10 max-md:p-5 max-md:w-9/10 mx-auto pb-[74px]  border-x-1 border-x-fuchsia-600 relative">
                <PinkCircle />
                <div className="flex flex-col items-center">
                    <p className="orbitron text-[53px] mb-[18px] font-bold max-lg:text-[35px] max-md:text-[25px] max-xl:text-[40px]">Contact Us</p>
                    <div className="flex flex-wrap justify-center">
                        <p className="bg-gradient-to-r from-[20%] text-transparent bg-clip-text max-md:text-sm from-[#ff00ff] via-64% via-[#7b38ff] to-[#00ffff] to-90% truncate">Sign Up & Get Access &nbsp;</p>
                        <a className="hover:cursor-pointer underline max-md:text-sm" href=""> (https://web.telegram.org/k/#)</a>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <p className="bg-gradient-to-r from-[20%] text-transparent max-md:text-sm bg-clip-text from-[#ff00ff] via-64% via-[#7b38ff] to-[#00ffff] to-90%">Contact Us &nbsp;</p>
                        <a className="hover:cursor-pointer max-md:text-sm underline" href=""> (https://web.telegram.org/k/#)</a>
                    </div>
                    <div className="flex flex-col gap-[26px]">
                    </div>
                    <div className="flex gap-7 mt-5 max-md:gap-3">
                        <a className="p-2 rounded-full [box-shadow:inset_0_0_10px_#8C22F6] hover:bg-gradient-to-r from-[20%] from-[#ff00ff] via-64% via-[#7b38ff] to-[#00ffff] to-90% group hover:scale-110 hover:cursor-pointer active:bg-none">
                            <FaXTwitter className="text-[#8C52FF] text-2xl group-hover:text-white group-active:text-fuchsia-500" />
                        </a>
                        {/* shadow-[0_35px_35px_[#8C22F6]/63] */}
                        <a className="p-2 rounded-full [box-shadow:inset_0_0_10px_#8C22F6] hover:bg-gradient-to-r from-[20%] from-[#ff00ff] via-64% via-[#7b38ff] to-[#00ffff] to-90% group hover:scale-110 hover:cursor-pointer active:bg-none">
                            <LiaTelegram className="text-[#8C52FF] text-2xl group-hover:text-white group-active:text-fuchsia-500" />
                        </a>
                        <a className="p-2 rounded-full [box-shadow:inset_0_0_10px_#8C22F6] hover:bg-gradient-to-r from-[20%] from-[#ff00ff] via-64% via-[#7b38ff] to-[#00ffff] to-90% group hover:scale-110 hover:cursor-pointer active:bg-none">
                            <AiOutlineDiscord className="text-[#8C52FF] text-2xl group-hover:text-white group-active:text-fuchsia-500" /></a>
                        <a className="p-2 rounded-full [box-shadow:inset_0_0_10px_#8C22F6] hover:bg-gradient-to-r from-[20%] from-[#ff00ff] via-64% via-[#7b38ff] to-[#00ffff] to-90% group hover:scale-110 hover:cursor-pointer active:bg-none">
                            <FaInstagram className="text-[#8C52FF] text-2xl group-hover:text-white group-active:text-fuchsia-500" /></a>
                        <a className="p-2 rounded-full [box-shadow:inset_0_0_10px_#8C22F6] hover:bg-gradient-to-r from-[20%] from-[#ff00ff] via-64% via-[#7b38ff] to-[#00ffff] to-90% group hover:scale-110 hover:cursor-pointer active:bg-none">
                            <TbBrandTiktok className="text-[#8C52FF] text-2xl group-hover:text-white group-active:text-fuchsia-500" /></a>
                    </div>
                    <div className="flex flex-wrap gap-4 left-25 mt-5 hover:cursor-pointer">
                    <a className="underline active:text-fuchsia-500 truncate max-md:text-sm">Privacy Policy</a>
                    <a className="underline active:text-fuchsia-500 truncate max-md:text-sm">Cookie Policy</a></div>
                </div>
                
            </div>
        </div>
    )
}
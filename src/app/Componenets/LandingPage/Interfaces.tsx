import Image from "next/image";

interface ChainProps {
    chain: string
    chainimg: string
  }
  
  interface ConceptProps {
    title: string,
    contents: string
  }
  
  interface FeatureCardProps {
    title: string,
    content: string,
    iconsrc: string,
    addclass: string
  }
  
  interface PriceFeeProps {
    title: string,
    content: string
  }
  
  export const ChainButton: React.FC<ChainProps> = ({
    chain,
    chainimg
  }) => {
    return (
      <div className="p-4 border-1 border-fuchsia-600 rounded-2xl flex gap-2 max-md:gap-[2px] items-center hover:shadow-[_0px_0px_5px_#ff00ff] group">
        <p className="group-hover:cursor-pointer truncate max-md:text-sm">{chain}</p>
        <Image src={`${chainimg}`} alt="logo" className="size-[18px] " />
      </div>
    )
  }
  
  export const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    addclass,
    content,
    iconsrc
  }) => {
    return (
      <div className={`py-7 px-[35px] max-md:py-4 max-md:px-5 border-1 rounded-2xl bg-[#383838]/25 border-fuchsia-600   
      hover:shadow-[_0_0_10px_#ff00ff] hover:scale-101 transition duration-300 ${addclass}  max-xl:w-full`}>
        <div className=" p-[10px] border-1 border-fuchsia-600 rounded-[14px] inline-block">
            <Image src={`${iconsrc}`} alt="logo" className="size-[38px] max-xl:size-[25px] shrink-0" />
          </div>          
          <p className="orbitron text-2xl max-md:text-lg max-lg:text-2xl my-4 max-md:my-1 hover:[text-shadow:_0px_0px_10px_#ffffff]">{title}</p>     
        <p className="max-lg:text-sm">{content}
        </p>
      </div>
    )
  }
  
  export const ConceptShow: React.FC<ConceptProps> = ({
    title,
    contents
  }) => {
    return (
      <div className="flex flex-col  gap-4 ">
        <p className="text-2xl orbitron font-semibold w-full max-lg:text-xl">{title}</p>
        <p className="max-lg:text-sm w-68">{contents}</p>
      </div>
    )
  }
  
  export const PriceFeeShow: React.FC<PriceFeeProps> = ({
    title,
    content
  }) => {
  
    return (
      <div className="py-8 pl-8 pr-24 border-1 max-md:p-8 border-fuchsia-600 rounded-2xl">
        <p className="text-[24px] orbitron font-medium mb-4 bg-gradient-to-r from-[-10%] text-transparent bg-clip-text from-[#ff00ff] via-40% via-[#7b38ff] to-[#00ffff] to-200% max-md:text-lg max-lg:text-2xl">{title}</p>
        <p className=" text-[20ox] max-lg:text-sm">{content}</p></div>
    )
  
  }
  
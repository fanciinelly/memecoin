import { createAppKit } from '@reown/appkit/react'
import { useAppKit, useAppKitAccount } from '@reown/appkit/react'
import { LuWallet } from "react-icons/lu";
import { WagmiProvider } from 'wagmi'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { projectId, metadata, networks, wagmiAdapter, solanaWeb3JsAdapter } from '@/app/Componenets/config'


const queryClient = new QueryClient();

const generalConfig = {
  projectId,
  metadata,
  networks,
  themeMode: 'light' as const,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  },
  themeVariables: {
    '--w3m-accent': '#000000',
  }
}

// Create modal
createAppKit({
  adapters: [wagmiAdapter, solanaWeb3JsAdapter],
  ...generalConfig,
  themeMode: 'light',
  themeVariables: {
  }
})




export default function ConnectWalletButton() {

  const { open } = useAppKit();
  const {isConnected} =useAppKitAccount();

  return (
    <div>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <button className="px-4 py-4 bg-gradient-to-r from-blue-500 to-fuchsia-600 
                          text-white font-semibold rounded-xl shadow-lg 
                          transition-all duration-300  gap-3 flex flex-row" onClick={()=>open()}>
            {/* <appkit-button balance='show' size='md' label='Connect wallet' /> */}
            {/* <div className="flex items-center  border-1 rounded-xl max-[1150px]:hidden gap-2 
                                relative border-transparent hover:cursor-pointer  group"> */}
              <LuWallet className="text-2xl group-active:text-fuchsia-600" />
              <p className="font-semibold group-active:text-fuchsia-600 truncate ">{isConnected ? "Disconnect":"Connect Wallet"}</p>
            </button>
          {/* </div> */}
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  )
}


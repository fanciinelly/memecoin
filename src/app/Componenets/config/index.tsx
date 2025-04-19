import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum, solana, solanaDevnet, solanaTestnet, bsc, base, } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'
import { BaseWalletAdapter, SolanaAdapter } from '@reown/appkit-adapter-solana/react'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'


// Get projectId from https://cloud.reown.com
export const projectId = "4cdc27eeb514f028e349903448be7335" // this is a public projectId only to use on localhost

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const metadata = {
    name: 'AppKit',
    description: 'AppKit Example',
    url: 'https://reown.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/179229932']
  }

// for custom networks visit -> https://docs.reown.com/appkit/react/core/custom-networks
export const networks = [mainnet, bsc, base, arbitrum, solana, solanaDevnet, solanaTestnet] as [AppKitNetwork, ...AppKitNetwork[]]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks
})

// Set up Solana Adapter
export const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter() as unknown as BaseWalletAdapter, new SolflareWalletAdapter() as unknown as BaseWalletAdapter]
})

export const config = wagmiAdapter.wagmiConfig
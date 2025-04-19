"use client"
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MarketMaker.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/assets/8.png"
// import logo from '../../public/8.png';

// Define interfaces
interface Status {
  status: string;
  statistics: {
    buys: number;
    sells: number;
    errors: number;
    runTimeFormatted: string;
  };
  activeWallets: Wallet[];
  mainWallet?: {
    address: string;
    balance: number;
  };
  config?: Config;
}

interface Wallet {
  address: string;
  privateKey: string;
  solBalance: number | string;
  lastBuyTx?: string;
  lastSellTx?: string;
}

interface Config {
  TOKEN_MINT?: string;
  DISTRIBUTE_WALLET_NUM?: number;
  BUY_LOWER_AMOUNT?: number;
  BUY_UPPER_AMOUNT?: number;
  MIN_DISTRIBUTE_AMOUNT?: number;
  MAX_DISTRIBUTE_AMOUNT?: number;
  ADDITIONAL_FEE?: number;
  BUY_INTERVAL_MIN?: number;
  BUY_INTERVAL_MAX?: number;
}

interface Chain {
  value: string;
  label: string;
}

const API_URL = 'https://volumebot-q79o.onrender.com/api';

function MarketMaker(): React.JSX.Element {
  const [status, setStatus] = useState<Status>({
    status: "stopped",
    statistics: { buys: 0, sells: 0, errors: 0, runTimeFormatted: '0h 0m 0s' },
    activeWallets: []
  });
  const [mintAddress, setMintAddress] = useState<string>('');
  // const [totalAmount, setTotalAmount] = useState<number>(0.1);
  const [numberOfWallets, setNumberOfWallets] = useState<number>(8);
  const [minBuyAmount, setMinBuyAmount] = useState<number>(0.001);
  const [maxBuyAmount, setMaxBuyAmount] = useState<number>(0.002);
  const [minDistributeAmount, setMinDistributeAmount] = useState<number>(0.001);
  const [maxDistributeAmount, setMaxDistributeAmount] = useState<number>(0.002);
  const [maxGasFee, setMaxGasFee] = useState<number>(0.0001);
  const [minInterval, setMinInterval] = useState<number>(10);
  const [maxInterval, setMaxInterval] = useState<number>(100);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [selectedChain, setSelectedChain] = useState<string>('solana');

  const chains: Chain[] = [
    { value: 'ethereum', label: 'Ethereum' },
    { value: 'bsc', label: 'BSC' },
    { value: 'base', label: 'Base' },
    { value: 'solana', label: 'Solana' },
    { value: 'ton', label: 'TON' }
  ];

  const fetchStatus = async (): Promise<Status | null> => {
  try {
    const response = await fetch(`${API_URL}/status`);
    const data: Status = await response.json();
    setStatus(data);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      setMessage(`Error fetching status: ${error.message}`);
    } else {
      setMessage("An unknown error occurred while fetching status.");
    }
    return null;
  }
};


  const resetToDefaultParams = (): void => {
    setMintAddress('');
    setNumberOfWallets(8);
    setMinBuyAmount(0.001);
    setMaxBuyAmount(0.002);
    setMinDistributeAmount(0.001);
    setMaxDistributeAmount(0.002);
    setMaxGasFee(0.0001);
    setMinInterval(10);
    setMaxInterval(100);
  };

  useEffect(() => {
    const initializeApp = async (): Promise<void> => {
      const data = await fetchStatus();
      if (data && selectedChain === 'solana') {
        setMintAddress(data.config?.TOKEN_MINT || '');
        setNumberOfWallets(data.config?.DISTRIBUTE_WALLET_NUM || 8);
        setMinBuyAmount(data.config?.BUY_LOWER_AMOUNT || 0.001);
        setMaxBuyAmount(data.config?.BUY_UPPER_AMOUNT || 0.002);
        setMinDistributeAmount(data.config?.MIN_DISTRIBUTE_AMOUNT || 0.001);
        setMaxDistributeAmount(data.config?.MAX_DISTRIBUTE_AMOUNT || 0.002);
        setMaxGasFee(data.config?.ADDITIONAL_FEE || 0.0001);
        setMinInterval((data.config?.BUY_INTERVAL_MIN || 0) / 1000 || 10);
        setMaxInterval((data.config?.BUY_INTERVAL_MAX || 0) / 1000 || 100);
      }
    };

    initializeApp();
    const interval = setInterval(fetchStatus, 5000);
    return () => clearInterval(interval);
  }, [selectedChain]);

  const handleChainChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const newChain = e.target.value;
    setSelectedChain(newChain);
    if (newChain !== 'solana') {
      resetToDefaultParams();
    }
  };

  const validate = (): boolean => {
    if (!mintAddress || !numberOfWallets || !minBuyAmount || !maxBuyAmount || !maxGasFee || !minInterval || !maxInterval) {
      toast.error('Please fill all the fields');
      return false;
    }
    return true;
  };

  const handleStart = async (): Promise<void> => {
    if (!validate()) return;
    setLoading(true);
  
    try {
      const config: Config = {
        TOKEN_MINT: mintAddress,
        DISTRIBUTE_WALLET_NUM: numberOfWallets,
        BUY_LOWER_AMOUNT: minBuyAmount,
        BUY_UPPER_AMOUNT: maxBuyAmount,
        ADDITIONAL_FEE: maxGasFee,
        MIN_DISTRIBUTE_AMOUNT: minDistributeAmount,
        MAX_DISTRIBUTE_AMOUNT: maxDistributeAmount,
        BUY_INTERVAL_MIN: minInterval * 1000,
        BUY_INTERVAL_MAX: maxInterval * 1000
      };
  
      const response = await fetch(`${API_URL}/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ config })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = (await response.json()) as { message: string };
      setMessage(result.message);
      fetchStatus();
      console.log( "message",message);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(`Error starting bot: ${error.message}`);
        toast.error(`Error starting bot: ${error.message}`);
      } else {
        setMessage("An unknown error occurred while starting the bot.");
        toast.error("An unknown error occurred while starting the bot.");
      }
    } finally {
      setLoading(false);
    }
  };
  

  const handleStop = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/stop`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = (await response.json()) as { message: string };
      setMessage(result.message);
      fetchStatus();
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(`Error stopping bot: ${error.message}`);
      } else {
        setMessage("An unknown error occurred while stopping the bot.");
      }
    } finally {
      setLoading(false);
    }
  };
  

  const handlePause = async (): Promise<void> => {
    if (!status) return;
    const endpoint = status.status === "running" ? "pause" : "resume";
  
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      const result = await response.json() as { status?: string };
      if (result.status) {
        setStatus((prev) => ({
          ...prev,
          status: result.status ?? prev.status, // Ensures status is never undefined
        }));
      }
    }
  };
  

  const handleCopy = (text: string): void => {
    navigator.clipboard.writeText(text)
      .then(() => toast.success('Copied to clipboard!'))
      .catch(err => {
        toast.error('Failed to copy');
        console.error('Failed to copy:', err);
      });
  };

  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <header className="Main-header">
        <nav className="navbar">
          <div className="logo-container">
            <Image src={logo} alt="Logo" className="w-14 h-14" />
          </div>
          <div className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/LaunchToken" className="nav-link">Launch Token</Link>
            <Link href="" className="nav-link active">Market Maker</Link>
            <Link href="" className="nav-link">Contact Us</Link>
          </div>
          <button className="logout-btn">Log Out</button>
          <button className="hamburger-btn" onClick={toggleSidebar}>
            ☰
          </button>
        </nav>
      </header>
      <main className={`App-main ${isSidebarOpen ? 'blurred' : ''}`}>
        <ToastContainer 
          position="top-right" 
          autoClose={5000} 
          hideProgressBar={false} 
          newestOnTop={false} 
          closeOnClick 
          rtl={false} 
          pauseOnFocusLoss 
          draggable 
          pauseOnHover 
        />
        <div className="App-content">
          <div className='dex_screen'>
            <iframe
              className="dexscreener-iframe"
              src={`https://dexscreener.com/${selectedChain}/${mintAddress}?embed=1`}
              width="100%"
              height="100%"
              style={{ border: "none" }}
              allowFullScreen
            />
          </div>
          <div className='setting'>
            <h1 className='text-3xl font-bold mb-5 text-[#8c52ff]'>MemeBreaker Market Maker</h1>
            <div className="chain-select">
              <select value={selectedChain} onChange={handleChainChange}>
                {chains.map((chain: Chain) => (
                  <option key={chain.value} value={chain.value}>{chain.label}</option>
                ))}
              </select>
            </div>
            <div className='setting_panel'>
              {[
                { label: "Mint Address", value: mintAddress, setter: setMintAddress, type: "text" as const },
                { label: "Number of Wallets", value: numberOfWallets, setter: setNumberOfWallets, type: "number" as const },
                { label: "Minimum DISTRIBUTE Amount", value: minDistributeAmount, setter: setMinDistributeAmount, type: "number" as const },
                { label: "Maximum DISTRIBUTE Amount", value: maxDistributeAmount, setter: setMaxDistributeAmount, type: "number" as const },
                { label: "Minimum BUY Amount", value: minBuyAmount, setter: setMinBuyAmount, type: "number" as const },
                { label: "Maximum BUY Amount", value: maxBuyAmount, setter: setMaxBuyAmount, type: "number" as const },
                { label: "Maximum Gas Fee", value: maxGasFee, setter: setMaxGasFee, type: "number" as const },
                { label: "Minimum Interval(sec)", value: minInterval, setter: setMinInterval, type: "number" as const },
                { label: "Maximum Interval(sec)", value: maxInterval, setter: setMaxInterval, type: "number" as const }
              ].map(({ label, value, setter, type }) => (
                <div className="item" key={label}>
                  <span>{label}</span>
                  <input 
                    type={type}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (type === "number") {
                        const numValue = Number(e.target.value);
                        (setter as React.Dispatch<React.SetStateAction<number>>)(numValue);
                      } else {
                        (setter as React.Dispatch<React.SetStateAction<string>>)(e.target.value);
                      }
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="control-panel">
              <button 
                onClick={handleStart} 
                disabled={loading || status.status !== 'stopped'} 
                className={status.status === 'stopped' ? 'start' : 'disabled'}
              >
                Start Bot
              </button>
              <button 
                onClick={handleStop} 
                disabled={loading || status.status === 'stopped'} 
                className={status.status === 'stopped' ? 'disabled' : 'stop'}
              >
                Stop Bot
              </button>
              <button 
                onClick={handlePause} 
                disabled={loading || status.status === "stopped"} 
                className={status.status === "stopped" ? 'disabled' : 'status'}
              >
                {status.status === "paused" ? 'Resume' : 'Pause'}
              </button>
            </div>

            <div className="status-panel">
              <h2>Bot Status: <span className={status.status === 'running' ? 'running' : 'stopped'}>{status.status.toUpperCase()}</span></h2>
              <div className="stats-container">
                <div className="stats">
                  {[
                    { title: "Buys", value: status.statistics.buys },
                    { title: "Sells", value: status.statistics.sells },
                    { title: "Run Time", value: status.statistics.runTimeFormatted }
                  ].map(stat => (
                    <div className="stat-item" key={stat.title}>
                      <h3>{stat.title}</h3>
                      <div className="stat-value">{stat.value}</div>
                    </div>
                  ))}
                </div>
                {status.mainWallet && (
                  <div className="main-wallet-info">
                    <h3>Main Wallet</h3>
                    <div className="wallet-detail">
                      <span className="label">Address:</span>
                      <a 
                        href={`https://solscan.io/account/${status.mainWallet.address}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="address-link"
                      >
                        {status.mainWallet.address.slice(0, 6)}...{status.mainWallet.address.slice(-4)}
                      </a>
                    </div>
                    <div className="wallet-detail">
                      <span className="label">Balance:</span>
                      <span className="value">{status.mainWallet.balance.toFixed(5)} SOL</span>
                    </div>
                  </div>
                )}
              </div>
              <h3>Active Wallets: {status.activeWallets.length}</h3>
              <div className="wallet-list-container">
                <table className="wallet-table">
                  <thead>
                    <tr>
                      <th>Wallet Address</th>
                      <th>Private Key</th>
                      <th>SOL Balance</th>
                      <th>Last Buy</th>
                      <th>Last Sell</th>
                    </tr>
                  </thead>
                  <tbody>
                    {status.activeWallets.map((wallet: Wallet) => (
                      <tr key={wallet.address} className="wallet-item">
                        <td>
                          <a 
                            href={`https://solscan.io/account/${wallet.address}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="address-link"
                          >
                            {wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}
                          </a>
                        </td>
                        <td>
                          <span 
                            onClick={() => handleCopy(wallet.privateKey)} 
                            style={{ cursor: 'pointer' }} 
                            title="Click to copy"
                          >
                            {wallet.privateKey.slice(0, 6)}...{wallet.privateKey.slice(-4)}
                          </span>
                        </td>
                        <td className="balance">
                          {typeof wallet.solBalance === 'number' 
                            ? wallet.solBalance.toFixed(5) 
                            : wallet.solBalance} SOL
                        </td>
                        <td>
                          {wallet.lastBuyTx 
                            ? <a href={wallet.lastBuyTx} target="_blank" rel="noopener noreferrer" className="tx-link">View</a> 
                            : "N/A"}
                        </td>
                        <td>
                          {wallet.lastSellTx 
                            ? <a href={wallet.lastSellTx} target="_blank" rel="noopener noreferrer" className="tx-link">View</a> 
                            : "N/A"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      {isSidebarOpen && (
        <div className="sidebar">
          <button className="close-btn" onClick={toggleSidebar}>×</button>
          <div className="sidebar-links">
            <Link href="/" className="nav-link" onClick={toggleSidebar}>Home</Link>
            <Link href="/LaunchToken" className="nav-link" onClick={toggleSidebar}>Launch Token</Link>
            <Link href="" className="nav-link active" onClick={toggleSidebar}>Market Maker</Link>
            <Link href="" className="nav-link" onClick={toggleSidebar}>Contact Us</Link>
            <button className="logout-btn sidebar-logout" onClick={toggleSidebar}>Log Out</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MarketMaker;
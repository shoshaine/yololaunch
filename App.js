import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  TrendingUp, 
  Shield, 
  Zap, 
  Wallet, 
  Activity, 
  Search, 
  Menu,
  X,
  ChevronDown,
  Info
} from 'lucide-react';

// --- Mock Data & Constants ---
const TRENDING_COINS = [
  { id: 1, name: 'Based Giga Chad', ticker: '$CHAD', mcap: '4.2M', change: '+124%', volume: '1.2M' },
  { id: 2, name: 'Sleepy Joe', ticker: '$NAP', mcap: '850K', change: '-12%', volume: '400K' },
  { id: 3, name: 'Pepe AI L2', ticker: '$PAI', mcap: '12.5M', change: '+45%', volume: '5.6M' },
  { id: 4, name: 'Anti-Vamp Doge', ticker: '$AVD', mcap: '150K', change: '+800%', volume: '900K' },
];

const FEE_PERCENTAGE = 0.001; // 0.1%

// --- Components ---

const Card = ({ children, className = "" }) => (
  <div className={`bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-xl p-6 ${className}`}>
    {children}
  </div>
);

const Button = ({ children, variant = 'primary', className = "", onClick }) => {
  const baseStyle = "px-6 py-3 rounded-lg font-bold transition-all duration-200 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white shadow-lg shadow-rose-900/20",
    secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/5",
    outline: "border border-rose-500/50 text-rose-400 hover:bg-rose-500/10"
  };
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Toggle = ({ label, description, enabled, setEnabled }) => (
  <div className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
    <div className="pr-4">
      <h4 className="text-white font-medium flex items-center gap-2">
        {label} 
        {label.includes('Vamp') && <Shield size={14} className="text-emerald-400" />}
      </h4>
      <p className="text-gray-400 text-xs mt-1">{description}</p>
    </div>
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${enabled ? 'bg-rose-600' : 'bg-gray-700'}`}
    >
      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`} />
    </button>
  </div>
);

// --- Views ---

const LaunchView = () => {
  const [isBundleProtected, setBundleProtected] = useState(true);
  const [isAntiVamp, setAntiVamp] = useState(true);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Launch on YOLO L2
        </h2>
        <p className="text-gray-400 mt-2">Instant deployment. Sniper proof. 0.1% Fees.</p>
      </div>

      <Card>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Token Name</label>
              <input type="text" placeholder="e.g. YOLO Doge" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-rose-500 focus:outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Ticker</label>
              <input type="text" placeholder="$YOLO" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-rose-500 focus:outline-none transition-colors" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase">Description</label>
            <textarea rows={3} placeholder="Tell the world why they should ape..." className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-rose-500 focus:outline-none transition-colors" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase">Image</label>
            <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center hover:border-rose-500/50 transition-colors cursor-pointer">
              <div className="mx-auto w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-2">
                <Rocket className="text-rose-500" size={20} />
              </div>
              <p className="text-sm text-gray-400">Drag and drop or click to upload</p>
            </div>
          </div>

          <div className="bg-black/20 rounded-lg p-4 border border-white/5">
            <h3 className="text-sm font-bold text-rose-400 mb-2 uppercase tracking-wider">Security Protocols</h3>
            <Toggle 
              label="Bundle Protection" 
              description="Prevents snipers from buying in the same block as liquidity add."
              enabled={isBundleProtected}
              setEnabled={setBundleProtected}
            />
            <Toggle 
              label="Anti-Vamp Tech™" 
              description="Dynamic tax adjustment to bleed MEV bots and redistribution to holders."
              enabled={isAntiVamp}
              setEnabled={setAntiVamp}
            />
          </div>

          <Button className="w-full text-lg">
            Deploy Token (0.02 SOL)
          </Button>
          <p className="text-center text-xs text-gray-500">By deploying you agree to YOLO L2 terms.</p>
        </div>
      </Card>
    </motion.div>
  );
};

const TradeView = () => {
  const [amount, setAmount] = useState('1');
  const [output, setOutput] = useState('42069.00');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {/* Chart Section */}
      <div className="lg:col-span-2 space-y-4">
        <Card className="h-[500px] flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold">Y</div>
              <div>
                <h3 className="text-white font-bold flex items-center gap-2">$YOLO / SOL <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">L2 Native</span></h3>
                <p className="text-emerald-400 text-sm font-mono">+14.2%</p>
              </div>
            </div>
            <div className="flex gap-2">
              {['15m', '1H', '4H', '1D'].map(t => (
                <button key={t} className="px-3 py-1 rounded text-xs font-medium bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                  {t}
                </button>
              ))}
            </div>
          </div>
          {/* Mock Chart Area */}
          <div className="flex-1 bg-gradient-to-b from-rose-500/5 to-transparent rounded-lg border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-sm">
              [ Interactive TradingView Chart Placeholder ]
            </div>
            {/* Fake candles for visuals */}
            <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end gap-1 px-4 opacity-50">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  style={{ height: `${Math.random() * 100}%` }} 
                  className={`flex-1 rounded-t-sm ${Math.random() > 0.5 ? 'bg-emerald-500' : 'bg-rose-500'}`} 
                />
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Swap UI */}
      <div className="space-y-4">
        <Card>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-white font-bold text-lg">Swap</h3>
            <div className="flex gap-2 text-gray-400">
              <Zap size={18} className="hover:text-yellow-400 cursor-pointer" />
              <Activity size={18} className="hover:text-rose-400 cursor-pointer" />
            </div>
          </div>

          <div className="space-y-1 relative">
            <div className="bg-black/30 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex justify-between mb-2">
                <span className="text-xs text-gray-400 font-bold">YOU SELL</span>
                <span className="text-xs text-gray-400">Bal: 12.5 SOL</span>
              </div>
              <div className="flex justify-between items-center">
                <input 
                  type="text" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-transparent text-3xl font-mono text-white outline-none w-1/2 placeholder-gray-600" 
                  placeholder="0.00"
                />
                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors">
                  <span className="w-5 h-5 rounded-full bg-indigo-500"></span>
                  <span className="font-bold text-white">SOL</span>
                  <ChevronDown size={14} className="text-gray-400" />
                </button>
              </div>
              <div className="text-xs text-gray-500 mt-2">≈ $145.20</div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
              <div className="bg-gray-900 border border-white/20 p-2 rounded-full cursor-pointer hover:rotate-180 transition-transform duration-500">
                <ChevronDown size={20} className="text-white" />
              </div>
            </div>

            <div className="bg-black/30 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex justify-between mb-2">
                <span className="text-xs text-gray-400 font-bold">YOU BUY</span>
                <span className="text-xs text-gray-400"></span>
              </div>
              <div className="flex justify-between items-center">
                <input 
                  type="text" 
                  value={output}
                  readOnly
                  className="bg-transparent text-3xl font-mono text-white outline-none w-1/2 placeholder-gray-600" 
                  placeholder="0.00"
                />
                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors">
                  <div className="w-5 h-5 rounded-full bg-rose-500 flex items-center justify-center text-[8px] font-bold text-white">Y</div>
                  <span className="font-bold text-white">YOLO</span>
                  <ChevronDown size={14} className="text-gray-400" />
                </button>
              </div>
              <div className="text-xs text-gray-500 mt-2">≈ $144.90</div>
            </div>
          </div>

          <div className="mt-4 space-y-2">
             <div className="flex justify-between text-xs text-gray-400">
                <span>Protocol Fee (0.1%)</span>
                <span className="text-emerald-400">0.001 SOL</span>
             </div>
             <div className="flex justify-between text-xs text-gray-400">
                <span>Price Impact</span>
                <span className="text-gray-200">~0.05%</span>
             </div>
          </div>

          <Button className="w-full mt-6 text-lg">
            Swap Now
          </Button>
        </Card>
        
        {/* Recent Trades Snippet */}
        <Card className="p-4">
          <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">Live Action</h4>
          <div className="space-y-2">
            {[1,2,3].map(i => (
              <div key={i} className="flex justify-between text-xs">
                 <span className="text-emerald-400 font-mono">BUY</span>
                 <span className="text-gray-300 font-mono">20.5 SOL</span>
                 <span className="text-gray-500">2s ago</span>
              </div>
            ))}
             <div className="flex justify-between text-xs">
                 <span className="text-rose-400 font-mono">SELL</span>
                 <span className="text-gray-300 font-mono">5.2 SOL</span>
                 <span className="text-gray-500">5s ago</span>
              </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

// --- Main App Component ---

const App = () => {
  const [view, setView] = useState('home'); // home, trade, launch
  const [walletConnected, setWalletConnected] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-rose-500 selection:text-white font-sans">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[128px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 border-b border-white/5 bg-black/50 backdrop-blur-lg sticky top-0">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-rose-500/20 transform rotate-3">
              <span className="font-black text-xl italic text-white">Y</span>
            </div>
            <span className="text-2xl font-black italic tracking-tighter">YOLO</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-400">
            <button onClick={() => setView('home')} className={`hover:text-white transition-colors ${view === 'home' ? 'text-white' : ''}`}>Dashboard</button>
            <button onClick={() => setView('trade')} className={`hover:text-white transition-colors ${view === 'trade' ? 'text-white' : ''}`}>Trade</button>
            <button onClick={() => setView('launch')} className={`hover:text-white transition-colors ${view === 'launch' ? 'text-white' : ''}`}>Launch</button>
          </div>

          <div className="flex items-center gap-4">
             <div className="hidden lg:flex items-center gap-2 text-xs font-mono bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                TPS: 4,200
             </div>
            <Button 
              variant={walletConnected ? 'secondary' : 'primary'} 
              className="py-2 px-4 text-sm"
              onClick={() => setWalletConnected(!walletConnected)}
            >
              <Wallet size={16} />
              {walletConnected ? '8B2...4X9' : 'Connect Wallet'}
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-10 min-h-[calc(100vh-80px)]">
        
        {view === 'home' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="space-y-12"
          >
            {/* Hero */}
            <div className="text-center space-y-6 py-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
                Live on Mainnet Beta
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
                Live Once. <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-orange-500 to-rose-500 animate-gradient-x">
                  Ape Forever.
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                The first Layer 2 Launchpad with built-in <span className="text-white font-bold">Anti-Vamp Tech™</span> and <span className="text-white font-bold">0.1% Fees</span>. Fair launches, zero rug potential.
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Button onClick={() => setView('launch')} className="text-lg px-8">Launch Token</Button>
                <Button onClick={() => setView('trade')} variant="secondary" className="text-lg px-8">Start Trading</Button>
              </div>
            </div>

            {/* Trending Stats */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <TrendingUp className="text-rose-500" /> Trending Now
                </h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  <input type="text" placeholder="Search tokens..." className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {TRENDING_COINS.map((coin) => (
                  <Card key={coin.id} className="hover:border-rose-500/50 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center text-xl">
                        {coin.ticker[1]}
                      </div>
                      <span className={`text-sm font-bold ${coin.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                        {coin.change}
                      </span>
                    </div>
                    <h4 className="font-bold text-lg text-white group-hover:text-rose-400 transition-colors">{coin.name}</h4>
                    <p className="text-xs text-gray-500 font-mono mb-4">{coin.ticker}</p>
                    <div className="flex justify-between text-xs text-gray-400 border-t border-white/5 pt-3">
                      <span>MCap: <span className="text-white">{coin.mcap}</span></span>
                      <span>Vol: <span className="text-white">{coin.volume}</span></span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {view === 'launch' && <LaunchView />}
        {view === 'trade' && <TradeView />}

      </main>
      
      {/* Footer */}
      <footer className="border-t border-white/5 bg-black mt-12 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
            <p className="mb-4">YOLO L2 Launchpad © 2025. Not financial advice.</p>
            <div className="flex justify-center gap-6">
                <a href="#" className="hover:text-white transition-colors">Docs</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">Telegram</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
export default function Home() {
  return (
    <div>
      <p className="text-bk-text-muted mb-4 text-sm">
        Match predictions from BK NEXUS for the biggest fixtures.
      </p>

      <h2 className="text-bk-neon text-xl font-bold mb-4 tracking-wide">NEXT MATCHES</h2>

      {/* MATCH CARD START */}
      <div className="bg-bk-card rounded-2xl p-5 border border-gray-700 shadow-lg mb-6">
        
        {/* Time Pill */}
        <div className="bg-bk-neon text-black font-bold px-3 py-1 rounded-md inline-block text-xs mb-4">
          TOMORROW 19:45
        </div>

        {/* Teams Row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center font-bold text-xs text-white">AR</div>
            <span className="font-bold text-lg text-white tracking-wide">ARSENAL</span>
          </div>
          <span className="text-bk-text-muted font-bold text-sm">VS</span>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-white tracking-wide">TOTTENHAM</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-xs text-black">TH</div>
          </div>
        </div>

        <p className="text-bk-text-muted text-xs mb-4">Premier League • Tottenham Hotspur Stadium</p>

        <hr className="border-gray-700 mb-4" />

        {/* Prediction Header */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-bk-neon font-bold text-sm tracking-wide">BK NEXUS prediction</span>
          <span className="bg-bk-neon text-black text-xs font-bold px-3 py-1 rounded-full">High confidence</span>
        </div>

        {/* Probability Bar */}
        <div className="flex h-2.5 rounded-full overflow-hidden mb-2">
          <div className="bg-bk-neon" style={{ width: '46%' }}></div>
          <div className="bg-bk-gray" style={{ width: '24%' }}></div>
          <div className="bg-bk-red" style={{ width: '30%' }}></div>
        </div>

        {/* Probability Text */}
        <div className="flex justify-between text-xs font-semibold text-bk-text-muted mb-5">
          <span>Arsenal <strong className="text-white">46%</strong></span>
          <span>Draw <strong className="text-white">24%</strong></span>
          <span>Spurs <strong className="text-white">30%</strong></span>
        </div>

        {/* Predicted Score Pill */}
        <div className="flex justify-between items-center">
          <span className="text-bk-text-muted text-sm">Predicted score</span>
          <span className="border border-bk-neon border-dashed text-bk-neon text-xs font-bold px-4 py-1 rounded-full">Coming soon</span>
        </div>

      </div>
      {/* MATCH CARD END */}

    </div>
  );
        }

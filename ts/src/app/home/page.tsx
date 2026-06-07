export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-zinc-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-lg font-semibold text-zinc-900 tracking-tight">RelationMap</span>
          <nav className="flex items-center gap-6 text-sm text-zinc-500">
            <a className="hover:text-zinc-900 transition-colors">機能</a>
            <a className="bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-700 transition-colors">
              作成する
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-sm font-medium text-zinc-400 mb-4 tracking-widest uppercase">人物相関図ツール</p>
        <h1 className="text-5xl font-bold text-zinc-900 leading-tight tracking-tight mb-6 max-w-2xl">
          関係性を
          <br />
          ひと目で伝える
        </h1>
        <p className="text-lg text-zinc-500 max-w-md mb-10 leading-relaxed">
          ノードとエッジで人物の関係を視覚的に表現。作成した相関図をURLで簡単に共有できます。
        </p>
        <div className="flex items-center gap-4">
          <a className="bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-700 transition-colors">
            無料で始める
          </a>
          <a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">詳しく見る →</a>
        </div>

        {/* Diagram preview */}
        <div className="mt-16 w-full max-w-2xl rounded-2xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm">
          <svg viewBox="0 0 480 240" className="w-full" aria-hidden="true">
            {/* Edges */}
            <line x1="240" y1="120" x2="120" y2="60" stroke="#d4d4d8" strokeWidth="2" />
            <line x1="240" y1="120" x2="360" y2="60" stroke="#d4d4d8" strokeWidth="2" />
            <line x1="240" y1="120" x2="120" y2="190" stroke="#d4d4d8" strokeWidth="2" />
            <line x1="240" y1="120" x2="360" y2="190" stroke="#d4d4d8" strokeWidth="2" />
            <line x1="120" y1="60" x2="360" y2="60" stroke="#e4e4e7" strokeWidth="1.5" strokeDasharray="4 3" />
            {/* Edge labels */}
            <text x="168" y="78" fontSize="10" fill="#a1a1aa" textAnchor="middle">
              親友
            </text>
            <text x="316" y="78" fontSize="10" fill="#a1a1aa" textAnchor="middle">
              同僚
            </text>
            <text x="168" y="168" fontSize="10" fill="#a1a1aa" textAnchor="middle">
              家族
            </text>
            <text x="316" y="168" fontSize="10" fill="#a1a1aa" textAnchor="middle">
              恋人
            </text>
            {/* Center node */}
            <circle cx="240" cy="120" r="28" fill="#18181b" />
            <text x="240" y="124" fontSize="12" fill="white" textAnchor="middle" fontWeight="600">
              田中
            </text>
            {/* Surrounding nodes */}
            <circle cx="120" cy="60" r="22" fill="white" stroke="#d4d4d8" strokeWidth="2" />
            <text x="120" y="64" fontSize="12" fill="#3f3f46" textAnchor="middle">
              佐藤
            </text>
            <circle cx="360" cy="60" r="22" fill="white" stroke="#d4d4d8" strokeWidth="2" />
            <text x="360" y="64" fontSize="12" fill="#3f3f46" textAnchor="middle">
              鈴木
            </text>
            <circle cx="120" cy="190" r="22" fill="white" stroke="#d4d4d8" strokeWidth="2" />
            <text x="120" y="194" fontSize="12" fill="#3f3f46" textAnchor="middle">
              高橋
            </text>
            <circle cx="360" cy="190" r="22" fill="white" stroke="#d4d4d8" strokeWidth="2" />
            <text x="360" y="194" fontSize="12" fill="#3f3f46" textAnchor="middle">
              伊藤
            </text>
          </svg>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-zinc-50 border-t border-zinc-200 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-zinc-900 text-center mb-12">シンプルな3ステップ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "人物を追加",
                desc: "ノードをクリックして人物を追加。名前や補足情報を入力できます。",
              },
              {
                step: "02",
                title: "関係を結ぶ",
                desc: "ノード間をドラッグして関係線を引き、ラベルで関係性を記述します。",
              },
              {
                step: "03",
                title: "URLで共有",
                desc: "作成した相関図はURLが自動生成。リンクを送るだけで共有できます。",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col gap-3">
                <span className="text-xs font-mono font-bold text-zinc-400">{step}</span>
                <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 px-6 py-6 text-center text-xs text-zinc-400">
        © 2026 RelationMap
      </footer>
    </div>
  );
}

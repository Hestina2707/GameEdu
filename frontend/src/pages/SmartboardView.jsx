// frontend/src/pages/SmartboardView.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SmartboardView() {
  const [mode, setMode] = useState("grid");
  const petakSawah = [
    { id: 1, tim: "Tim Komering", poin: 100, warna: "bg-blue-600" },
    { id: 2, tim: "🌱 Tunas", poin: 200, warna: "bg-emerald-950 border border-dashed border-emerald-500" },
    { id: 3, tim: "Tim Ogan", poin: 100, warna: "bg-amber-600" },
    { id: 4, tim: "🌱 Tunas", poin: 300, warna: "bg-emerald-950 border border-dashed border-emerald-500" },
    { id: 5, tim: "🏠 Lumbung", poin: 500, warna: "bg-yellow-500 text-slate-950" },
    { id: 6, tim: "🌱 Tunas", poin: 300, warna: "bg-emerald-950 border border-dashed border-emerald-500" },
    { id: 7, tim: "Tim Musi", poin: 100, warna: "bg-emerald-600" },
    { id: 8, tim: "🌱 Tunas", poin: 200, warna: "bg-emerald-950 border border-dashed border-emerald-500" },
    { id: 9, tim: "Tim Lematang", poin: 100, warna: "bg-pink-600" },
  ];

  return (
    <div className="min-h-screen bg-[#0c1a14] text-white p-6 md:p-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4 border-b border-emerald-900 pb-4">
        <div>
          <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">Smartboard · XI IPA 2</span>
          <h1 className="text-2xl font-bold">Rebut Sawah — {mode === "grid" ? "Territory Grid" : "Speed Clash"}</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-slate-900 border border-slate-700 px-4 py-2 rounded-xl text-right">
            <p className="text-[11px] text-slate-400">Kode room</p>
            <p className="text-xl font-extrabold text-amber-400 tracking-widest">615 207</p>
          </div>
          <button onClick={() => setMode(mode === "grid" ? "speed" : "grid")} className="bg-indigo-600 px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-indigo-500">
            Ganti Mode Game
          </button>
          <Link to="/guru" className="bg-slate-800 px-3 py-2.5 rounded-xl text-xs">Keluar</Link>
        </div>
      </div>

      {mode === "grid" ? (
        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 grid grid-cols-3 gap-3 bg-[#132a20] p-4 rounded-2xl border border-emerald-800">
            {petakSawah.map((p) => (
              <div key={p.id} className={`${p.warna} rounded-xl p-5 flex flex-col items-center justify-center font-bold shadow`}>
                <span className="text-xs opacity-95">{p.tim}</span>
                <span className="text-xl mt-1">{p.poin}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#132a20] p-5 rounded-2xl border border-emerald-800 space-y-4">
            <div className="bg-indigo-950 border border-indigo-600 p-4 rounded-xl">
              <p className="text-xs text-indigo-300">Giliran menanam:</p>
              <p className="text-lg font-bold text-white">Tim Komering</p>
              <p className="text-xs text-slate-300 mt-1">Kapten memilih petak bertanda tunas di HP untuk membuka soal rebutan.</p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-bold text-slate-300">Hasil panen sementara</p>
              <div className="flex justify-between bg-slate-900/80 p-2.5 rounded-lg"><span>🔵 Tim Komering</span><strong className="text-amber-400">300</strong></div>
              <div className="flex justify-between bg-slate-900/80 p-2.5 rounded-lg"><span>🟠 Tim Ogan</span><strong className="text-amber-400">300</strong></div>
              <div className="flex justify-between bg-slate-900/80 p-2.5 rounded-lg"><span>🟢 Tim Musi</span><strong className="text-amber-400">200</strong></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto mt-10 bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center space-y-4">
          <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold">SOAL AKTIF · 30 DETIK</span>
          <h2 className="text-2xl font-bold">Jumlah 10 suku pertama deret 2 + 4 + 6 + ... adalah?</h2>
          <p className="text-sm text-slate-400">Silakan siswa memilih jawaban A, B, C, atau D di layar HP masing-masing!</p>
        </div>
      )}
    </div>
  );
}
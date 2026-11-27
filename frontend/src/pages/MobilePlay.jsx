// frontend/src/pages/MobilePlay.jsx
import { useState } from "react";

export default function MobilePlay() {
  const [tahap, setTahap] = useState("join");
  const [nama, setNama] = useState("");
  const [kode, setKode] = useState("615207");
  const [jawaban, setJawaban] = useState(null);
  const kunciBenar = "B";

  if (tahap === "join") {
    return (
      <div className="min-h-screen bg-[#15133c] text-white flex items-center justify-center p-5">
        <div className="w-full max-w-sm bg-slate-900 border border-indigo-800 rounded-3xl p-6 space-y-4">
          <div className="text-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 mx-auto flex items-center justify-center font-bold text-xl">D</div>
            <h1 className="text-xl font-bold mt-3">DOLAN · ASALink Arena</h1>
            <p className="text-xs text-slate-400">Masukkan kode yang tampil di smartboard kelas</p>
          </div>
          <input value={kode} onChange={(e) => setKode(e.target.value)} className="w-full text-center text-2xl font-extrabold tracking-widest bg-slate-800 border border-slate-700 rounded-xl py-3" />
          <input value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama panggilan (Contoh: Rara)" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm" />
          <button onClick={() => nama && setTahap("jawab")} className="w-full bg-orange-500 hover:bg-orange-600 font-bold py-3 rounded-xl text-sm">
            Masuk arena
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#15133c] text-white flex items-center justify-center p-5">
      <div className="w-full max-w-sm space-y-4">
        <div className="flex justify-between text-xs text-slate-300">
          <span>Soal 3 / 10</span>
          <span><strong>{nama}</strong> · 820 poin</span>
        </div>
        {tahap === "jawab" ? (
          <>
            <div className="bg-slate-900 p-4 rounded-2xl border border-indigo-800">
              <p className="font-bold text-sm">Jumlah 10 suku pertama deret 2 + 4 + 6 + ... adalah?</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { opsi: "A", teks: "100", warna: "bg-indigo-500 text-white" },
                { opsi: "B", teks: "110", warna: "bg-amber-300 text-slate-950" },
                { opsi: "C", teks: "120", warna: "bg-emerald-400 text-slate-950" },
                { opsi: "D", teks: "90", warna: "bg-pink-400 text-slate-950" },
              ].map((item) => (
                <button
                  key={item.opsi}
                  onClick={() => { setJawaban(item.opsi); setTahap("hasil"); }}
                  className={`${item.warna} p-6 rounded-2xl font-bold text-center shadow-lg active:scale-95 transition`}
                >
                  <div className="text-2xl">{item.opsi}</div>
                  <div className="text-sm mt-1">{item.teks}</div>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-slate-900 border border-indigo-800 p-6 rounded-3xl text-center space-y-3">
            <div className={`p-4 rounded-2xl font-extrabold ${jawaban === kunciBenar ? "bg-emerald-400 text-slate-950" : "bg-rose-500 text-white"}`}>
              {jawaban === kunciBenar ? "✓ Benar! +120 poin" : "✕ Kurang Tepat"}
            </div>
            <div className="bg-slate-800 p-3 rounded-xl text-left text-xs text-slate-200">
              <strong>Pembahasan:</strong><br />S10 = 10/2 × (2 × 2 + 9 × 2) = 5 × 22 = 110
            </div>
            <button onClick={() => setTahap("jawab")} className="w-full bg-indigo-600 py-2.5 rounded-xl text-xs font-bold">
              Kembali ke soal (simulasi)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
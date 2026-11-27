import { Link } from "react-router-dom";
import { Zap, Grid2X2, HardHat, Compass, Ruler } from "lucide-react";

export default function SesiGame() {
  return (
    <div className="space-y-6">
      {/* Banner Utama Mirip Referensi */}
      <div className="relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-r from-[#d9c3a5] via-[#cbb08c] to-[#87a6c0] p-5 sm:p-7 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Karakter Tukang / Arsitek */}
          <div className="flex flex-col items-center shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-amber-100 border-2 border-amber-500 flex items-center justify-center shadow-md">
              <HardHat className="w-11 h-11 text-amber-600" />
            </div>
            <span className="mt-2 px-3 py-0.5 rounded-full bg-slate-900/80 text-amber-300 text-[11px] font-bold">
              Builder Arena
            </span>
          </div>

          {/* Judul Game + Tombol MULAI ke /board */}
          <div className="text-center space-y-3 flex-1">
            <div className="inline-block bg-slate-900/85 text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full tracking-wide">
              GAME EDUKATIF INTERAKTIF
            </div>
            <h2
              className="text-3xl sm:text-5xl font-black tracking-wide text-amber-400 drop-shadow-[0_3px_0_rgba(15,23,42,0.95)]"
              style={{ WebkitTextStroke: "1.5px #0f172a" }}
            >
              ARCHIMATH
            </h2>
            <p className="text-xs sm:text-sm font-extrabold tracking-wider text-slate-900 bg-amber-200/90 inline-block px-4 py-1 rounded-lg border border-slate-800">
              BUILD YOUR DREAM!
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-900 max-w-xl mx-auto">
              Klik <strong>MULAI</strong> untuk membuka Arena Rebut Sawah (Layar Smartboard)[cite: 64].
            </p>

            <div className="pt-1">
              <Link
                to="/board"
                className="inline-flex items-center justify-center px-9 py-3 rounded-full bg-gradient-to-b from-amber-400 to-orange-600 hover:from-amber-300 hover:to-orange-500 text-white font-black text-base tracking-wider border-2 border-amber-100 shadow-lg active:scale-95 transition"
              >
                MULAI
              </Link>
            </div>
          </div>

          {/* Dekorasi Blueprint / Alat Ukur */}
          <div className="hidden lg:flex flex-col gap-2.5 shrink-0">
            <div className="w-28 h-20 rounded-xl bg-blue-900 border-2 border-blue-200/80 p-2.5 text-blue-100 flex flex-col justify-between shadow">
              <Compass className="w-5 h-5 text-amber-300" />
              <span className="text-[10px] font-mono">GRID · A-B-C-D</span>
            </div>
            <div className="w-28 h-11 rounded-xl bg-amber-300 border-2 border-slate-800 px-3 flex items-center justify-between text-slate-900 font-bold text-xs shadow">
              <Ruler className="w-4 h-4" />
              <span>LEVEL C2–C4</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2 Kartu Pilihan Mode Permainan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs flex flex-col justify-between">
          <div>
            <div className="h-32 bg-gradient-to-r from-sky-200 via-blue-100 to-amber-100 flex items-center justify-center border-b border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-md">
                <Zap className="w-9 h-9" />
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-base text-slate-900">Speed Clash — Sesi Adu Cepat</h3>
              <p className="text-xs text-slate-500 mt-1">
                Siswa menjawab soal di HP secepat dan setepat mungkin untuk mengumpulkan poin tertinggi.
              </p>
            </div>
          </div>
          <div className="px-5 pb-5">
            <Link
              to="/board"
              className="w-full inline-flex items-center justify-center py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition"
            >
              Mulai Sesi Speed Clash
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs flex flex-col justify-between">
          <div>
            <div className="h-32 bg-gradient-to-r from-emerald-200 via-lime-100 to-teal-100 flex items-center justify-center border-b border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                <Grid2X2 className="w-9 h-9" />
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-base text-slate-900">
                Territory Grid — Rebut Sawah (Team Play)
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Tiap tim berebut petak sawah dan lumbung padi di layar Smartboard kelas.
              </p>
            </div>
          </div>
          <div className="px-5 pb-5">
            <Link
              to="/board"
              className="w-full inline-flex items-center justify-center py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm transition"
            >
              Mulai Sesi → Rebut Sawah
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
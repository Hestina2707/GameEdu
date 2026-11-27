import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, Monitor, Lightbulb, FileText, CheckSquare, Star } from "lucide-react";

export default function BerandaGuru() {
  const soalTerbaru = [
    { level: "C2", warna: "bg-amber-100 text-amber-800", teks: "Suku ke-5 barisan aritmetika 3, 7, 11...", jenis: "Pilihan ganda", durasi: "20 dtk" },
    { level: "C3", warna: "bg-emerald-100 text-emerald-800", teks: "Jumlah 10 suku pertama deret 2 + 4 + 6 + ...", jenis: "Pilihan ganda", durasi: "30 dtk" },
    { level: "C4", warna: "bg-indigo-100 text-indigo-800", teks: "Tabungan naik Rp5.000 per minggu...", jenis: "Isian singkat", durasi: "45 dtk" },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 md:gap-6">
      <div className="xl:col-span-8 space-y-5 min-w-0">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-7 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              Ubah bab jadi<br />arena kelas
            </h2>
            <Link
              to="/board"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm shadow-sm transition"
            >
              Buat sesi game <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-2 rotate-[-4deg] self-center sm:self-auto shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-100 text-blue-700 font-bold flex items-center justify-center">A</div>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-100"></div>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-indigo-100"></div>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-300 text-slate-900 font-bold flex items-center justify-center">B</div>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-100"></div>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center shadow">★</div>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-100"></div>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-200"></div>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-300 text-slate-900 font-bold flex items-center justify-center">C</div>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-100"></div>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-pink-200"></div>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-pink-300 text-slate-900 font-bold flex items-center justify-center">D</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0"><FileText className="w-5 h-5" /></div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-slate-800">Total soal</p>
              <p className="text-[11px] text-slate-400 truncate">Bab 3 · Barisan dan deret</p>
              <p className="text-xs font-bold text-orange-600 mt-1">24 soal</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0"><CheckSquare className="w-5 h-5" /></div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-slate-800">Sudah direview</p>
              <p className="text-[11px] text-slate-400 truncate">Siap dipakai di game</p>
              <p className="text-xs font-bold text-emerald-600 mt-1">18 dari 24</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0"><Star className="w-5 h-5" /></div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-slate-800">Soal HOTS</p>
              <p className="text-[11px] text-slate-400 truncate">Level C4–C6</p>
              <p className="text-xs font-bold text-blue-600 mt-1">25%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3">
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0">SC</div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Speed Clash</h4>
                <p className="text-xs text-slate-500 mt-0.5">Adu cepat menjawab benar.</p>
                <Link to="/board" className="inline-block mt-2 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-lg">Pakai</Link>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center shrink-0">TG</div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Territory Grid</h4>
                <p className="text-xs text-slate-500 mt-0.5">Tim merebut petak sawah.</p>
                <Link to="/board" className="inline-block mt-2 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-lg">Pakai</Link>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 bg-white p-4 rounded-2xl border border-slate-200/80 min-w-0">
            <div className="flex justify-between items-center mb-3 gap-2">
              <h4 className="font-bold text-sm text-slate-900">Soal terbaru · Bab 3</h4>
              <Link to="/guru/tambah-soal" className="text-xs font-semibold text-blue-600 hover:underline shrink-0">+ Tambah soal</Link>
            </div>
            <div className="space-y-2.5">
              {soalTerbaru.map((s, i) => (
                <div key={i} className="flex items-center justify-between gap-2 p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className={`px-2 py-1 rounded-lg font-bold text-xs shrink-0 ${s.warna}`}>{s.level}</span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-800 truncate">{s.teks}</p>
                      <p className="text-[11px] text-slate-400">{s.jenis} · {s.durasi}</p>
                    </div>
                  </div>
                  <Link to="/guru/bank-soal" className="text-[11px] border border-slate-200 px-2.5 py-1 rounded-lg text-slate-600 shrink-0">Lihat</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="xl:col-span-4 space-y-5">
        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 space-y-3">
          <h3 className="font-bold text-sm text-slate-900">Notifikasi</h3>
          <div className="p-3 rounded-2xl bg-slate-50 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-slate-800">Sesi selesai</p>
              <p className="text-[11px] text-slate-500">Speed Clash · XI IPA 2</p>
            </div>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-slate-800">6 soal perlu review</p>
              <p className="text-[11px] text-slate-500">Hasil impor CSV Bab 3</p>
            </div>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 flex items-start gap-3">
            <Monitor className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-slate-800">Smartboard terhubung</p>
              <p className="text-[11px] text-slate-500">Ruang XI IPA 2</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 space-y-3">
          <h3 className="font-bold text-sm text-slate-900">Tips hari ini</h3>
          <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-100 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-200 text-amber-800 flex items-center justify-center shrink-0">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Campur level Bloom</p>
              <p className="text-[11px] text-slate-600 mt-0.5">Sisipkan 1 soal C4 tiap 3 soal C1–C2 supaya siswa tidak hanya adu cepat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// frontend/src/pages/Laporan.jsx
export default function Laporan() {
 const riwayat = [
 { id: 1, tanggal: "27 Nov 2026", mode: "Territory Grid (Rebut Sawah)", bab: "Bab 2 · Fungsi", pemenang:
"Tim Komering (500 pts)", akurasi: "84%" },
 { id: 2, tanggal: "25 Nov 2026", mode: "Speed Clash", bab: "Bab 3 · Barisan & Deret", pemenang: "Rara Anindya (940 pts)", akurasi: "78%" },
 ];
 return (
 <div className="space-y-6">
 <div>
 <h2 className="text-2xl font-bold text-slate-900">Laporan Hasil Sesi Game</h2>
 <p className="text-sm text-slate-500">Rekap evaluasi pemahaman siswa dari setiap sesi permainan.</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 {riwayat.map((r) => (
 <div key={r.id} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
 <div className="flex justify-between text-xs text-slate-400">
 <span>{r.tanggal}</span><span className="font-semibold text-emerald-600">Akurasi Kelas:
{r.akurasi}</span>
 </div>
 <h3 className="font-bold text-slate-900">{r.mode}</h3>
 <p className="text-xs text-slate-600">Materi: {r.bab}</p>
 <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-blue-700"> Pemenang:
{r.pemenang}</div>
 </div>
 ))}
 </div>
 </div>
 );
}
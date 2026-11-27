// frontend/src/pages/BankSoal.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Trash2 } from "lucide-react";
import axios from "axios";
const DATA_AWAL = [
    {
        id: 1, mapel: "Matematika", bab: "Barisan & Deret", bloom: "C3", durasi: 30, pertanyaan: "Jumlah 10 suku pertama deret 2 + 4 + 6 + ...adalah ? ", kunci: "B" },
 {
                id: 2, mapel: "Matematika", bab: "Fungsi Komposisi", bloom: "C4", durasi: 45, pertanyaan: "Jika f(x) = x² dan g(x) = x + 1, berapakah(f ∘ g)(2) ? ", kunci: "C" },
];
export default function BankSoal() {
    const [soalList, setSoalList] = useState(DATA_AWAL);
    useEffect(() => {
        axios.get("http://localhost:5000/api/questions")
            .then((res) => { if (res.data.length > 0) setSoalList(res.data); })
            .catch(() => { });
    }, []);
    const hapusSoal = async (id) => {
        setSoalList(soalList.filter((item) => item.id !== id));
        try { await axios.delete(`http://localhost:5000/api/questions/${id}`); } catch { }
    };
    return (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h2 className="text-xl font-bold text-slate-900">Bank Soal Kelas</h2>
                    <p className="text-xs text-slate-500">Semua pertanyaan yang siap digunakan pada sesi permainan.</p>
                </div>
                <Link to="/guru/tambah-soal" className="inline-flex items-center gap-2 bg-blue-600 text-white fontsemibold px-4 py-2 rounded-xl text-sm hover:bg-blue-700">
                    <Plus className="w-4 h-4" /> Tambah Soal
                </Link>
            </div>
            <div className="space-y-3">
                {soalList.map((s) => (
                    <div key={s.id} className="flex items-center justify-between p-4 rounded-2xl border borderslate-200 hover:border-blue-300">
                        <div className="flex items-start gap-3">
                            <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-800 font-bold text-xs">{s.bloom
                                || "C3"}</span>
                            <div>
                                <p className="font-semibold text-slate-800 text-sm">{s.pertanyaan}</p>
                                <p className="text-xs text-slate-500 mt-1">{s.mapel} · {s.bab} · {s.durasi} dtk · Kunci:
                                    <strong>{s.kunci}</strong></p>
                            </div>
                        </div>
                        <button onClick={() => hapusSoal(s.id)} className="text-rose-500 hover:bg-rose-50 p-2 roundedlg">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
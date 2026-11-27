import { useState } from "react";
import { UserPlus } from "lucide-react";
export default function KelasSiswa() {
    const [siswa, setSiswa] = useState([
        { id: 1, nama: "Rara Anindya", kelas: "XI IPA 2", tim: "Tim Komering", poin: 940 },
        { id: 2, nama: "Dimas Pratama", kelas: "XI IPA 2", tim: "Tim Ogan", poin: 880 },
        { id: 3, nama: "Siti Rahma", kelas: "XI IPA 2", tim: "Tim Musi", poin: 820 },
    ]);
    const [namaBaru, setNamaBaru] = useState("");
    const [timBaru, setTimBaru] = useState("Tim Komering");
    const tambahSiswa = (e) => {
        e.preventDefault();
        if (!namaBaru.trim()) return;
        setSiswa([...siswa, { id: Date.now(), nama: namaBaru, kelas: "XI IPA 2", tim: timBaru, poin: 0 }]);
        setNamaBaru("");
    };
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-slate-900">Kelas & Daftar Siswa</h2>
                <p className="text-sm text-slate-500">Atur anggota kelas XI IPA 2 dan pembagian tim Arena.</p>
            </div>
            <form onSubmit={tambahSiswa} className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-wrap 
gap-3">
                <input value={namaBaru} onChange={(e) => setNamaBaru(e.target.value)} placeholder="Nama lengkap 
siswa..." className="flex-1 min-w-[200px] rounded-xl border border-slate-300 px-3 py-2 text-sm" />
                <select value={timBaru} onChange={(e) => setTimBaru(e.target.value)} className="rounded-xl border border-slate-300 px-3 py-2 text-sm">
                    <option>Tim Komering</option><option>Tim Ogan</option><option>Tim Musi</option><option>Tim
                        Lematang</option>
                </select>
                <button type="submit" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 
rounded-xl text-sm font-semibold hover:bg-blue-700">
                    <UserPlus className="w-4 h-4" /> Tambah Siswa
                </button>
            </form>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-100 text-slate-600">
                        <tr><th className="p-4">Nama Siswa</th><th className="p-4">Kelas</th><th className="p-4">Kelompok
                            Arena</th><th className="p-4">Akumulasi Poin</th></tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {siswa.map((s) => (
                            <tr key={s.id}>
                                <td className="p-4 font-semibold">{s.nama}</td>
                                <td className="p-4">{s.kelas}</td>
                                <td className="p-4"><span className="px-2.5 py-1 rounded-full text-xs font-medium bgindigo-50 text-indigo-700">{s.tim}</span></td>
                                <td className="p-4 font-bold text-emerald-600">{s.poin} pts</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
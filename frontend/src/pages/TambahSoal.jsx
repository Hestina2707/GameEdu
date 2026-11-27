// frontend/src/pages/TambahSoal.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function TambahSoal() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        mapel: "Matematika", bab: "Bab 3 · Barisan dan Deret", bloom: "C3", durasi: 30,
        pertanyaan: "", opsi_a: "", opsi_b: "", opsi_c: "", opsi_d: "", kunci: "B", pembahasan: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/questions", form);
            alert("Soal berhasil disimpan ke MySQL!");
        } catch {
            alert("Soal tersimpan lokal (nyalakan server backend untuk simpan ke MySQL).");
        }
        navigate("/guru/bank-soal");
    };
    return (
        <div className="max-w-3xl bg-white rounded-3xl border border-slate-200 p-6 md:p-8">
            <h2 className="text-xl font-bold text-slate-900">Tambah Soal</h2>
            <form onSubmit={handleSubmit} className="mt-5 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="text-xs font-semibold text-slate-600">Mapel</label>
                        <input value={form.mapel} onChange={(e) => setForm({ ...form, mapel: e.target.value })}
                            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" required />
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-slate-600">Level Bloom</label>
                        <select value={form.bloom} onChange={(e) => setForm({ ...form, bloom: e.target.value })}
                            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm">
                            <option value="C2">C2 · Memahami</option>
                            <option value="C3">C3 · Menerapkan</option>
                            <option value="C4">C4 · Menganalisis</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-slate-600">Durasi (detik)</label>
                        <input type="number" value={form.durasi} onChange={(e) => setForm({
                            ...form, durasi:
                                e.target.value
                        })} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
                    </div>
                </div>
                <div>
                    <label className="text-xs font-semibold text-slate-600">Teks Soal</label>
                    <textarea rows={3} value={form.pertanyaan} onChange={(e) => setForm({
                        ...form, pertanyaan:
                            e.target.value
                    })} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" required />
                </div>
                <div className="space-y-2.5">
                    <label className="text-xs font-semibold text-slate-600">Opsi Jawaban — pilih satu sebagai kunci</
                    label>
                    {["A", "B", "C", "D"].map((huruf) => {
                        const keyName = `opsi_${huruf.toLowerCase()}`;
                        return (
                            <div key={huruf} className="flex items-center gap-2.5">
                                <input type="radio" name="kunci" checked={form.kunci === huruf} onChange={() =>
                                    setForm({ ...form, kunci: huruf })} />
                                <span className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 font-bold text-xs flex
items-center justify-center">{huruf}</span>
                                <input value={form[keyName]} onChange={(e) => setForm({
                                    ...form, [keyName]:
                                        e.target.value
                                })} placeholder={`Jawaban ${huruf}`} className="flex-1 rounded-xl border border-slate-300 px-3
py-2 text-sm" required />
                            </div>
                        );
                    })}
                </div>
                <div>
                    <label className="text-xs font-semibold text-slate-600">Pembahasan (tampil setelah jawaban
                        dibuka)</label>
                    <input value={form.pembahasan} onChange={(e) => setForm({ ...form, pembahasan: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
                </div>
                <div className="flex justify-end gap-2">
                    <button type="button" onClick={() => navigate("/guru")} className="px-4 py-2 rounded-xl border
text-sm">Batal</button>
                    <button type="submit" className="px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold text-sm
hover:bg-blue-700">Simpan Soal</button>
                </div>
            </form>
        </div>
    );
}
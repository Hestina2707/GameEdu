import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2, Check, X } from "lucide-react";
import axios from "axios";

const DATA_AWAL = [
  {
    id: 1,
    mapel: "Matematika",
    bab: "Bab 3 · Barisan dan Deret",
    bloom: "C3",
    durasi: 30,
    pertanyaan: "Jumlah 10 suku pertama deret 2 + 4 + 6 + ... adalah?",
    kunci: "B",
  },
];

export default function BankSoal() {
  const [soalList, setSoalList] = useState(DATA_AWAL);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    mapel: "",
    bab: "",
    bloom: "C3",
    durasi: 30,
    pertanyaan: "",
    kunci: "B",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/questions")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setSoalList(res.data);
        }
      })
      .catch(() => {});
  }, []);

  const mulaiEdit = (item) => {
    setEditId(item.id);
    setEditForm({
      mapel: item.mapel || "Matematika",
      bab: item.bab || "Bab 3 · Barisan dan Deret",
      bloom: item.bloom || "C3",
      durasi: item.durasi || 30,
      pertanyaan: item.pertanyaan || "",
      kunci: item.kunci || "B",
    });
  };

  const simpanEdit = async (id) => {
    if (!editForm.pertanyaan.trim()) return;

    const dataUpdate = {
      ...editForm,
      pertanyaan: editForm.pertanyaan.trim(),
      durasi: Number(editForm.durasi) || 30,
    };

    setSoalList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...dataUpdate } : item))
    );
    setEditId(null);

    try {
      await axios.put(`http://localhost:5000/api/questions/${id}`, dataUpdate);
    } catch {}
  };

  const hapusSoal = async (id) => {
    setSoalList((prev) => prev.filter((item) => item.id !== id));
    try {
      await axios.delete(`http://localhost:5000/api/questions/${id}`);
    } catch {}
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-6 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">Bank Soal Kelas</h2>
          <p className="text-xs text-slate-500">
            Semua pertanyaan yang siap digunakan pada sesi permainan.
          </p>
        </div>
        <Link
          to="/guru/tambah-soal"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-xl text-sm hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" /> Tambah Soal
        </Link>
      </div>

      <div className="space-y-3">
        {soalList.map((s) => {
          const sedangEdit = editId === s.id;
          return (
            <div
              key={s.id}
              className={`p-3.5 sm:p-4 rounded-2xl border transition ${
                sedangEdit
                  ? "border-blue-300 bg-blue-50/30 space-y-3"
                  : "border-slate-200 hover:border-blue-300 flex items-start sm:items-center justify-between gap-3"
              }`}
            >
              {sedangEdit ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-slate-600">Level Bloom</label>
                      <select
                        value={editForm.bloom}
                        onChange={(e) => setEditForm({ ...editForm, bloom: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-1.5 text-xs bg-white"
                      >
                        <option value="C2">C2</option>
                        <option value="C3">C3</option>
                        <option value="C4">C4</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-600">Durasi (detik)</label>
                      <input
                        type="number"
                        min="5"
                        value={editForm.durasi}
                        onChange={(e) => setEditForm({ ...editForm, durasi: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-1.5 text-xs bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-600">Kunci Jawaban</label>
                      <select
                        value={editForm.kunci}
                        onChange={(e) => setEditForm({ ...editForm, kunci: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-1.5 text-xs bg-white"
                      >
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-600">Teks Pertanyaan</label>
                    <textarea
                      rows={2}
                      value={editForm.pertanyaan}
                      onChange={(e) => setEditForm({ ...editForm, pertanyaan: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm bg-white"
                    />
                  </div>

                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setEditId(null)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-300"
                    >
                      <X className="w-3.5 h-3.5" /> Batal
                    </button>
                    <button
                      type="button"
                      onClick={() => simpanEdit(s.id)}
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700"
                    >
                      <Check className="w-3.5 h-3.5" /> Simpan
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-3 min-w-0">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-800 font-bold text-xs shrink-0">
                      {s.bloom || "C3"}
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-800 text-sm break-words">
                        {s.pertanyaan}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {s.mapel} · {s.bab} · {s.durasi} dtk · Kunci:{" "}
                        <strong>{s.kunci}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => mulaiEdit(s)}
                      className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg"
                      title="Edit soal"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => hapusSoal(s.id)}
                      className="text-rose-500 hover:bg-rose-50 p-2 rounded-lg"
                      title="Hapus soal"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
import { useEffect, useState } from "react";
import { UserPlus, Pencil, Trash2, Check, X } from "lucide-react";
import axios from "axios";

const SISWA_AWAL = [
  { id: 1, nama: "Rara Anindya", kelas: "XI IPA 2", tim: "Tim Komering", poin: 940 },
  { id: 2, nama: "Dimas Pratama", kelas: "XI IPA 2", tim: "Tim Ogan", poin: 880 },
  { id: 3, nama: "Siti Rahma", kelas: "XI IPA 2", tim: "Tim Musi", poin: 820 },
];

export default function KelasSiswa() {
  const [siswa, setSiswa] = useState(SISWA_AWAL);
  const [form, setForm] = useState({
    nama: "",
    kelas: "XI IPA 2",
    tim: "Tim Komering",
    poin: 0,
  });
  const [pesan, setPesan] = useState("");

  // State khusus untuk fitur Edit baris
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    nama: "",
    kelas: "",
    tim: "",
    poin: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/students")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setSiswa(res.data);
        }
      })
      .catch(() => {});
  }, []);

  // 1. Tambah Siswa Baru
  const tambahSiswa = async (e) => {
    e.preventDefault();
    if (!form.nama.trim()) return;

    const dataBaru = {
      nama: form.nama.trim(),
      kelas: form.kelas.trim() || "XI IPA 2",
      tim: form.tim,
      poin: Number(form.poin) || 0,
    };

    try {
      const res = await axios.post("http://localhost:5000/api/students", dataBaru);
      setSiswa((prev) => [{ ...dataBaru, id: res.data.id || Date.now() }, ...prev]);
      setPesan("Siswa berhasil ditambahkan ke database!");
    } catch {
      setSiswa((prev) => [{ ...dataBaru, id: Date.now() }, ...prev]);
      setPesan("Siswa ditambahkan secara lokal.");
    }

    setForm({ nama: "", kelas: form.kelas, tim: form.tim, poin: 0 });
  };

  // 2. Mulai Mode Edit
  const mulaiEdit = (item) => {
    setEditId(item.id);
    setEditForm({
      nama: item.nama,
      kelas: item.kelas,
      tim: item.tim,
      poin: item.poin,
    });
  };

  // 3. Simpan Hasil Edit
  const simpanEdit = async (id) => {
    if (!editForm.nama.trim()) return;

    const dataUpdate = {
      nama: editForm.nama.trim(),
      kelas: editForm.kelas.trim() || "XI IPA 2",
      tim: editForm.tim,
      poin: Number(editForm.poin) || 0,
    };

    setSiswa((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...dataUpdate } : item))
    );
    setEditId(null);

    try {
      await axios.put(`http://localhost:5000/api/students/${id}`, dataUpdate);
      setPesan("Data siswa berhasil diperbarui!");
    } catch {
      setPesan("Perubahan disimpan secara lokal.");
    }
  };

  // 4. Hapus Siswa
  const hapusSiswa = async (id) => {
    setSiswa((prev) => prev.filter((item) => item.id !== id));
    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`);
      setPesan("Siswa berhasil dihapus.");
    } catch {}
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Kelas & Daftar Siswa</h2>
        <p className="text-sm text-slate-500">
          Tambah anggota siswa, atur kelas, dan bagi kelompok tim Arena.
        </p>
      </div>

      {/* Form Tambah Siswa */}
      <form
        onSubmit={tambahSiswa}
        className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-bold text-sm text-slate-900">Form Tambah Siswa</h3>
          {pesan && <span className="text-xs font-medium text-emerald-600">{pesan}</span>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div>
            <label className="text-xs font-semibold text-slate-600">Nama Lengkap Siswa</label>
            <input
              value={form.nama}
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              placeholder="Contoh: Budi Santoso"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              required
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600">Kelas</label>
            <input
              value={form.kelas}
              onChange={(e) => setForm({ ...form, kelas: e.target.value })}
              placeholder="XI IPA 2"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              required
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600">Kelompok Tim Arena</label>
            <select
              value={form.tim}
              onChange={(e) => setForm({ ...form, tim: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            >
              <option>Tim Komering</option>
              <option>Tim Ogan</option>
              <option>Tim Musi</option>
              <option>Tim Lematang</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600">Poin Awal</label>
            <input
              type="number"
              min="0"
              value={form.poin}
              onChange={(e) => setForm({ ...form, poin: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition"
          >
            <UserPlus className="w-4 h-4" /> Simpan Siswa
          </button>
        </div>
      </form>

      {/* Tabel Daftar Siswa + Kolom Aksi (Edit & Hapus) */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="p-4">Nama Siswa</th>
              <th className="p-4">Kelas</th>
              <th className="p-4">Kelompok Arena</th>
              <th className="p-4">Akumulasi Poin</th>
              <th className="p-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {siswa.map((s) => {
              const sedangEdit = editId === s.id;
              return (
                <tr key={s.id} className={sedangEdit ? "bg-blue-50/40" : ""}>
                  {/* Kolom Nama */}
                  <td className="p-4 font-semibold">
                    {sedangEdit ? (
                      <input
                        value={editForm.nama}
                        onChange={(e) => setEditForm({ ...editForm, nama: e.target.value })}
                        className="w-44 rounded-lg border border-slate-300 px-2.5 py-1 text-sm font-normal bg-white"
                      />
                    ) : (
                      s.nama
                    )}
                  </td>

                  {/* Kolom Kelas */}
                  <td className="p-4">
                    {sedangEdit ? (
                      <input
                        value={editForm.kelas}
                        onChange={(e) => setEditForm({ ...editForm, kelas: e.target.value })}
                        className="w-24 rounded-lg border border-slate-300 px-2.5 py-1 text-sm bg-white"
                      />
                    ) : (
                      s.kelas
                    )}
                  </td>

                  {/* Kolom Kelompok Arena */}
                  <td className="p-4">
                    {sedangEdit ? (
                      <select
                        value={editForm.tim}
                        onChange={(e) => setEditForm({ ...editForm, tim: e.target.value })}
                        className="rounded-lg border border-slate-300 px-2.5 py-1 text-sm bg-white"
                      >
                        <option>Tim Komering</option>
                        <option>Tim Ogan</option>
                        <option>Tim Musi</option>
                        <option>Tim Lematang</option>
                      </select>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
                        {s.tim}
                      </span>
                    )}
                  </td>

                  {/* Kolom Akumulasi Poin */}
                  <td className="p-4 font-bold text-emerald-600">
                    {sedangEdit ? (
                      <input
                        type="number"
                        min="0"
                        value={editForm.poin}
                        onChange={(e) => setEditForm({ ...editForm, poin: e.target.value })}
                        className="w-24 rounded-lg border border-slate-300 px-2.5 py-1 text-sm text-slate-800 bg-white"
                      />
                    ) : (
                      `${s.poin} pts`
                    )}
                  </td>

                  {/* Kolom Aksi (Edit / Simpan / Batal / Hapus) */}
                  <td className="p-4 text-right">
                    <div className="inline-flex items-center gap-1.5">
                      {sedangEdit ? (
                        <>
                          <button
                            type="button"
                            onClick={() => simpanEdit(s.id)}
                            className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
                            title="Simpan perubahan"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setEditId(null)}
                            className="p-2 rounded-lg bg-slate-200 text-slate-700 hover:bg-slate-300"
                            title="Batal"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() => mulaiEdit(s)}
                            className="p-2 rounded-lg text-blue-600 hover:bg-blue-50"
                            title="Edit siswa"
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => hapusSiswa(s.id)}
                            className="p-2 rounded-lg text-rose-500 hover:bg-rose-50"
                            title="Hapus siswa"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
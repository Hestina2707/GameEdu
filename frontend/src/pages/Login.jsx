import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/login", form);
      localStorage.setItem("gameedu_token", res.data.token);
      localStorage.setItem("gameedu_user", JSON.stringify(res.data.user));
      navigate("/guru");
    } catch (err) {
      setError(err.response?.data?.message || "Gagal login. Cek server backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f6fb] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center">A</div>
          <div>
            <h1 className="font-bold text-slate-900 text-base">ASALink Arena</h1>
            <p className="text-xs text-slate-400">Masuk ke Dashboard Guru</p>
          </div>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-600">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="guru@sekolah.sch.id"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm"
              required
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-2.5 rounded-xl text-sm transition"
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        <p className="text-xs text-center text-slate-500">
          Belum punya akun guru?{" "}
          <Link to="/register" className="text-blue-600 font-semibold hover:underline">
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
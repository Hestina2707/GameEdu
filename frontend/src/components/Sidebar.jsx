import { NavLink } from "react-router-dom";
import { Home, BookOpen, Gamepad2, Users, BarChart3, Monitor, Smartphone, X, LogIn } from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  const menuGuru = [
    { to: "/guru", label: "Beranda", icon: Home, end: true },
    { to: "/guru/bank-soal", label: "Bank Soal", icon: BookOpen },
    { to: "/guru/sesi-game", label: "Sesi Game", icon: Gamepad2 },
    { to: "/guru/kelas", label: "Kelas & Siswa", icon: Users },
    { to: "/guru/laporan", label: "Laporan", icon: BarChart3 },
  ];

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-30 bg-slate-900/50 backdrop-blur-xs lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 p-5 flex flex-col justify-between shrink-0 transform transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-7 px-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center shadow-sm">
                A
              </div>
              <div>
                <h1 className="font-bold text-slate-900 leading-tight text-sm">ASALink Arena</h1>
                <p className="text-[11px] text-slate-400">GameEdu Platform</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 lg:hidden"
              aria-label="Tutup menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-1">
            {menuGuru.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs"
                        : "text-slate-600 hover:bg-slate-50"
                    }`
                  }
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="space-y-3 mt-6">
          <div className="border-t border-slate-100 pt-3 space-y-2">
            <p className="text-[11px] font-semibold text-slate-400 uppercase px-2">Simulasi Layar</p>
            <NavLink
              to="/board"
              onClick={onClose}
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-xl bg-slate-900 text-white hover:bg-slate-800"
            >
              <Monitor className="w-4 h-4 text-orange-400 shrink-0" /> Layar Smartboard
            </NavLink>
            <NavLink
              to="/play"
              onClick={onClose}
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
            >
              <Smartphone className="w-4 h-4 text-emerald-300 shrink-0" /> Mode HP Siswa
            </NavLink>
          </div>

          <div className="bg-teal-700 text-white p-3.5 rounded-2xl space-y-2.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-teal-900 flex items-center justify-center font-bold text-xs shrink-0">
                GR
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold truncate">Guru Pengampu</p>
                <p className="text-[11px] text-teal-100 truncate">Matematika · XI IPA 2</p>
              </div>
            </div>
            <NavLink
              to="/login"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-1.5 bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-semibold py-2 rounded-xl transition"
            >
              <LogIn className="w-3.5 h-3.5" /> Login Akun
            </NavLink>
          </div>
        </div>
      </aside>
    </>
  );
}
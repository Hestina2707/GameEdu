import { NavLink } from "react-router-dom";
import { Home, BookOpen, PlusCircle, Users, BarChart3, Monitor, Smartphone } from "lucide-react";
export default function Sidebar() {
    const menuGuru = [
        { to: "/guru", label: "Beranda", icon: Home, end: true },
        { to: "/guru/bank-soal", label: "Bank Soal", icon: BookOpen },
        { to: "/guru/tambah-soal", label: "Tambah Soal", icon: PlusCircle },
        { to: "/guru/kelas", label: "Kelas & Siswa", icon: Users },
        { to: "/guru/laporan", label: "Laporan", icon: BarChart3 },
    ];
    return (
        <aside className="w-64 bg-white border-r border-slate-200 min-h-screen p-5 flex flex-col justify-between
shrink-0">
            <div>
                <div className="flex items-center gap-3 mb-7 px-2">
                    <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold flex items-center justifycenter shadow-sm">A</div>
                    <div>
                        <h1 className="font-bold text-slate-900 leading-tight text-sm">ASALink Arena</h1>
                        <p className="text-[11px] text-slate-400">GameEdu Platform</p>
                    </div>
                </div>
                <nav className="space-y-1">
                    {menuGuru.map((item) => {
                        const Icon = item.icon;
                        return (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.end}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${isActive
                                        ? "bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs"
                                        : "text-slate-600 hover:bg-slate-50"
                                    }`
                                }
                            >
                                <Icon className="w-4 h-4" />
                                {item.label}
                            </NavLink>
                        );
                    })}
                </nav>
            </div>
            <div className="space-y-3">
                <div className="border-t border-slate-100 pt-3 space-y-2">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase px-2">Simulasi Layar</p>
                    <NavLink to="/board" className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-xl
bg-slate-900 text-white hover:bg-slate-800">
                        <Monitor className="w-4 h-4 text-orange-400" /> Layar Smartboard
                    </NavLink>
                    <NavLink to="/play" className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-xl
bg-indigo-600 text-white hover:bg-indigo-700">
                        <Smartphone className="w-4 h-4 text-emerald-300" /> Mode HP Siswa
                    </NavLink>
                </div>
                <div className="bg-teal-600 text-white p-3.5 rounded-2xl flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-teal-800 flex items-center justify-center font-bold textxs">GR</div>
                    <div className="overflow-hidden">
                        <p className="text-xs font-bold truncate">Guru Pengampu</p>
                        <p className="text-[11px] text-teal-100 truncate">Matematika · XI IPA 2</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
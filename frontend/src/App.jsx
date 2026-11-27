import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "./components/Sidebar";
import BerandaGuru from "./pages/BerandaGuru";
import BankSoal from "./pages/BankSoal";
import TambahSoal from "./pages/TambahSoal";
import KelasSiswa from "./pages/KelasSiswa";
import Laporan from "./pages/Laporan";
import SmartboardView from "./pages/SmartboardView";
import MobilePlay from "./pages/MobilePlay";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SesiGame from "./pages/SesiGame";

function LayoutGuru({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f4f6fb] text-slate-800">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-20 flex items-center justify-between bg-white border-b border-slate-200 px-4 py-3 lg:hidden">
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50"
              aria-label="Buka menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <span className="font-bold text-sm text-slate-900">ASALink Arena</span>
          </div>
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">XI IPA 2</span>
        </header>

        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/guru" replace />} />
        <Route path="/guru" element={<LayoutGuru><BerandaGuru /></LayoutGuru>} />
        <Route path="/guru/bank-soal" element={<LayoutGuru><BankSoal /></LayoutGuru>} />
        <Route path="/guru/tambah-soal" element={<LayoutGuru><TambahSoal /></LayoutGuru>} />
        <Route path="/guru/kelas" element={<LayoutGuru><KelasSiswa /></LayoutGuru>} />
        <Route path="/guru/laporan" element={<LayoutGuru><Laporan /></LayoutGuru>} />
        <Route path="/board" element={<SmartboardView />} />
        <Route path="/play" element={<MobilePlay />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/guru/sesi-game" element={<LayoutGuru><SesiGame /></LayoutGuru>} />
      </Routes>
    </BrowserRouter>
  );
}
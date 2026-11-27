import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import BerandaGuru from "./pages/BerandaGuru";
import BankSoal from "./pages/BankSoal";
import TambahSoal from "./pages/TambahSoal";
import KelasSiswa from "./pages/KelasSiswa";
import Laporan from "./pages/Laporan";
import SmartboardView from "./pages/SmartboardView";
import MobilePlay from "./pages/MobilePlay";
function LayoutGuru({ children }) {
  return (
    <div className="flex min-h-screen bg-[#f4f6fb] text-slate-800">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">{children}</main>
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
      </Routes>
    </BrowserRouter>
  );
}

"use client";

import Link from "next/link";
import {
  FileText,
  LogOut,
  Home,
  Languages,
  ShieldAlert,
  Library,
} from "lucide-react";
import { logout } from "@/app/lib/auth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-screen min-h-screen bg-slate-100 ">
      {/* SIDEBAR */}
      <aside className="w-[320px] shrink-0 bg-white flex flex-col">
        <div className="h-20 flex items-center px-8 text-2xl font-bold">
          OsonHuquq
        </div>

        <nav className="px-4 space-y-2 flex-1">
          <Link
            href="/dashboard"
            className="flex items-center justify-start px-6 py-4 rounded-xl hover:bg-indigo-50"
          >
            <Home className="w-5 h-5 mr-2" />
            Asosiy
          </Link>
          <Link
            href="/dashboard/generate"
            className="px-6 py-4 rounded-xl hover:bg-indigo-50 flex items-center justify-start"
          >
            <FileText className="w-5 h-5 mr-2" />
            AI Document Generator
          </Link>
          <Link
            href="/dashboard/simplify"
            className="px-6 py-4 rounded-xl hover:bg-indigo-50 flex items-center justify-start"
          >
            <Languages className="w-5 h-5 mr-2" />
            Oddiy tilga tarjima
          </Link>
          <Link
            href="/dashboard/risk"
            className="px-6 py-4 rounded-xl hover:bg-indigo-50 flex items-center justify-start"
          >
            <ShieldAlert className="w-5 h-5 mr-2" />
            Risk Detector
          </Link>
          <Link
            href="/dashboard/templates"
            className="px-6 py-4 rounded-xl hover:bg-indigo-50 flex items-center justify-start"
          >
            <Library className="w-5 h-5 mr-2" />
            Shablon Kutubxonasi
          </Link>
        </nav>

        {/* Logout tugmasi eng pastda */}
        <div className="p-6 my-auto">
          <button
            onClick={logout}
            className="w-full px-8 py-4 rounded-xl bg-red-100 text-red-600 flex justify-start items-center cursor-pointer"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 w-full min-h-screen overflow-x-auto">
        <div className="w-full min-h-screen p-10">{children}</div>
      </main>
    </div>
  );
}

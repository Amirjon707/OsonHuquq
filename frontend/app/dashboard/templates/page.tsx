"use client";

const templates = [
  "Ijara shartnomasi",
  "Ishga qabul arizasi",
  "Shikoyat arizasi",
  "Da’vo arizasi",
];

export default function TemplatesPage() {
  return (
    <div className="p-8 min-h-screen bg-slate-50">
      <h1 className="text-2xl font-bold mb-6">Shablon kutubxonasi (Basic)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((t, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

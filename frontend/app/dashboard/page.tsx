"use client";

import { useState, useEffect } from "react";
import { generateAI } from "@/app/services/ai.service";
import { logout, getToken } from "@/app/lib/auth";
import Input from "@/app/components/common/Input";
import Button from "@/app/components/ui/Button";

export default function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (!getToken()) window.location.href = "/(auth)/login";
  }, []);

  const submit = async () => {
    try {
      const res = await generateAI(prompt);
      setResult(res.data.result);
    } catch (err) {
      alert(`AI error ${err}`);
    }
  };

  return (
    <div className="p-10 space-y-4">
      <Button variant="secondary" onClick={logout}>Logout</Button>
      <Input placeholder="AI ga savol berish..." value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <Button onClick={submit}>Generate</Button>
      <pre className="bg-white p-4 rounded">{result}</pre>
    </div>
  );
}

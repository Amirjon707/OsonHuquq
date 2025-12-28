"use client";

import { useState } from "react";
import { login } from "@/app/services/auth.service";
import { saveToken } from "@/app/lib/auth";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/common/Input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    try {
      const res = await login({ email, password });
      saveToken(res.data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      alert(`Login error ${err}`);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-white p-6 rounded w-80 space-y-4">
        <h1 className="text-xl font-bold">Login</h1>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={submit}>Login</Button>
      </div>
    </div>
  );
}

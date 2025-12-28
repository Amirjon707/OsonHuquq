"use client";

import { useState } from "react";
import { register } from "@/app/services/auth.service";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/common/Input";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submit = async () => {
    try {
      await register({ name, email, password });
      alert("Ro‘yxatdan o‘tildi. Kirish sahifasiga o‘ting.");
      window.location.href = "/login";
    } catch (err) {
      alert(`Register error ${err}`);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-white p-6 rounded w-80 space-y-4">
        <h1 className="text-xl font-bold">Register</h1>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={submit}>Register</Button>
      </div>
    </div>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({ variant = "primary", ...props }: ButtonProps) {
  const base = "px-4 py-2 rounded font-semibold";
  const style =
    variant === "primary" ? "bg-black text-white" : "border text-black";
  return <button className={`${base} ${style}`} {...props} />;
}

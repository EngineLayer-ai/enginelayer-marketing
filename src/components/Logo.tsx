import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="EngineLayer"
      width={800}
      height={301}
      className="h-10 w-auto"
      priority
    />
  );
}

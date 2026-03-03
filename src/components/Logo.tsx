import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="EngineLayer"
      width={2194}
      height={827}
      className="h-10 w-auto"
      priority
    />
  );
}

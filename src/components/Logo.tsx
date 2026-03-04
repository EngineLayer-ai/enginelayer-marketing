import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="EngineLayer"
      width={400}
      height={150}
      className="h-14 w-auto"
      priority
    />
  );
}

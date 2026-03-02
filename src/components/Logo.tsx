export function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Simple "layered E" mark */}
      <div className="relative h-6 w-6">
        <span className="absolute inset-x-0 top-0 h-1.5 rounded-sm bg-emerald-500" />
        <span className="absolute inset-x-1 top-2 h-1.5 rounded-sm bg-emerald-400" />
        <span className="absolute inset-x-2 top-4 h-1.5 rounded-sm bg-emerald-300" />
      </div>
      <span className="text-base font-semibold tracking-tight">
        Engine<span className="text-emerald-400">Layer</span>
      </span>
    </div>
  );
}

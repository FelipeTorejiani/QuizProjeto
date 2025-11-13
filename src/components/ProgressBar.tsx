interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden border border-slate-700 shadow-inner">
      <div
        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 ease-out relative overflow-hidden"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
      </div>
    </div>
  );
};

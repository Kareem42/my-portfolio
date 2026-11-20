import { PHOTOS, type PhotoId, type PhotoSlot } from "@/content/photos";
import { cn } from "@/lib/utils";

interface PhotoFrameProps {
  id: PhotoId;
  className?: string;
}

export const PhotoFrame = ({ id, className }: PhotoFrameProps) => {
  const photo: PhotoSlot = PHOTOS[id];

  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-2xl border border-indigo-400/25 bg-indigo-950 shadow-[0_20px_60px_-30px_rgba(79,70,229,0.8)]",
        className,
      )}
      style={{ aspectRatio: photo.aspect }}
    >
      {photo.src ? (
        <img
          src={photo.src}
          alt={photo.alt}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col justify-end bg-[radial-gradient(circle_at_20%_15%,rgba(129,140,248,0.55),transparent_42%),linear-gradient(160deg,#1e1b4b_0%,#312e81_48%,#581c87_100%)] p-4">
          <div className="pointer-events-none absolute inset-6 rounded-xl border border-white/15" />
          <p className="relative text-[10px] font-mono uppercase tracking-[0.22em] text-indigo-100/70">
            Photo needed
          </p>
          <p className="relative mt-1 max-w-[18rem] font-mono text-sm leading-snug text-white">
            {photo.label}
          </p>
        </div>
      )}
    </figure>
  );
};

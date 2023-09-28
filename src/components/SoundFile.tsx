import type { CanPlayElement as CanPlayElementType } from "@playhtml/react";
import dynamic from "next/dynamic";
import { useRef } from "react";
const CanPlayElement = dynamic(
  () => import("@playhtml/react").then((c) => c.CanPlayElement),
  { ssr: false }
) as typeof CanPlayElementType;

export function SoundFile({ soundUrl }: { soundUrl: string }) {
  const ref = useRef<HTMLAudioElement>(null);
  return (
    <CanPlayElement defaultData={{ isPlaying: false }}>
      {({ data: { isPlaying }, setData }) => {
        if (isPlaying) {
          ref.current?.play();
        } else if (!isPlaying) {
          ref.current?.pause();
        }
        return (
          <audio
            id="sound-file"
            ref={ref}
            className="sound-file"
            selector-id=".sound-file"
            controls
            src={soundUrl}
            loop
            autoPlay={isPlaying}
            onPlay={() => setData({ isPlaying: true })}
          />
        );
      }}
    </CanPlayElement>
  );
}

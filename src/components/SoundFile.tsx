import { CanPlayElement } from "@playhtml/react";

export function SoundFile({ soundUrl }: { soundUrl: string }) {
  return (
    <CanPlayElement defaultData={{ isPlaying: false }}>
      {({ data: { isPlaying }, setData }) => (
        <>
          <audio
            controls
            src={soundUrl}
            loop
            autoPlay={isPlaying}
            onPlay={() => setData({ isPlaying: true })}
          />
        </>
      )}
    </CanPlayElement>
  );
}

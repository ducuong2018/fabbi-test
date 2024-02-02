// track.interface.ts

export interface Track {
  id: string;
  name: string;
  artistId: string | null;
  albumId: string | null;
  duration: number;
}

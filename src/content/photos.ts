import heroPortrait from "@/assets/heroPic.png";

export type PhotoAspect = "4 / 5" | "3 / 2" | "1 / 1" | "16 / 9" | "2 / 1";

export interface PhotoSlot {
  id: string;
  label: string;
  alt: string;
  aspect: PhotoAspect;
  /** Set to a public path or imported URL to replace the placeholder. */
  src?: string;
}

export const PHOTOS = {
  hero: {
    id: "hero",
    label: "Portrait, chest-up, dark background",
    alt: "Illustration of Justin Alcendor at his workstation",
    aspect: "4 / 5",
    src: heroPortrait,
  },
  working: {
    id: "working",
    label: "At a desk or laptop, 3:2",
    alt: "Justin Alcendor working",
    aspect: "3 / 2",
  },
  court: {
    id: "court",
    label: "On the court or with Build and Ball",
    alt: "Justin Alcendor on the basketball court",
    aspect: "3 / 2",
  },
  chester: {
    id: "chester",
    label: "Chester, the chihuahua",
    alt: "Chester the chihuahua",
    aspect: "1 / 1",
  },
  "project-learning-center": {
    id: "project-learning-center",
    label: "Dallas Learning Center screenshot",
    alt: "Dallas Learning Center product still",
    aspect: "16 / 9",
  },
  "project-sentinel": {
    id: "project-sentinel",
    label: "Sentinel dashboard screenshot",
    alt: "Sentinel API Dashboard product still",
    aspect: "16 / 9",
  },
  "project-banking": {
    id: "project-banking",
    label: "Banking App screenshot",
    alt: "Banking App product still",
    aspect: "16 / 9",
  },
  "project-wired": {
    id: "project-wired",
    label: "Wired! Audio and Media screenshot",
    alt: "Wired Audio and Media product still",
    aspect: "16 / 9",
  },
  "place-lafayette": {
    id: "place-lafayette",
    label: "Lafayette, wide crop",
    alt: "Lafayette, Louisiana",
    aspect: "2 / 1",
  },
  "place-dallas": {
    id: "place-dallas",
    label: "Dallas, wide crop",
    alt: "Dallas, Texas",
    aspect: "2 / 1",
  },
} as const satisfies Record<string, PhotoSlot>;

export type PhotoId = keyof typeof PHOTOS;

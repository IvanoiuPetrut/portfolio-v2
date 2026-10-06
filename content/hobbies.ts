import { AudioLines, Cpu, Footprints, Gamepad2, Pencil, Shapes } from "lucide-react";
import type { Hobby } from "./types";

export const hobbies = [
  { label: "Drawing", detail: "Sketching and painting", icon: Pencil },
  { label: "Running", detail: "Away from the screen", icon: Footprints },
  { label: "Making games", detail: "Side projects and game jams", icon: Gamepad2 },
  { label: "2D and 3D art", detail: "Pixels, models and everything between", icon: Shapes },
  { label: "Sound and music", detail: "Sound effects and soundtracks", icon: AudioLines },
  { label: "Tinkering", detail: "Anything tech-related", icon: Cpu },
] as const satisfies readonly Hobby[];

import { Footprints, Gamepad2, PenTool, Server, Shapes, Wrench } from "lucide-react";
import type { Hobby } from "./types";

export const hobbies = [
  { label: "Drawing", detail: "Landscapes, urban sketches and portraits, on tablet, iPad or in ink", icon: PenTool },
  { label: "Pixel art and 3D", detail: "Sprites in Aseprite now and then, and models in Blender", icon: Shapes },
  {
    label: "Making games",
    detail: "Game jams, like the award-winning Chrono Switch",
    icon: Gamepad2,
    href: "/projects/chrono-switch",
  },
  { label: "3D printing", detail: "FreeCAD fixes for drawers, my old Suzuki GS 500 and cats that switch off my PC", icon: Wrench },
  { label: "Home server", detail: "A Raspberry Pi under my desk, in a case and mounts I designed and printed", icon: Server },
  { label: "Running", detail: "5 to 10 km when I feel like it, 30 to 40 km a month", icon: Footprints },
] as const satisfies readonly Hobby[];

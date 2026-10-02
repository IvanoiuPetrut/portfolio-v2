import { Bike, Camera, ChefHat, Mountain } from "lucide-react";
import type { Hobby } from "./types";

export const hobbies = [
  { label: "Hiking", detail: "Carpathian ridges", icon: Mountain },
  { label: "Cycling", detail: "Weekend gravel loops", icon: Bike },
  { label: "Film photography", detail: "35mm, mostly street", icon: Camera },
  { label: "Cooking", detail: "Slow-cooked anything", icon: ChefHat },
] as const satisfies readonly Hobby[];

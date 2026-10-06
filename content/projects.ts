import type { Project } from "./types";
import audioVideoCover from "./projects/covers/audio-video-processing.webp";
import chronoSwitchCover from "./projects/covers/chrono-switch.webp";
import gameShelfCover from "./projects/covers/game-shelf.webp";
import hangoutCover from "./projects/covers/hangout.webp";
import omniFoodCover from "./projects/covers/omni-food.webp";
import paintCloneCover from "./projects/covers/paint-clone.webp";
import prmptingCover from "./projects/covers/prmpting-concept-art.webp";
import snapCover from "./projects/covers/snap.webp";
import weatherCover from "./projects/covers/weather-app.webp";

// Each slug needs a matching body at content/projects/<slug>.mdx.
export const projects = [
  {
    slug: "hangout",
    title: "Hangout",
    kind: "Web app",
    summary: "A chat app with direct messages and peer-to-peer audio and video channels.",
    stack: ["Vue", "TypeScript", "Express", "WebRTC", "WebSockets", "S3", "Cognito", "Amplify", "Docker"],
    tone: "mustard",
    links: [
      { label: "Demo", href: "https://www.youtube.com/watch?v=HNb0TTiL960", kind: "demo" },
      { label: "Front end", href: "https://github.com/IvanoiuPetrut/hangout-front-end", kind: "repo" },
      { label: "Back end", href: "https://github.com/IvanoiuPetrut/hangout-backend", kind: "repo" },
    ],
    cover: hangoutCover,
  },
  {
    slug: "weather-app",
    title: "Weather App",
    kind: "Web app",
    summary: "Search for any city and see its current weather, a three-day outlook and an hourly forecast.",
    stack: ["Vue", "Vuex", "Axios", "SASS"],
    tone: "tangerine",
    links: [
      { label: "Live", href: "https://weather.petrut.dev/", kind: "live" },
      { label: "GitHub", href: "https://github.com/IvanoiuPetrut/weather-app", kind: "repo" },
    ],
    cover: weatherCover,
  },
  {
    slug: "chrono-switch",
    title: "Chrono Switch",
    kind: "Game",
    summary: "A 2D pixel art platformer where you control time to reveal hidden paths. Award-winning at GameDev.js Jam 2024.",
    year: 2024,
    stack: ["JavaScript", "Phaser"],
    tone: "forest",
    links: [
      { label: "Play", href: "https://twistke.itch.io/chrono-switch", kind: "live" },
      { label: "GitHub", href: "https://github.com/IvanoiuPetrut/gamedevjs-gamejam-2k24", kind: "repo" },
    ],
    cover: chronoSwitchCover,
  },
  {
    slug: "prmpting-concept-art",
    title: "Prmpting Concept Art",
    kind: "Web app",
    summary: "Describe an image in a prompt, get concept art back, then refine parts of it with new prompts.",
    stack: ["Vue", "Axios", "Node.js", "AWS"],
    tone: "mustard",
    links: [
      { label: "Demo", href: "https://www.youtube.com/watch?v=2rP7MsklN4w", kind: "demo" },
      { label: "GitHub", href: "https://github.com/IvanoiuPetrut/prompting-concept-art", kind: "repo" },
    ],
    cover: prmptingCover,
  },
  {
    slug: "game-shelf",
    title: "Game Shelf",
    kind: "Web app",
    summary: "Search for video games and browse their details, powered by the RAWG database.",
    stack: ["Vue", "Pinia", "Axios", "SASS"],
    tone: "tangerine",
    links: [
      { label: "Live", href: "https://game-shelf.petrut.dev/", kind: "live" },
      { label: "GitHub", href: "https://github.com/IvanoiuPetrut/game-shelf-client", kind: "repo" },
    ],
    cover: gameShelfCover,
  },
  {
    slug: "omni-food",
    title: "Omni Food",
    kind: "Static website",
    client: "Course assignment",
    summary: "A responsive landing page for a fictional meal-delivery start-up.",
    stack: ["HTML", "CSS"],
    tone: "forest",
    links: [
      { label: "Live", href: "https://ivanoiupetrut.github.io/Omni-Food/", kind: "live" },
      { label: "GitHub", href: "https://github.com/IvanoiuPetrut/Omni-Food", kind: "repo" },
    ],
    cover: omniFoodCover,
  },
  {
    slug: "snap",
    title: "Snap",
    kind: "Static website",
    client: "Frontend Mentor challenge",
    summary: "A responsive landing page for a fictional remote-work start-up, expanded from a hero-only challenge.",
    stack: ["HTML", "CSS"],
    tone: "mustard",
    links: [
      { label: "Live", href: "https://ivanoiupetrut.github.io/snap-find-remote-work/", kind: "live" },
      { label: "GitHub", href: "https://github.com/IvanoiuPetrut/snap-find-remote-work/", kind: "repo" },
    ],
    cover: snapCover,
  },
  {
    slug: "audio-video-processing",
    title: "Audio-video Processing",
    kind: "Windows app",
    summary: "A desktop tool that loads video or audio files and applies effects like gamma correction, on a region of interest for video.",
    stack: ["C#", "EmguCV", "NAudio"],
    tone: "tangerine",
    links: [
      { label: "Demo", href: "https://www.youtube.com/watch?v=2WkaNH3bdeQ", kind: "demo" },
      { label: "GitHub", href: "https://github.com/IvanoiuPetrut/audio-video-processing", kind: "repo" },
    ],
    cover: audioVideoCover,
  },
  {
    slug: "paint-clone",
    title: "Paint Clone",
    kind: "Windows app",
    summary: "A Paint-style drawing app with the classic tools plus a few extras, written in C# with an emphasis on OOP.",
    stack: ["C#"],
    tone: "forest",
    links: [
      { label: "Demo", href: "https://www.youtube.com/watch?v=l9zgRJr-77I", kind: "demo" },
      { label: "GitHub", href: "https://github.com/IvanoiuPetrut/Paint-Clone", kind: "repo" },
    ],
    cover: paintCloneCover,
  },
] as const satisfies readonly Project[];

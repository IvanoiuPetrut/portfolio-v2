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

// Each slug needs a matching body at content/projects/<slug>.mdx. Strongest work first.
export const projects = [
  {
    slug: "hangout",
    title: "Hangout",
    kind: "Web app",
    summary: "Real-time chat with direct messages, chat rooms and group video calls over a peer-to-peer WebRTC mesh.",
    year: 2023,
    stack: ["Vue", "TypeScript", "Express", "WebRTC", "WebSockets", "Prisma", "S3", "Cognito", "Amplify", "Docker"],
    tone: "mustard",
    links: [
      { label: "Demo", href: "https://www.youtube.com/watch?v=HNb0TTiL960", kind: "demo" },
      { label: "Front end", href: "https://github.com/IvanoiuPetrut/hangout-front-end", kind: "repo" },
      { label: "Back end", href: "https://github.com/IvanoiuPetrut/hangout-backend", kind: "repo" },
    ],
    cover: hangoutCover,
  },
  {
    slug: "chrono-switch",
    title: "Chrono Switch",
    kind: "Game",
    summary: "A pixel art platformer where you shift time to reveal hidden paths. Award winner at GameDev.js Jam 2024, out of over 200 entries.",
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
    summary: "Type a prompt and get concept art back, then refine any part of the image with a new prompt.",
    year: 2023,
    stack: ["Vue", "Axios", "Node.js", "AWS", "OpenAI API"],
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
    summary: "Search for video games and browse them by developer or publisher, powered by the RAWG database.",
    year: 2022,
    stack: ["Vue", "Pinia", "Axios", "SASS"],
    tone: "tangerine",
    links: [
      { label: "Live", href: "https://game-shelf.petrut.dev/", kind: "live" },
      { label: "GitHub", href: "https://github.com/IvanoiuPetrut/game-shelf-client", kind: "repo" },
    ],
    cover: gameShelfCover,
  },
  {
    slug: "weather-app",
    title: "Weather App",
    kind: "Web app",
    client: "Graffino",
    role: "Front-end developer",
    summary: "Search any city for its current weather, a three-day outlook and an hourly forecast, with saved favourites.",
    year: 2022,
    stack: ["Vue", "Vuex", "Axios", "SASS"],
    tone: "tangerine",
    links: [
      { label: "Live", href: "https://weather.petrut.dev/", kind: "live" },
      { label: "GitHub", href: "https://github.com/IvanoiuPetrut/weather-app", kind: "repo" },
    ],
    cover: weatherCover,
  },
  {
    slug: "snap",
    title: "Snap",
    kind: "Static website",
    client: "Frontend Mentor challenge",
    year: 2022,
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
    slug: "omni-food",
    title: "Omni Food",
    kind: "Static website",
    client: "Course assignment",
    year: 2022,
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
    slug: "audio-video-processing",
    title: "Audio-video Processing",
    kind: "Windows app",
    year: 2023,
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
    year: 2022,
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

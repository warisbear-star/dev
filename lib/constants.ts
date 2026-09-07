export const SITE_NAME = "ทักษะเทคโนโลยีสารสนเทศ";
export const SITE_DESCRIPTION =
  "แผนที่ความรู้แบบโต้ตอบสำหรับเรียนรู้เทคโนโลยีสารสนเทศ ตั้งแต่พื้นฐานจนถึงแนวคิดขั้นสูง";

export const NAV_LINKS = [
  { href: "/", label: "สำรวจ" },
  { href: "/learn", label: "เส้นทางเรียนรู้" },
  { href: "/decide", label: "ช่วยเลือก" },
  { href: "/quiz", label: "แบบทดสอบ" },
  { href: "/concepts", label: "แนวคิดทั้งหมด" },
  { href: "/compare", label: "เปรียบเทียบ" },
  { href: "/visualize", label: "ภาพเคลื่อนไหว" },
  { href: "/scenarios", label: "สถานการณ์" },
  { href: "/graph", label: "แผนผังความรู้" },
] as const;

export const POPULAR_CONCEPT_SLUGS = [
  "git",
  "http",
  "dhcp",
  "curl",
  "data-structure",
  "jwt",
  "docker",
  "api",
  "dns",
  "sql",
  "authentication",
  "llm",
] as const;

export const CATEGORY_ICONS: Record<string, string> = {
  network: "globe",
  programming: "code",
  database: "database",
  security: "shield",
  ai: "brain",
  cloud: "cloud",
  devops: "settings",
  iot: "radio",
  cli: "terminal",
  "git-github": "git-branch",
  hardware: "cpu",
};

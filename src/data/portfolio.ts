// Edit this file to update your portfolio content and links.

import photoAsset from "@/assets/anga-jonas-professional.png.asset.json";

export const profile = {
  name: "Anga Jonas",
  role: "Marketing Intern / Practical Trainee",
  location: "Khayelitsha, Cape Town",
  phone: "0679932081",
  phoneDisplay: "067 993 2081",
  personalEmail: "angajonas14@gmail.com",
  workEmail: "anga.jonas@capaciti.org.za",
  githubProfile: "https://github.com/angajonas14-cell",
  linkedinProfile: "https://www.linkedin.com/in/anga-jonas-3a169741b/",

  // Profile photo (CDN asset).
  photo: photoAsset.url,
  // Drop your CV PDF in the public folder (e.g. public/anga-jonas-cv.pdf) and put "/anga-jonas-cv.pdf" here.
  cvFile: "/anga-jonas-cv.pdf",
};

export type Project = {
  title: string;
  blurb: string;
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    title: "Sentiment Insights Lab",
    blurb: "Customer sentiment analysis dashboard that turns feedback into clear signals.",
    liveUrl: "https://sentimentlab-ziwexqtc.manus.space",
    githubUrl: "https://sentimentlab-ziwexqtc.manus.space",
  },
  {
    title: "Healthy Lifestyle",
    blurb: "A wellness chat companion offering friendly, practical health guidance.",
    liveUrl: "https://badgers-wellness-chat--unathimatshini.replit.app",
    githubUrl: "https://badgers-wellness-chat--unathimatshini.replit.app",
  },
  {
    title: "Coffee Shop Chatbot",
    blurb: "A local coffee shop assistant that answers orders and menu questions.",
    liveUrl: "https://coffeeshop-k14n.bolt.host",
    githubUrl: "https://coffeeshop-k14n.bolt.host",
  },
  {
    title: "Career Match",
    blurb: "A career-match flow that connects prompts to the right opportunities.",
    liveUrl: "https://prompt-career-match-flow.base44.app",
    githubUrl: "https://prompt-career-match-flow.base44.app",
  },
];

export const skills = [
  { title: "Computer literacy", detail: "Comfortable across everyday tools and quick to learn new software." },
  { title: "Excellent communication", detail: "Clear in writing and in person, whether explaining or listening." },
  { title: "Works well under pressure", detail: "Stays steady and focused when the deadline closes in." },
  { title: "Strong time management", detail: "Plans ahead and keeps commitments without dropping the ball." },
];

export const education = [
  {
    period: "2025 Jan – 2026 Jun",
    school: "Northlink TVET College",
    detail: "Marketing Management N6.",
  },
  {
    period: "2019 – 2023",
    school: "Zonnebloeom High School",
    detail: "Completed Matric.",
  },
];

export type Qualification = {
  title: string;
  detail: string;
  certificateUrl?: string; // optional link to certificate / credential
};

export const qualifications: Qualification[] = [
  { title: "Matric", detail: "National Senior Certificate." },
  { title: "Marketing Management N6", detail: "Northlink TVET College." },
  {
    title: "Google Essentials Certificate",
    detail: "Foundations of digital marketing.",
    certificateUrl:
      "https://www.coursera.org/programs/mict-tvet-august-2026-0bkt0/my-learning?myLearningTab=IN_PROGRESS",
  },
  {
    title: "Artificial Intelligence Bootcamp",
    detail: "Practical intro to applied AI tools.",
    certificateUrl:
      "https://www.coursera.org/programs/mict-tvet-august-2026-0bkt0/my-learning?myLearningTab=COMPLETED",
  },
];

// Edit this file to update your portfolio content and links.

import photoAsset from "@/assets/anga-jonas.jpg.asset.json";

export const profile = {
  name: "Anga Jonas",
  role: "Marketing Intern / Practical Trainee",
  location: "Khayelitsha, Cape Town",
  phone: "0679932081",
  phoneDisplay: "067 993 2081",
  personalEmail: "angajonas14@gmail.com",
  workEmail: "anga.jonas@capaciti.org.za",
  githubProfile: "https://github.com/angajonas14-cell",
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
    title: "Sentiment 360",
    blurb: "Customer sentiment analysis dashboard that turns feedback into clear signals.",
    liveUrl: "https://customer-sentiment-d-zp3n.bolt.host",
    githubUrl: "https://customer-sentiment-d-zp3n.bolt.host",
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
    liveUrl: "https://local-coffee-shop-so-yxwi.bolt.host",
    githubUrl: "https://local-coffee-shop-so-yxwi.bolt.host",
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

export const qualifications = [
  { title: "Matric", detail: "National Senior Certificate." },
  { title: "Marketing Management N6", detail: "Northlink TVET College." },
  { title: "Google Essentials Certificate", detail: "Foundations of digital marketing." },
  { title: "Artificial Intelligence Bootcamp", detail: "Practical intro to applied AI tools." },
];

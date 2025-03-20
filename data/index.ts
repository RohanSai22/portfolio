// config.ts

import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Innovative Founder/Developer",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate Tech Enthusiast",
    description:
      "Combining frontend, AI/ML, and blockchain expertise to build innovative solutions.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently Building IA-Flow ",
    description: "A Website that makes websites",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's Collaborate",
    description: "Do you want to start a project together?",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Marketplace Object Detection & QC Automation",
    des: "Engineered an advanced computer vision system with 95% accuracy using PyTorch, Ultralytics SAM2, and EfficientNet-B0",
    img: "/flipkart_grid.png",
    iconLists: ["/python.png", "/pytorch.png"],
    link: "https://www.youtube.com/watch?v=in4Dy8uh7A8",
    sourceCode: "https://github.com/RohanSai22/grid-repo",
  },
  {
    id: 2,
    title: "AI-Driven Business Insights Automation",
    des: "An End-to-End pipeline from ingesting public data to getting interactive insights using GPT-4o and Neo4j Knowledge graphs",
    img: "/business_insights.png",
    iconLists: ["/neo4j.png", "/gpt.png", "/python.png"],
    link: "https://github.com/RohanSai22/UNI",
    sourceCode: "https://github.com/RohanSai22/UNI",
  },

  {
    id: 3,
    title: "SolTokenGen",
    des: "Developed a decentralized token generator on the Solana blockchain using Next.js and TypeScript",
    img: "/sol_token.png",
    iconLists: ["/next.png", "/typescript.png", "/solana.png"],
    link: "https://soltokengen.vercel.app",
    sourceCode: "https://github.com/RohanSai22/solanaTokenCreator/",
  },

  {
    id: 4,
    title: "Foundry Fund Me",
    des: "Developed a crowdfunding smart contract using Foundry with local and testnet, integrating zkSync for enhanced scalability.",
    img: "/foundry.png",
    iconLists: ["/solidity.png", "/foundry.png"],
    link: "https://github.com/RohanSai22/Foundry-FundMe-Contract",
    sourceCode: "https://github.com/RohanSai22/Foundry-FundMe-Contract",
  },
  {
    id: 5,
    title: "First DApp",
    des: "Built a minimalistic decentralized application inspired by MetaMask with transaction on local EVM and zkSync networks.",
    img: "/dapp.png",
    iconLists: ["/solidity.png", "/dapp.png"],
    link: "https://github.com/RohanSai22/First-DApp",
    sourceCode: "https://github.com/RohanSai22/First-DApp",
  },

  {
    id: 6,
    title: "Reducing GPU Dependency In LLM’S Through Weight Prediction",
    des: "Optimized large language models by using custom weight prediction to reduce GPU dependency. Predicts weights, biases, and attention parameters with PyTorch and Hugging Face Transformers.",
    img: "/llm.png",
    iconLists: ["/pytorch.png", "/huggingface.png"],
    link: "https://colab.research.google.com/drive/1QhgDMOnkWtarZYQAowTLnremB6H2NyLK?usp=sharing",
    sourceCode:
      "https://colab.research.google.com/drive/1QhgDMOnkWtarZYQAowTLnremB6H2NyLK?usp=sharing",
  },
  {
    id: 7,
    title: "Personalized Learning Platform",
    des: "Non-static learning webpage using Generative AI, boosting learning outcomes by 35% with modules for coding, professional courses, and NotebookLM-like analysis.",
    img: "/learning.png",
    iconLists: ["/react.png", "/streamlit.png"],
    link: "https://rohansai22.github.io/PL/",
    sourceCode: "https://github.com/RohanSai22/PL",
  },
  {
    id: 8,
    title: "Retrieval Non-Augumented Generation (RNAG) For LLMS",
    des: "Introduced an innovative RNAG method that reduced LLM RAM consumption by 80%, optimizing performance for online and offline queries via vector embedding.",
    img: "/rnag.png",
    iconLists: ["/python.png", "/streamlit.png"],
    link: "https://github.com/RohanSai22/rnag",
    sourceCode: "https://github.com/RohanSai22/rnag",
  },

  {
    id: 9,
    title: "Interactive Data Processor",
    des: "A Streamlit-powered tool to clean, preprocess, and visualize data, handling missing values, outliers, and feature scaling.",
    img: "/dataprocess.png",
    iconLists: ["/streamlit.png", "/python.png"],
    link: "https://dataproces.streamlit.app/",
    sourceCode: "https://github.com/RohanSai22/dataprocessor",
  },
  {
    id: 10,
    title: "Data Visualization Dashboard",
    des: "An interactive Streamlit app for real-time visualizations, enabling analysis of trends, correlations, and outliers.",
    img: "/datavisualizer.png",
    iconLists: ["/streamlit.png", "/python.png"],
    link: "https://datavisualizer.streamlit.app/",
    sourceCode: "https://github.com/RohanSai22/datavizualizer",
  },

  {
    id: 11,
    title: "Bloc Sphere Visualizer",
    des: "An interactive tool that visualizes the Bloch Sphere representation of qubits, enhancing the understanding of superposition and quantum states.",
    img: "/blocsphere.png",
    iconLists: ["/quantum.png", "/streamlit.png"],
    link: "https://blocsphere.streamlit.app/",
    sourceCode: "https://github.com/RohanSai22/BlocSphereInteractiveTool",
  },
  {
    id: 12,
    title: "Wave Function Visualizer",
    des: "A dynamic app providing an interactive representation of quantum wave functions to explore probability distributions and state evolution.",
    img: "/wavefunction.png",
    iconLists: ["/quantum.png", "/streamlit.png"],
    link: "https://wavefunctionvisualizer.streamlit.app/",
    sourceCode: "https://github.com/RohanSai22/wavefunctionvisualizer",
  },

  {
    id: 13,
    title: "Public Key Cryptography & Wallet Security",
    des: "An interactive project demonstrating the fundamentals of public key cryptography for secure wallet creation and transaction signing.",
    img: "/pkcrypto.png",
    iconLists: ["/blockchain.png", "/crypto.png"],
    link: "https://hdwallet.streamlit.app/",
    sourceCode: "https://github.com/RohanSai22/hdwallet",
  },
  {
    id: 14,
    title: "Digital Signatures",
    des: "A tool for generating and verifying digital signatures to ensure transaction authenticity within blockchain networks.",
    img: "/digsig.png",
    iconLists: ["/blockchain.png", "/streamlit.png"],
    link: "https://signatureverifier.streamlit.app/",
    sourceCode: "https://github.com/RohanSai22/SignatureVerifier",
  },
] as const;

export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. His enthusiasm for every facet of development truly stands out.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Working with ${links.ownerName} brought innovative solutions and exceptional results. His technical expertise and collaborative spirit elevated our project to new heights.`,
    name: "Sabir",
    title: "Founder, 2gether",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Founder at IAFlow",
    desc: "Transformed ideas into fully functional web apps with one-click deployment using Gemini AI for robust code generation and dynamic conversational history.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI Engineer at Stealth Startup (2gether) 2024",
    desc: "Developed an AI-powered travel planning product with integrated data pipelines and deployed ML models to generate personalized itineraries.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Founder - 120 Days of Learning Series",
    desc: "Launched a comprehensive initiative covering Quantum Computing, Machine Learning, Deep Learning, and Blockchain through interactive projects and demos.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/RohanSai22",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rohan-sai-446a02228",
  },
] as const;

export const techStack = {
  stack1: ["Python", "TypeScript", "Solidity", "Rust", "AI Agents", "Go"],
  stack2: [
    "Next.js",
    "Express.js",
    "Node.js",
    "React",
    "Tailwind CSS",
    "Three.js",
    "Flutter",
    "Vite",
    "C/C++",
  ],
  ai_ml: [
    "PyTorch",
    "TensorFlow",
    "LLMs",
    "Generative AI",
    "NLP",
    "AI Agents",
    "Machine Learning",
    "Deep Learning",
  ],
  blockchain: [
    "Smart Contract Development",
    "DeFi",
    "DApps",
    "Blockchain Integration",
    "Solana Development",
  ],
} as const;

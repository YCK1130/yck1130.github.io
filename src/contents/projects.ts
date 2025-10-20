export const projects = [
    {
        id: "lightdance",
        imgSrc: "/assets/image/projects/lightdance.webp",
        alt: "lightdance",
        projectName: "NTUEE Light Dance",
        title: "Member of Raspberry Pi Team",
        intro:
            "NTUEE Light Dance is a student-initiated large-scale project with over 50 members. " +
            "Its goal is to recreate the breathtaking light dance performances seen on [Britain's Got Talent](https://youtu.be/4IuB0QEVkVM?si=CWtvQKRXEZrGhUPh).\n\n" +
            "The RPi team is responsible for bridging the gap between lighting software and hardware commands, building real-time communication between the framework and the control console, and optimizing lighting control performance and execution logic. " +
            "These aspects are particularly crucial in the resource-constrained embedded architecture.",
        contribution: [
            "Reorganized complex code into modular parts for a CLI tool.",
            "Built an efficient light control system with parallel processing, with 2x frame rate.",
            "Improved data storage, cutting size by 30% compared to original JSON format.",
        ],
        links: [
            {
                name: "YouTube",
                url: "https://youtu.be/HviYqvcldPU",
            },
            {
                name: "GitHub",
                url: "https://github.com/NTUEELightDance/LightDance-RPi",
            },
        ],
        // special: "Special",
    },
    {
        id: "GoogleHPS-Fire_Guardian",
        imgSrc: "/assets/image/projects/googlehps.webp",
        alt: "GoogleHPS-Fire_Guardian",
        projectName: "Fire Guardian",
        title: "Google 2023 Hardware Product Sprint",
        intro:
            "Developed an embedded fire monitoring system with real-time alerts, a Node-RED dashboard, and an MQTT-based sensor network. " +
            "Implemented a routing algorithm, a multi-stage LED guidance system, and a UPS for reliability.",
        contribution: [
            "Designed and built the full-stack monitoring website for real-time fire alerts.",
            "Developed MQTT-based device communication and RPi server management.",
            "Implemented an efficient routing algorithm for emergency guidance.",
        ],
        links: [
            {
                name: "YouTube",
                url: "https://youtu.be/n4am_cvueJw",
            },
            {
                name: "GitHub",
                url: "https://github.com/YCK1130/HPS2023-smoke-detector",
            },
        ],
        // special: "Special",
    },
    {
        id: "DLCV",
        imgSrc: "/assets/image/projects/DLCV.webp",
        alt: "DLCV-Final_Project",
        projectName: "Multimodal Perception and Comprehension in Autonomous Driving",
        title: "NTU CommE5052: Deep Learning for Computer Vision",
        intro: "Developed a 2-stage RAG-enhanced LLaVA system for autonomous driving perception, using segmentation and depth features to improve spatial understanding and scene comprehension",
        contribution: [],
        links: [
            {
                name: "Poster",
                url: "/assets/pdf/DLCV_final_poster.pdf",
            },
            {
                name: "GitHub",
                url: "https://github.com/YCK1130/DLCV-Fall-2024-Final",
            },
        ],
    },
    {
        id: "IEDA",
        imgSrc: "/assets/image/projects/IEDA.webp",
        alt: "IEDA-Final_Project",
        projectName: "Reinforcement Logic Optimization for a General Cost Function",
        title: "NTU EE3012: Introduction to Electronic Design Automation",
        intro:
            "Designed an A2C reinforcement learning framework for logic synthesis using Yosys, " +
            "achieving superior performance over greedy, simulated annealing, and fast simulated annealing via effective state-action modeling and reward engineering",
        contribution: [],
        links: [
            {
                name: "Slide",
                url: "/assets/pdf/IEDA-slide.pdf",
            },
            {
                name: "Essay",
                url: "/assets/pdf/IEDA-essay.pdf",
            },
            {
                name: "GitHub",
                url: "https://github.com/YCK1130/ICCAD-TBD",
            },
        ],
    },
    {
        id: "RL",
        imgSrc: "/assets/image/projects/RL.webp",
        alt: "RL-Final_Project",
        projectName: "Reinforcement Learning for Physically Competitive Sports",
        title: "NTU CommE5069: Reinforcement learning",
        intro:
            "Developed a two-stage curriculum reinforcement learning framework to train competitive fencing humanoid agents",
        contribution: [],
        links: [
            {
                name: "Essay",
                url: "/assets/pdf/RL_report.pdf",
            },
            {
                name: "GitHub",
                url: "https://github.com/YCK1130/IMRL-HF",
            },
        ],
    },
    {
        id: "makentu_web",
        imgSrc: "/assets/image/projects/makentu_web.webp",
        alt: "makentu_web",
        projectName: "MakeNTU Equipment Reservation Website",
        title: "Team Leader",
        intro:
            "A reservation website for Taiwan's largest student-maker hackathon using React, Express, MongoDB, used by over 200 users to book tools and equipment.",
        contribution: [],
        links: [
            {
                name: "YouTube",
                url: "https://youtu.be/XparUhp1hWY",
            },
            {
                name: "GitHub",
                url: "https://github.com/YCK1130/2023makeNTUWPFinalProjectMain",
            },
        ],
    },
    
];

export const publications = [
    {
        imgSrc: "/assets/image/publication/SOF.webp",
        alt: "SOF",
        venue: "ICML Workshop on Building Physically Plausible World Models, 2025",
        title: "Learning Skills from Action-Free Videos",
        authors: [
            "Hung-Chieh Fang*",
            "Kuo-Han Hung*",
            "Chu-Rong Chen",
            "Po-Jung Chou",
            "Chun-Kai Yang",
            "Po-Chen Ko",
            "Yu-Chiang Frank Wang",
            "Yueh-Hua Wu",
            "Min-Hung Chen",
            "Shao-Hua Sun",
        ],
        arxiv: "",
        projectPage: "",
        // code: "",
        paper: "/assets/pdf/sof.pdf",
        abstract: "We proposed a framework to learn reusable skills from action-free videos using optical flow as an action surrogate, "
            + "enabling multitask and long-horizon planning by translating flow-based skill plans into executable actions.",
        // special: "Oral",
    },
    {
        imgSrc: "/assets/image/publication/DIFO.webp",
        alt: "DIFO",
        venue: "NeurIPS, 2024",
        title: "Diffusion Imitation from Observation",
        authors: ["Bo-Ruei Huang", "Chun-Kai Yang", "Chun-Mao Lai", "Dai-Jie Wu", "Shao-Hua Sun"],
        arxiv: "https://arxiv.org/abs/2410.05429",
        projectPage: "https://nturobotlearninglab.github.io/DIFO/",
        // code: "",
        paper: "https://arxiv.org/pdf/2410.05429",
        abstract:
            "We proposed a learning from observation framework, DIFO, that integrates diffusion models to model state transitions and provide robust rewards to improve policy learning without action labels, "
            + "demonstrating superior performance and data efficiency over existing methods in various control tasks.",
        // special: "Oral",
    },
];

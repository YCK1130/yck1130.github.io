export const projects = [
    {
        id: "lightdance",
        imgSrc: "/assets/projects/lightdance.webp",
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
                url: "https://www.youtube.com/watch?v=HviYqvcldPU",
            },
            {
                name: "GitHub",
                url: "https://github.com/NTUEELightDance/LightDance-RPi",
            },
        ],
        // special: "Special",
    },
];

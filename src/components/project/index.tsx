import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import "../../styles/truncated.css";
import { Paragraph } from "../Markdown";
import TruncatedText from "../TruncatedText";
import { ProjectHeader } from "./ProjectHeader";
import { ProjectImage } from "./ProjectImage";
import { ProjectSection } from "./ProjectSection";

export interface ProjectProps {
    id?: string;
    imgSrc?: string;
    alt?: string;
    projectName: string;
    title?: string;
    special?: string;
    intro: string;
    contribution: string[];
    links: { name: string; url: string }[];
}

export default function Project(props: ProjectProps) {
    const { isDark } = useTheme();
    const [introExpanded, setIntroExpanded] = useState(false);
    const [contribExpanded, setContribExpanded] = useState(false);

    function toggleIntro() {
        setIntroExpanded((prev) => !prev);
    }

    function toggleContrib() {
        setContribExpanded((prev) => !prev);
    }

    return (
        <div
            id={props.id}
            className="flex w-full rounded-lg py-5 px-5 md:gap-5 md:flex-row max-md:flex-col max-md:gap-0"
        >
            <ProjectImage imgSrc={props.imgSrc} alt={props.alt} />
            <div className="w-full">
                <ProjectHeader
                    projectName={props.projectName}
                    title={props.title}
                    special={props.special}
                    links={props.links}
                    isDark={isDark}
                />
                <ProjectSection
                    title="Introduction"
                    expanded={introExpanded}
                    canFold={true}
                    toggle={toggleIntro}
                >
                    {introExpanded ? (
                        <Paragraph id={`${props.projectName}-intro`} className="text-base">
                            {props.intro}
                        </Paragraph>
                    ) : (
                        <TruncatedText text={props.intro} />
                    )}
                </ProjectSection>
                <ProjectSection
                    title="Contribution"
                    expanded={contribExpanded}
                    canFold={true}
                    toggle={toggleContrib}
                >
                    <ul className="list-disc pl-5">
                        {contribExpanded ? (
                            props.contribution.map((c, idx) => (
                                <li>
                                    <Paragraph
                                        key={idx}
                                        className="text-base"
                                        id={`${props.projectName}-contrib-${idx}`}
                                    >
                                        {c}
                                    </Paragraph>
                                </li>
                            ))
                        ) : (
                            <li>
                                <TruncatedText text={props.contribution[0]} />
                            </li>
                        )}
                    </ul>
                </ProjectSection>
            </div>
        </div>
    );
}

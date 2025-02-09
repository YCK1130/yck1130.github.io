import React, { useCallback, useMemo, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import "../styles/truncated.css";
import { NewTabLink, Paragraph } from "./Markdown";
import Triangle from "./Triangle";
import TruncatedText from "./TruncatedText";

interface LinkProps {
    name: string;
    url: string;
}

// -------------------- Subcomponents --------------------

interface ProjectImageProps {
    imgSrc?: string;
    alt?: string;
}

function ProjectImage({ imgSrc, alt }: ProjectImageProps) {
    return (
        <div className="flex flex-col justify-center content-center items-center md:w-[38%]">
            <img
                className="rounded-lg"
                style={{
                    width: "100%",
                    maxWidth: "200px",
                    minWidth: "96px",
                    maxHeight: "200px",
                    minHeight: "96px",
                }}
                src={imgSrc}
                alt={alt}
            />
        </div>
    );
}

interface ProjectLinksProps {
    links: LinkProps[];
    title?: string;
    isDark: boolean;
}
interface LinkElemProps {
    link: LinkProps;
    index: number;
    isDark: boolean;
    title?: string;
}

const LinkElem = React.memo(
    ({ link, index, isDark, title }: LinkElemProps) => {
        let content: React.ReactNode = link.name;
        if (link.name === "YouTube") {
            content = (
                <img
                    className="logo size-6 youtube"
                    src={`youtube-${isDark ? "white" : "black"}.png`}
                    alt="youtube"
                />
            );
        } else if (link.name === "GitHub") {
            content = (
                <img
                    className="logo size-5 github"
                    src={`github-mark-${isDark ? "white" : "black"}.svg`}
                    alt="github"
                />
            );
        }

        return (
            <NewTabLink href={link.url} key={`${title}-link-${index}`} className="text-sm">
                {content}
            </NewTabLink>
        );
    },
    (prevProps, nextProps) =>
        prevProps.link.name === nextProps.link.name &&
        prevProps.link.url === nextProps.link.url &&
        prevProps.index === nextProps.index &&
        prevProps.isDark === nextProps.isDark &&
        prevProps.title === nextProps.title
);

function ProjectLinks({ links, title, isDark }: ProjectLinksProps) {
    return (
        <>
            {links.map((link, index) => (
                <React.Fragment key={index}>
                    {index > 0 && " / "}
                    <span>
                        <LinkElem link={link} index={index} isDark={isDark} title={title} />
                    </span>
                </React.Fragment>
            ))}
        </>
    );
}

interface ProjectHeaderProps {
    projectName: string;
    title?: string;
    special?: string;
    links: LinkProps[];
    isDark: boolean;
}

function ProjectHeader({ projectName, title, special, links, isDark }: ProjectHeaderProps) {
    return (
        <div className="text-left w-full">
            <div className="place-content-start pt-2 px-2">
                <div className="text-2xl inline">{projectName}</div>
                <div className="text-sm inline">{special ? ` (${special})` : ""}</div>
            </div>
            <div className="flex flex-row px-2 justify-between">
                {title && (
                    <div className="place-content-start">
                        <div className="text-sm">{title}</div>
                    </div>
                )}
                <div className="flex flex-row pb-2 justify-evenly gap-1 items-center ">
                    <ProjectLinks links={links} title={title} isDark={isDark} />
                </div>
            </div>
        </div>
    );
}

interface ProjectSectionProps {
    title: string;
    expanded: boolean;
    canFold: boolean;
    toggle: () => void;
    children?: JSX.Element;
}

function ProjectSection({ title, expanded, canFold, toggle, children }: ProjectSectionProps) {
    return (
        <div
            className={`col-span-5 text-justify py-2 group ${canFold ? "hoverBlock" : "px-2"}`}
            onClick={toggle}
        >
            <div className="grid grid-cols-2">
                <div className="text-xl col-span-1">{title}</div>
                <Triangle
                    up={expanded}
                    className={
                        "col-span-1 ml-auto " +
                        (canFold ? "opacity-25 group-hover:opacity-100" : "invisible")
                    }
                />
            </div>
            {children}
        </div>
    );
}

interface ProjectIntroProps {
    id?: string;
    intro: string;
    expanded: boolean;
    canFold: boolean;
    toggle: () => void;
    onTruncate: (result: { limit: number; truncated: boolean; length: number }) => void;
    limit: number;
}

function ProjectIntroduction({
    id,
    intro,
    expanded,
    canFold,
    toggle,
    onTruncate,
    limit,
}: ProjectIntroProps) {
    return (
        <ProjectSection title="Introduction" expanded={expanded} canFold={canFold} toggle={toggle}>
            {expanded ? (
                <Paragraph id={`${id}-intro-text`} className="text-base" newlines={true}>
                    {intro}
                </Paragraph>
            ) : (
                <TruncatedText text={intro} onTruncate={onTruncate} controlLimit={limit} />
            )}
        </ProjectSection>
    );
}

interface ProjectContributionProps {
    id?: string;
    contribution: string[];
    expanded: boolean;
    canFold: boolean;
    toggle: () => void;
    onTruncate: (result: { limit: number; truncated: boolean; length: number }) => void;
    limit: number;
}

function ProjectContribution({
    id,
    contribution,
    expanded,
    canFold,
    toggle,
    onTruncate,
    limit,
}: ProjectContributionProps) {
    const content = useMemo(() => {
        return contribution.map((c, index) => (
            <li key={`${id}-contrib-${index}`}>
                <Paragraph
                    id={`${id}-contrib-${index}-text`}
                    className="text-base"
                    newlines={false}
                >
                    {c}
                </Paragraph>
            </li>
        ));
    }, [contribution, id]);
    return (
        <ProjectSection title="Contribution" expanded={expanded} canFold={canFold} toggle={toggle}>
            <ul className="list-disc pl-5">
                {expanded ? (
                    content
                ) : (
                    <li>
                        <TruncatedText
                            text={contribution[0]}
                            onTruncate={onTruncate}
                            controlLimit={limit}
                        />
                    </li>
                )}
            </ul>
        </ProjectSection>
    );
}

// -------------------- Main Component --------------------
export interface ProjectProps {
    id?: string;
    imgSrc?: string;
    alt?: string;
    projectName: string;
    title?: string;
    intro: string;
    contribution: string[];
    links: LinkProps[];
    special?: string;
}

/**
 * Renders a project component that displays an image, header, introduction, and contribution sections.
 *
 * This component manages internal state to control the folding and expansion of the introduction and
 * contribution sections. It also handles text truncation through callback functions to determine whether
 * the content can be folded and to set appropriate limits.
 *
 * @param props - The properties for the project component.
 * @param props.id - A unique identifier for the project, used for the DOM element id.
 * @param props.imgSrc - The source URL for the project's image.
 * @param props.alt - Alternative text describing the project's image.
 * @param props.projectName - The name of the project.
 * @param props.title - The title displayed in the project header.
 * @param props.special - A flag or additional property to denote special styling or behavior.
 * @param props.links - An array or object containing links related to the project.
 * @param props.intro - The introductory text or description for the project.
 * @param props.contribution - The content or list of contributions associated with the project.
 *
 * @returns The JSX element representing the rendered project component.
 */
export default function Project(props: ProjectProps) {
    const { isDark } = useTheme();
    const [introCanFold, setIntroCanFold] = useState(false);
    const [contribCanFold, setContribCanFold] = useState(false);
    const [introLimit, setIntroLimit] = useState(0);
    const [contribLimit, setContribLimit] = useState(0);
    const [introExpanded, setIntroExpanded] = useState(false);
    const [contribExpanded, setContribExpanded] = useState(false);

    function toggleIntro() {
        setIntroExpanded((prev) => !prev);
    }

    function toggleContrib() {
        setContribExpanded((prev) => !prev);
    }

    const onIntroTruncated = useCallback(
        (result: { limit: number; truncated: boolean; length: number }) => {
            setIntroCanFold(result.truncated);
            setIntroLimit(result.limit);
        },
        []
    );
    const onContribTruncated = useCallback(
        (result: { limit: number; truncated: boolean; length: number }) => {
            setContribCanFold(result.truncated || props.contribution.length > 1);
            setContribLimit(result.limit);
        },
        [props.contribution]
    );

    return (
        <div
            id={props.id}
            className="flex w-full rounded-lg py-5 px-5 md:gap-5 max-md:flex-col md:flex-row"
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
                <ProjectIntroduction
                    id={props.id}
                    intro={props.intro}
                    expanded={introExpanded}
                    canFold={introCanFold}
                    toggle={toggleIntro}
                    onTruncate={onIntroTruncated}
                    limit={introLimit}
                />
                <ProjectContribution
                    id={props.id}
                    contribution={props.contribution}
                    expanded={contribExpanded}
                    canFold={contribCanFold}
                    toggle={toggleContrib}
                    onTruncate={onContribTruncated}
                    limit={contribLimit}
                />
            </div>
        </div>
    );
}

import { useCallback, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { parseMarkdown } from "../hooks/utils";
import "../styles/truncated.css";
import Markdown, { NewTabLink } from "./Markdown";
import TruncatedText from "./TruncatedText";
interface LinkProps {
    name: string;
    url: string;
}

interface Props {
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
export default function Project(props: Props) {
    const { isDark } = useTheme();
    const [introCanFold, setIntroCanFold] = useState(false);
    const [contribCanFold, setContribCanFold] = useState(false);
    const [introLimit, setIntroLimit] = useState(0);
    const [contribLimit, setContribLimit] = useState(0);
    const [introExpanded, setIntroExpanded] = useState(false);
    const [contribExpanded, setContribExpanded] = useState(false);

    function getValidLinks(props: Props) {
        const links = [];
        for (let i = 0; i < props.links.length; i++) {
            links.push(
                <NewTabLink href={props.links[i].url} key={`${props.title}-links-${i}`}>
                    {props.links[i].name}
                </NewTabLink>
            );
        }
        return links;
    }
    function renderLinks(props: Props) {
        const elems = getValidLinks(props)
            .map((link, index) => {
                if (index == 0) {
                    return (
                        <div key={`${props.title}-link-${index}`} className="text-sm">
                            {link}
                        </div>
                    );
                } else {
                    return [
                        " / ",
                        <div key={`${props.title}-link-${index}`} className="text-sm">
                            {link}
                        </div>,
                    ];
                }
            })
            .flat();

        // check if there are youtube or github links, replace with icons
        for (let i = 0; i < props.links.length; i++) {
            if (props.links[i].name === "YouTube") {
                elems[2 * i] = (
                    <NewTabLink href={props.links[i].url} key={`${props.title}-link-${i}`}>
                        <img
                            className="logo size-6 youtube"
                            src={`youtube-${isDark ? "white" : "black"}.png`}
                            alt="youtube"
                        />
                    </NewTabLink>
                );
            } else if (props.links[i].name === "GitHub") {
                elems[2 * i] = (
                    <NewTabLink href={props.links[i].url} key={`${props.title}-link-${i}`}>
                        <img
                            className="logo size-5 github"
                            src={`github-mark-${isDark ? "white" : "black"}.svg`}
                            alt="github"
                        />
                    </NewTabLink>
                );
            }
        }

        return elems;
    }

    function toggleIntro() {
        setIntroExpanded(!introExpanded);
    }

    function toggleContrib() {
        setContribExpanded(!contribExpanded);
    }

    const onIntroTruncated = useCallback(
        (result: { limit: number; truncated: boolean; length: number }) => {
            setIntroCanFold(result.truncated);
            setIntroLimit(result.limit);
        },
        [setIntroCanFold, setIntroLimit]
    );
    const onContribTruncated = useCallback(
        (result: { limit: number; truncated: boolean; length: number }) => {
            setContribCanFold(result.truncated || props.contribution.length > 1);
            setContribLimit(result.limit);
        },
        [setContribCanFold, setContribLimit, props.contribution]
    );
    return (
        <div
            id={props.id}
            className="flex w-full rounded-lg py-5 px-5 md:gap-5 max-md:flex-col md:flex-row"
        >
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
                    src={props.imgSrc}
                    alt={props.alt}
                />
            </div>
            <div className="text-left w-full">
                <div className="place-content-start pt-2 px-2">
                    <div className="font-bold text-2xl inline">{props.projectName}</div>
                    {props.special && (
                        <div className="font-bold text-sm inline">{` (${props.special})`}</div>
                    )}
                </div>
                <div className="flex flex-row px-2 justify-between">
                    {props.title ?? (
                        <div className="place-content-start">
                            <div className="text-sm">{props.title}</div>
                        </div>
                    )}
                    <div className="flex flex-row pb-2 pr-3 justify-evenly gap-1 items-center ">
                        {renderLinks(props)}
                    </div>
                </div>
                <div
                    className={`col-span-5 text-justify py-2 group ${
                        introCanFold ? "hoverBlock" : "px-2"
                    }`}
                    onClick={toggleIntro}
                >
                    <div className="grid grid-cols-2">
                        <div className="font-bold text-xl col-span-1">{"Introduction"}</div>
                        <div
                            className={
                                "col-span-1 text-base " +
                                "flex flex-row-reverse items-center rounded-lg " +
                                (introCanFold ? "opacity-25 group-hover:opacity-100" : "invisible")
                            }
                        >
                            <span className="ml-1 select-none">{introExpanded ? "▲" : "▼"}</span>
                        </div>
                    </div>
                    {introExpanded ? (
                        parseMarkdown(props.intro).map((line, index) => {
                            if (line === "") return <br key={`${props.id}-text-${index}`} />;
                            return (
                                <Markdown className="text-base" key={`${props.id}-intro-${index}`}>
                                    {line}
                                </Markdown>
                            );
                        })
                    ) : (
                        <TruncatedText
                            text={props.intro}
                            onTruncate={onIntroTruncated}
                            controlLimit={introLimit}
                        />
                    )}
                </div>
                <div
                    className={`col-span-5 text-justify py-2 group ${
                        contribCanFold ? "hoverBlock" : "px-2"
                    }`}
                    onClick={toggleContrib}
                >
                    <div className="grid grid-cols-2">
                        <div className="font-bold text-xl">{"Contribution"}</div>
                        <div
                            className={
                                "col-span-1 text-base " +
                                "flex flex-row-reverse items-center rounded-lg " +
                                (contribCanFold
                                    ? "opacity-25 group-hover:opacity-100"
                                    : "invisible")
                            }
                        >
                            <span className="ml-1 select-none">{contribExpanded ? "▲" : "▼"}</span>
                        </div>
                    </div>
                    <ul className="list-disc pl-5">
                        {contribExpanded ? (
                            props.contribution.map((c, index) => (
                                <li key={`${props.id}-contrib-${index}`}>
                                    {parseMarkdown(c).map((line, idx) => {
                                        if (line === "")
                                            return (
                                                <br
                                                    key={`${props.id}-contrib-text-${index}-${idx}`}
                                                />
                                            );
                                        return (
                                            <Markdown
                                                className="text-base"
                                                key={`${props.id}-contrib-${index}-${idx}`}
                                            >
                                                {line}
                                            </Markdown>
                                        );
                                    })}
                                </li>
                            ))
                        ) : (
                            <li>
                                <TruncatedText
                                    text={props.contribution[0]}
                                    onTruncate={onContribTruncated}
                                    controlLimit={contribLimit}
                                />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

import { useTheme } from "../hooks/theme";
import "../styles/truncated.css";
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

    function getValidLinks(props: Props) {
        let links = [];
        for (let i = 0; i < props.links.length; i++) {
            links.push(
                <a href={props.links[i].url} key={`${props.title}-links-${i}`}>
                    {props.links[i].name}
                </a>
            );
        }
        return links;
    }
    function renderLinks(props: Props) {
        let elems = getValidLinks(props)
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
                    <a href={props.links[i].url} key={`${props.title}-link-${i}`}>
                        <img
                            className="logo size-6 youtube"
                            src={`youtube-${isDark ? "white" : "black"}.png`}
                            alt="youtube"
                        />
                    </a>
                );
            } else if (props.links[i].name === "GitHub") {
                elems[2 * i] = (
                    <a href={props.links[i].url} key={`${props.title}-link-${i}`}>
                        <img
                            className="logo size-5 github"
                            src={`github-mark-${isDark ? "white" : "black"}.svg`}
                            alt="github"
                        />
                    </a>
                );
            }
        }

        return elems;
    }

    function truncateText(text: string, wordLimit: number) {
        const words = text.split(" ");
        if (words.length <= wordLimit) {
            return text; // No truncation needed
        }
        return [
            `${words.slice(0, wordLimit).join(" ")}`,
            <span key={"intro-ellipsis"} className="ellipsis">
                ...
            </span>,
        ];
    }

    return (
        <div
            id={props.id}
            className={
                "grid grid-cols-7 gap-5 w-full rounded-lg dark:hover:bg-gray-200/10 " +
                "hover:bg-gray-800/10 ease-in transition duration-150 py-5 pr-5"
            }
            onClick={() => {
                window.open(props.links[0].url, "_blank");
            }}
        >
            <div className="flex flex-col justify-center content-center col-span-2 items-center">
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
            <div className="col-span-5 text-left w-full">
                <div className="place-content-start">
                    <div className="font-bold text-lg inline">{props.projectName}</div>
                    {props.special && (
                        <div className="font-bold text-sm inline">{` (${props.special})`}</div>
                    )}
                </div>
                <div className="flex flex-row pb-2 justify-between">
                    {props.title ?? (
                        <div className="place-content-start">
                            <div className="text-sm">{props.title}</div>
                        </div>
                    )}
                    <div className="flex flex-row pb-2 pr-3 justify-evenly gap-1 items-center ">
                        {renderLinks(props)}
                    </div>
                </div>
                <div className="col-span-5 text-justify">
                    <div className="font-bold text-base">{"Introduction"}</div>
                    <div className="text-base truncated">{truncateText(props.intro, 10)}</div>
                </div>
                <div className="col-span-5 text-justify">
                    <div className="font-bold text-base">{"Contribution"}</div>
                    <div className="text-base truncated">
                        {truncateText(props.contribution[0], 7)}
                    </div>
                </div>
            </div>
        </div>
    );
}

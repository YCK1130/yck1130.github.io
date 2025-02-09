import { authorLinks } from "../contents/authorLinks";
import { NewTabLink } from "./Markdown";

interface Props {
    id?: string;
    imgSrc?: string;
    alt?: string;
    title: string;
    authors: string[];
    venue: string;
    arxiv?: string;
    projectPage?: string;
    code?: string;
    paper?: string;
    abstract?: string;
    special?: string;
}

export default function Paper(props: Props) {
    function parseAuthors(authors: string[]) {
        const hasCoauthorship = authors.some((author) => author.includes("*"));

        const authorElements = authors.map((author, index) => {
            const cleanName = author.replace(/#.*$/g, "").replace(/\*/g, "").trim();
            const isBold = cleanName.includes("Chun-Kai Yang");

            const content = authorLinks[cleanName] ? (
                <NewTabLink
                    key={`${props.title}-author-${index}-link`}
                    href={authorLinks[cleanName]}
                    className="inline"
                >
                    {author}
                </NewTabLink>
            ) : (
                <span
                    key={`${props.title}-author-${index}`}
                    className={`inline ${isBold ? "font-semibold" : ""}`}
                >
                    {author}
                </span>
            );

            return index === 0
                ? content
                : [
                      <span key={`${props.title}-separator-${index}`} className="inline">
                          ,{" "}
                      </span>,
                      content,
                  ];
        });

        const flatAuthors = authorElements.flat();

        if (hasCoauthorship) {
            flatAuthors.push(
                <span key={`${props.title}-author-co`} className="inline">
                    {" (*equal contribution) "}
                </span>
            );
        }

        return flatAuthors;
    }

    function getValidLinks(props: Props) {
        const links: JSX.Element[] = [];

        if (props.arxiv) {
            links.push(
                <NewTabLink href={props.arxiv} key={`${props.title}-link-arxiv`}>
                    arXiv
                </NewTabLink>
            );
        }
        if (props.projectPage) {
            links.push(
                <NewTabLink href={props.projectPage} key={`${props.title}-link-project`}>
                    Project Page
                </NewTabLink>
            );
        }
        if (props.code) {
            links.push(
                <NewTabLink href={props.code} key={`${props.title}-link-code`}>
                    Code
                </NewTabLink>
            );
        }
        if (props.paper) {
            links.push(
                <NewTabLink href={props.paper} key={`${props.title}-link-paper`}>
                    Paper
                </NewTabLink>
            );
        }

        return links;
    }

    const validLinks = getValidLinks(props);

    return (
        <div
            id={props.id}
            className="grid gap-5 w-full rounded-lg py-5 px-5 md:grid-cols-7 max-md:grid-rows-2 ease-in transition duration-150"
        >
            <div className="flex flex-col justify-center items-center md:col-span-2 max-md:row-span-1">
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
            <div className="md:col-span-5 max-md:row-span-1 text-left">
                <div className="place-content-start">
                    <div className="text-lg">{props.title}</div>
                    <div className="text-sm">{parseAuthors(props.authors)}</div>
                </div>
                <div className="pb-2">
                    <span className="italic text-sm">{props.venue}</span>
                    {props.special && (
                        <span className="font-bold text-sm">{` (${props.special})`}</span>
                    )}
                </div>
                <div className="flex flex-row pb-2">
                    {validLinks.map((link, index) => (
                        <span key={`${props.title}-link-${index}`} className="text-sm inline">
                            {index === 0 ? link : [" / ", link]}
                        </span>
                    ))}
                </div>
                <div className="col-span-5 text-justify">
                    <div className="text-base">{props.abstract}</div>
                </div>
            </div>
        </div>
    );
}

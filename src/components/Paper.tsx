import { authorLinks } from "../contents/authorLinks";
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
        let coauth = authors.some((author) => author.includes("*"));

        let addLinks = authors.map((author, index) => {
            let parsedName = author.replace(/#.*$/g, "").replace(/\*/g, "").trim();
            let bold = parsedName.includes("Chun-Kai Yang");

            let elem = (
                <p
                    key={`${props.title}-auth-${index}`}
                    className={`inline${bold ? " font-bold" : ""}`}
                >
                    {author}
                </p>
            );
            if (authorLinks[parsedName]) {
                elem = (
                    <a
                        key={`${props.title}-auth-${index}-link`}
                        href={authorLinks[parsedName]}
                        className="inline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        {author}
                    </a>
                );
            }
            if (index == 0) {
                return elem;
            }
            return [
                <p key={`${props.title}-auth-${index}-comm`} className="inline">
                    ,{" "}
                </p>,
                elem,
            ];
        });
        if (coauth) {
            addLinks.push(
                <p key={`${props.title}-auth-co`} className="inline">
                    {" (*equal contribution) "}
                </p>
            );
        }
        return addLinks.flat();
    }
    function getValidLinks(props: Props) {
        let links = [];
        if (props.arxiv) {
            links.push(
                <a href={props.arxiv} key={`${props.title}-links-arxiv`}>
                    arXiv
                </a>
            );
        }
        if (props.projectPage) {
            links.push(
                <a href={props.projectPage} key={`${props.title}-links-ppage`}>
                    Project Page
                </a>
            );
        }
        if (props.code) {
            links.push(
                <a href={props.code} key={`${props.title}-links-Code`}>
                    Code
                </a>
            );
        }
        if (props.paper) {
            links.push(
                <a href={props.paper} key={`${props.title}-links-paper`}>
                    Paper
                </a>
            );
        }
        return links;
    }

    return (
        <div
            id={props.id}
            className={
                "grid grid-cols-7 gap-5 w-full rounded-lg dark:hover:bg-gray-200/10 " +
                "hover:bg-gray-800/10 ease-in transition duration-150 py-5 pr-5"
            }
            onClick={() => {
                if (props.arxiv) window.open(props.arxiv, "_blank");
                else if (props.projectPage) window.open(props.projectPage, "_blank");
                else if (props.code) window.open(props.code, "_blank");
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
            <div className="col-span-5 text-left">
                <div className="place-content-start">
                    <div className="font-bold text-lg">{props.title}</div>
                    <div className="text-sm">{parseAuthors(props.authors)}</div>
                </div>
                <div className="pb-2">
                    <div className="italic inline text-sm">{props.venue}</div>
                    {props.special && (
                        <div className="inline font-bold text-sm">{` (${props.special})`}</div>
                    )}
                </div>
                <div className="flex flex-row pb-2">
                    {getValidLinks(props).map((link, index) => (
                        <p key={`${props.title}-link-${index}`} className="text-sm inline">
                            {index == 0 ? link : [" / ", link]}
                        </p>
                    ))}
                </div>
                <div className="col-span-5 text-justify">
                    <div className="text-base">{props.abstract}</div>
                </div>
            </div>
        </div>
    );
}

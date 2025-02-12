import { PaperAbstract } from "./PaperAbstract";
import { PaperAuthors } from "./PaperAuthors";
import { PaperImage } from "./PaperImage";
import { PaperLinks } from "./PaperLinks";

interface PaperProps {
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

export default function Paper(props: PaperProps) {
    return (
        <div
            id={props.id}
            className="grid gap-5 w-full rounded-lg py-5 px-5 md:grid-cols-7 max-md:grid-rows-2 ease-in transition duration-150"
        >
            <PaperImage imgSrc={props.imgSrc} alt={props.alt} />
            <div className="md:col-span-5 max-md:row-span-1 text-left">
                <div className="place-content-start">
                    <div className="text-xl font-semibold flex flex-row justify-between">
                        {props.title}
                        <span className="text-left">
                            <span className="italic text-base">{props.venue}</span>
                            {props.special && (
                                <span className="font-bold text-base">{` (${props.special})`}</span>
                            )}
                        </span>
                    </div>
                    <PaperAuthors authors={props.authors} title={props.title} />
                </div>
                <PaperLinks
                    className="pb-2 text-base"
                    arxiv={props.arxiv}
                    projectPage={props.projectPage}
                    code={props.code}
                    paper={props.paper}
                />
                <PaperAbstract abstract={props.abstract} />
            </div>
        </div>
    );
}

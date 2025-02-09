import { authorLinks } from "../../contents/authorLinks";
import { NewTabLink } from "../Markdown";

interface PaperAuthorProps {
    author: string;
    index: number;
    title: string;
}

export function PaperAuthor({ author, index, title }: PaperAuthorProps) {
    const cleanName = author.replace(/#.*$/g, "").replace(/\*/g, "").trim();
    const isBold = cleanName.includes("Chun-Kai Yang");

    if (authorLinks[cleanName]) {
        return (
            <NewTabLink
                key={`${title}-author-${index}-link`}
                href={authorLinks[cleanName]}
                className="inline"
            >
                {author}
            </NewTabLink>
        );
    }

    return (
        <span
            key={`${title}-author-${index}`}
            className={`inline ${isBold ? "font-semibold" : ""}`}
        >
            {author}
        </span>
    );
}

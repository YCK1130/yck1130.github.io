import { PaperAuthor } from "./PaperAuthor";

interface PaperAuthorsProps {
    authors: string[];
    title: string;
}

export function PaperAuthors({ authors, title }: PaperAuthorsProps) {
    const hasCoauthorship = authors.some((author) => author.includes("*"));

    return (
        <div className="text-sm">
            {authors.map((author, index) => (
                <span key={`${title}-author-${index}-p`}>
                    {index > 0 && ", "}
                    <PaperAuthor
                        key={`${title}-author-${index}`}
                        author={author}
                        index={index}
                        title={title}
                    />
                </span>
            ))}
            {hasCoauthorship && <div className="text-xs">* Equal contribution</div>}
        </div>
    );
}

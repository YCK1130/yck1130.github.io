import { NewTabLink } from "../Markdown";

interface PaperLinksProps {
    arxiv?: string;
    projectPage?: string;
    code?: string;
    paper?: string;
    className?: string;
}

export function PaperLinks({ arxiv, projectPage, code, paper, className }: PaperLinksProps) {
    return (
        <div className={"flex text-sm " + (className ? className : "")}>
            {arxiv && <NewTabLink href={arxiv}>arXiv</NewTabLink>}
            {projectPage && (
                <>
                    {arxiv && " / "}
                    <NewTabLink href={projectPage}>Project Page</NewTabLink>
                </>
            )}
            {code && (
                <>
                    {(arxiv || projectPage) && " / "}
                    <NewTabLink href={code}>Code</NewTabLink>
                </>
            )}
            {paper && (
                <>
                    {(arxiv || projectPage || code) && " / "}
                    <NewTabLink href={paper}>Paper</NewTabLink>
                </>
            )}
        </div>
    );
}

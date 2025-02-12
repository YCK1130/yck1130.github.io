import { NewTabLink } from "../Markdown";

interface PaperLinksProps {
    arxiv?: string;
    projectPage?: string;
    code?: string;
    paper?: string;
    className?: string;
}

export function PaperLinks({ arxiv, projectPage, code, paper, className }: PaperLinksProps) {
    const divider = " / ";
    return (
        <div className={"flex flex-row " + (className ? className : "")}>
            {arxiv && <NewTabLink href={arxiv}>arXiv</NewTabLink>}
            {projectPage && (
                <>
                    {arxiv && divider}
                    <NewTabLink href={projectPage}>Project Page</NewTabLink>
                </>
            )}
            {code && (
                <>
                    {(arxiv || projectPage) && divider}
                    <NewTabLink href={code}>Code</NewTabLink>
                </>
            )}
            {paper && (
                <>
                    {(arxiv || projectPage || code) && divider}
                    <NewTabLink href={paper}>Paper</NewTabLink>
                </>
            )}
        </div>
    );
}

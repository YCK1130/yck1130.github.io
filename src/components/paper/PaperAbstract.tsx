import { Paragraph } from "../Markdown";

interface PaperAbstractProps {
    abstract?: string;
    className?: string;
}

export function PaperAbstract({ abstract, className }: PaperAbstractProps) {
    if (!abstract) return null;

    return (
        <Paragraph className={"text-base " + (className ? className : "")} id={abstract}>
            {abstract}
        </Paragraph>
    );
}

import ReactMarkdown, { Components } from "react-markdown";
import { parseMarkdown } from "../hooks/utils";

interface MarkdownProps {
    children?: string;
    className?: string;
    components?: Components | null | undefined;
}

interface NewTabLinkProps {
    href?: string;
    children?: React.ReactNode;
    className?: string;
}

export const NewTabLink = ({ href, children, className }: NewTabLinkProps) => {
    return (
        <a href={href} className={className} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
};

export default function Markdown({ children, className, components }: MarkdownProps) {
    return (
        <ReactMarkdown className={className} components={{ a: NewTabLink, ...components }}>
            {children}
        </ReactMarkdown>
    );
}
interface ParagraphProps {
    id: string | number;
    children?: string;
    className?: string;
    newlines?: boolean;
}
export const Paragraph = ({ id, children, className, newlines = true }: ParagraphProps) => {
    return parseMarkdown(children).map((line, index) => {
        if (line === "") return newlines ? <br key={`${id}-text-${index}`} /> : null;
        return (
            <Markdown className={"text-justify " + className} key={`${id}-text-${index}`}>
                {line}
            </Markdown>
        );
    });
};

import ReactMarkdown, { Components } from "react-markdown";

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

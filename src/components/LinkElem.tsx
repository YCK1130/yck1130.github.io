import React from "react";
import { NewTabLink } from "./Markdown";

export interface LinkProps {
    name: string;
    url: string;
}

export interface LinkElemProps {
    link: LinkProps;
    index: number;
    isDark: boolean;
    title?: string;
}

export const LinkElem = React.memo(
    ({ link, index, isDark, title }: LinkElemProps) => {
        let content: React.ReactNode = link.name;
        if (link.name === "YouTube") {
            content = (
                <img className="logo size-6 youtube" src={`youtube-white.png`} alt="youtube" />
            );
        } else if (link.name === "GitHub") {
            content = (
                <img
                    className="logo size-5 github"
                    src={`github-mark-${isDark ? "white" : "black"}.svg`}
                    alt="github"
                />
            );
        } else if (link.name === "Essay") {
            content = (
                <img
                    className="logo size-5 essay"
                    src={`docs-${isDark ? "white" : "black"}.png`}
                    alt="essay"
                />
            );
        }

        return (
            <NewTabLink href={link.url} key={`${title}-link-${index}`} className="text-sm">
                {content}
            </NewTabLink>
        );
    },
    (prevProps, nextProps) =>
        prevProps.link.name === nextProps.link.name &&
        prevProps.link.url === nextProps.link.url &&
        prevProps.index === nextProps.index &&
        prevProps.isDark === nextProps.isDark &&
        prevProps.title === nextProps.title
);

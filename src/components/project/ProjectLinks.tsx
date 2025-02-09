import React from "react";
import { LinkElem, LinkProps } from "../LinkElem";

export interface ProjectLinksProps {
    links: LinkProps[];
    title?: string;
    isDark: boolean;
}

export function ProjectLinks({ links, title, isDark }: ProjectLinksProps) {
    return (
        <>
            {links.map((link, index) => (
                <React.Fragment key={index}>
                    {index > 0 && " / "}
                    <span>
                        <LinkElem link={link} index={index} isDark={isDark} title={title} />
                    </span>
                </React.Fragment>
            ))}
        </>
    );
}

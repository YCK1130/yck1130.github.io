import { LinkProps } from "../LinkElem";
import { ProjectLinks } from "./ProjectLinks";

export interface ProjectHeaderProps {
    projectName: string;
    title?: string;
    special?: string;
    links: LinkProps[];
    isDark: boolean;
}

export function ProjectHeader({ projectName, title, special, links, isDark }: ProjectHeaderProps) {
    return (
        <div className="text-left w-full">
            <div className="place-content-start pt-2 px-2">
                <div className="text-xl font-semibold inline">{projectName}</div>
                <div className="text-base inline">{special ? ` (${special})` : ""}</div>
            </div>
            <div className="flex flex-row px-2 justify-between">
                {title && (
                    <div className="place-content-start">
                        <div className="text-base">{title}</div>
                    </div>
                )}
                <div className="flex flex-row pb-2 justify-evenly gap-1 items-center">
                    <ProjectLinks links={links} title={title} isDark={isDark} />
                </div>
            </div>
        </div>
    );
}

import Triangle from "../Triangle";
export interface ProjectSectionProps {
    title: string;
    expanded: boolean;
    canFold: boolean;
    toggle: () => void;
    children?: JSX.Element | JSX.Element[];
}

export function ProjectSection({
    title,
    expanded,
    canFold,
    toggle,
    children,
}: ProjectSectionProps) {
    return (
        <div
            className={`col-span-5 text-justify group ${
                canFold && !expanded ? "hoverBlock px-0" : ""
            }`}
            onClick={toggle}
        >
            <div
                className={
                    "grid grid-cols-2 pt-2 px-2 " + (canFold && expanded ? "hoverBlock" : "")
                }
            >
                <div className="text-xl col-span-1 select-none">{title}</div>
                <Triangle
                    up={expanded}
                    className={
                        "col-span-1 ml-auto " +
                        (canFold ? "opacity-25 group-hover:opacity-100" : "invisible")
                    }
                />
            </div>
            <div onClick={(e) => !expanded || e.stopPropagation()} className="pb-2 px-2">
                {children}
            </div>
        </div>
    );
}

interface TriangleProps {
    up: boolean;
    className?: string;
}

export default function Triangle({ up, className }: TriangleProps) {
    return (
        <div
            className={"flex flex-row text-base items-center rounded-lg w-min " + (className ?? "")}
        >
            <span className="select-none">{up ? "▲" : "▼"}</span>
        </div>
    );
}

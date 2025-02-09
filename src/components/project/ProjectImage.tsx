export interface ProjectImageProps {
    imgSrc?: string;
    alt?: string;
}

export function ProjectImage({ imgSrc, alt }: ProjectImageProps) {
    return (
        <div className="flex flex-col justify-center content-center items-center md:w-[38%]">
            <img
                className="rounded-lg"
                style={{
                    width: "100%",
                    maxWidth: "200px",
                    minWidth: "96px",
                    maxHeight: "200px",
                    minHeight: "96px",
                }}
                src={imgSrc}
                alt={alt}
            />
        </div>
    );
}

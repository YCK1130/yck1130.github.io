interface PaperImageProps {
    imgSrc?: string;
    alt?: string;
}

export function PaperImage({ imgSrc, alt }: PaperImageProps) {
    return (
        <div className="flex flex-col justify-center items-center md:col-span-2 max-md:row-span-1">
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

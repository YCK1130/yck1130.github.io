import Markdown from "react-markdown";
import { parseMarkdown } from "../hooks/utils";
export default function ParagraphContainer(props: { id?: string; title: string; content: string }) {
    return (
        <div id={props.id} className="flex flex-col justify-center content-center h-full container">
            <h1 className="text-center">{props.title}</h1>
            <br />
            {parseMarkdown(props.content).map((line, index) => {
                if (line === "") return <br key={`${props.title}-text-${index}`} />;
                return (
                    <Markdown className="text-justify" key={`${props.title}-text-${index}`}>
                        {line}
                    </Markdown>
                );
            })}
        </div>
    );
}

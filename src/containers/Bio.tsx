import Markdown from "react-markdown";
import bioString from "../contents/bio.md?raw";

export default function Bio(props: { id?: string }) {
    return (
        <div id={props.id} className="flex flex-col justify-center content-center h-full">
            <h1 className="text-center">Bio</h1>
            <Markdown className="text-justify">{bioString}</Markdown>
        </div>
    );
}

import bioString from "../contents/bio.md?raw";
import ParagraphContainer from "./ParagraphContainer";

export default function Bio(props: { id?: string }) {
    return <ParagraphContainer id={props.id} title="Bio" content={bioString} />;
}

export default function Divider(props: { id?: string; type?: "solid" | "dashed" | "dotted" }) {
    return <hr id={props.id} className={`p-4 ${props.type ?? "solid"}`} />;
}

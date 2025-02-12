export default function Divider(props: { id?: string; className?: string }) {
    return (
        <div
            id={props.id}
            className={`my-2 w-full h-0 border-t border-gray-300 dark:border-gray-600 ${props.className}`}
        />
    );
}

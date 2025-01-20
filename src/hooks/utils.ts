export function parseMarkdown(content: string) {
    return content
        .replace(/<!--[\s\S]*?-->/g, "") // remove HTML comments
        .trim()
        .replace(/\n+/g, "\n\n") // remove extra newlines
        .split("\n");
}

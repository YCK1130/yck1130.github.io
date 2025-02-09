export function parseMarkdown(content: string | undefined): string[] {
    if (!content) return [];
    return content
        .replace(/<!--[\s\S]*?-->/g, "") // remove HTML comments
        .trim()
        .replace(/\n+/g, "\n\n") // remove extra newlines
        .split("\n");
}

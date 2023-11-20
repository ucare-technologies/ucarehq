function trimTag(html: string | undefined | null, tag: string) {
	const trimmed = html?.trim() || '';
	if (!trimmed) {
		return '';
	}
	const startTag = `<${tag}>`;
	const start = !trimmed.startsWith(startTag) ? trimmed : trimmed.substring(startTag.length);
	const endTag = `</${tag}>`;
	const end = !start.endsWith(endTag) ? start : start.substring(0, start.length - endTag.length);
	return end;
}
export const trimPTag = (html: string | undefined | null) => trimTag(html, 'p');

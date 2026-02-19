type ImportedAsset = string | { src?: string } | null | undefined;

export function assetPath(value: ImportedAsset) {
	if (!value) {
		return '';
	}
	if (typeof value === 'string') {
		return value;
	}
	return typeof value.src === 'string' ? value.src : '';
}

export type Slice = { slice_name: string | null };
export function isSlice(item: any): item is Slice {
	return !!item && 'slice_name' in item;
}

/**
 * Takes an integer value and returns the item at that index, allowing for positive and negative integers.
 * Negative integers count back from the last item in the array.
 * @param object
 * @param index
 */
export const at = <T>(
  object: string | T[] | undefined | null,
  index: number
) => {
  // ToInteger() abstract op
  index = Math.trunc(index) || 0;
  if (!object) return undefined;
  // Allow negative indexing from the end
  if (index < 0) index += object.length;
  // OOB access is guaranteed to return undefined
  if (index < 0 || index >= object.length) return undefined;
  // Otherwise, this is just normal property access
  return object[index];
};

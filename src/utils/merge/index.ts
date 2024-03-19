/**
 * Merges properties from the defaults object into the obj object if they don't already exist.
 * @param obj The target object to merge the properties into.
 * @param defaults The source object containing default properties.
 * @returns The merged object.
 * @example
 * const obj = { a: 1, b: 2 };
 * const defaults = { b: 3, c: 4 };
 * const mergedObj = merge(obj, defaults);
 * console.log(mergedObj); // Output: { a: 1, b: 2, c: 4 }
 */
export const merge = <T extends Record<string, any>>(obj: Partial<T> = {}, defaults: T): T => {
    for (const key in defaults) {
        if (typeof obj[key] === 'undefined') {
            obj[key] = defaults[key];
        }
    }
    return obj as T;
};

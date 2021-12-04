import { useLocalObservable } from "mobx-react";

/**
 * State with a single value.
 * @param initial initial value.
 */
export function useSimpleState<T>(initial: T) {
    return useLocalObservable<{
        value: T,
        set: (newValue: T) => void,
        is: (expected: T) => boolean,
    }>(() => ({
        value: initial,
        set(newValue) {
            this.value = newValue;
        },
        is(expected) {
            return this.value === expected;
        }
    }));
}

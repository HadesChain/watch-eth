/**
 * Creates a simple (not cryptographically secure) hash.
 * @param message Message to be hashed.
 * @returns the hashed value.
 */
export declare const hash: (message: string) => string;
/**
 * Creates a promise that resolves after a certain period of time.
 * @param ms Number of milliseconds to sleep.
 * @returns a promise that resolves later.
 */
export declare const sleep: (ms: number) => Promise<void>;

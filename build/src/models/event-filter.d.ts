export interface EventFilterOptions {
    event: string;
    indexed?: {
        [key: string]: any;
    };
}
/**
 * Represents an event filter.
 */
export declare class EventFilter {
    options: EventFilterOptions;
    constructor(options: EventFilterOptions);
    /**
     * @returns the unique hash for this filter.
     */
    readonly hash: string;
}

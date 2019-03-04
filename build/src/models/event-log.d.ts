export interface EventLogData {
    transactionHash: string;
    logIndex: number;
}
/**
 * Represents a single event log.
 */
export declare class EventLog {
    data: EventLogData;
    constructor(data: EventLogData);
    /**
     * Returns a unique hash for this event log.
     */
    readonly hash: string;
}

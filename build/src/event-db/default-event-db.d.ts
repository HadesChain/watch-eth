import { BaseEventDB } from './base-event-db';
export declare class DefaultEventDB implements BaseEventDB {
    private lastLogged;
    private seen;
    /**
     * Returns the last logged block for an event.
     * @param event Event to query.
     * @returns last logged block for that event.
     */
    getLastLoggedBlock(event: string): Promise<number>;
    /**
     * Sets the last logged block for an event.
     * @param event Event to set.
     * @param block Last logged block for that event.
     */
    setLastLoggedBlock(event: string, block: number): Promise<void>;
    /**
     * Checks whether a given event has already been seen.
     * @param event Event to check
     * @returns `true` if the event has been seen, `false` otherwise.
     */
    getEventSeen(event: string): Promise<boolean>;
    /**
     * Sets a given event as seen.
     * @param event Event to set.
     */
    setEventSeen(event: string): Promise<void>;
}

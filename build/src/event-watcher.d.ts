/// <reference types="node" />
import { EventEmitter } from 'events';
import { EventFilterOptions } from './models';
import { BaseEthProvider } from './eth-provider/base-eth-provider';
import { BaseEventDB } from './event-db/base-event-db';
export interface EventWatcherOptions {
    address: string;
    abi: any;
    finalityDepth?: number;
    pollInterval?: number;
    eth?: BaseEthProvider;
    db?: BaseEventDB;
}
/**
 * Watches for events on a given contract.
 */
export declare class EventWatcher extends EventEmitter {
    private options;
    private eth;
    private db;
    private polling;
    private subscriptions;
    constructor(options: EventWatcherOptions);
    /**
     * @returns `true` if polling, `false` otherwise.
     */
    readonly isPolling: boolean;
    /**
     * Starts the polling loop.
     * Can only be called once.
     */
    startPolling(): void;
    /**
     * Stops the polling loop.
     */
    stopPolling(): void;
    /**
     * Subscribes to an event with a given callback.
     * @param options Event filter to subscribe to.
     * @param listener Function to be called when the event is triggered.
     */
    subscribe(options: EventFilterOptions | string, listener: (...args: any) => any): void;
    /**
     * Unsubscribes from an event with a given callback.
     * @param options Event filter to unsubscribe from.
     * @param listener Function that was used to subscribe.
     */
    unsubscribe(options: EventFilterOptions | string, listener: (...args: any) => any): void;
    /**
     * Polling loop.
     * Checks events then sleeps before calling itself again.
     * Stops polling if the service is stopped.
     */
    private pollEvents;
    /**
     * Checks for new events and triggers any listeners on those events.
     * Will only check for events that are currently being listened to.
     */
    private checkEvents;
    /**
     * Checks for new instances of an event.
     * @param filter Event filter to check.
     * @param lastFinalBlock Number of the latest block known to be final.
     */
    private checkEvent;
    /**
     * Filters out any events we've already seen.
     * @param events A series of Ethereum events.
     * @returns any events we haven't seen already.
     */
    private getUniqueEvents;
    /**
     * Emits events for a given event name.
     * @param filterHash Hash of the event filter to emit.
     * @param events Event objects for that event.
     */
    private emitEvents;
}

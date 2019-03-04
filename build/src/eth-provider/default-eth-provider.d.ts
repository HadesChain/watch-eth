import { BaseEthProvider, FullEventFilter } from './base-eth-provider';
import { EventLog } from '../models';
interface DefaultEthProviderOptions {
    endpoint?: string;
}
export declare class DefaultEthProvider implements BaseEthProvider {
    private web3;
    constructor(options?: DefaultEthProviderOptions);
    /**
     * Checks whether the web3 node is connected.
     * @returns `true` if the node is connected, `false` otherwise.
     */
    connected(): Promise<boolean>;
    /**
     * @returns the current Ethereum block number.
     */
    getCurrentBlock(): Promise<number>;
    /**
     * Returns a list of events that match a given filter.
     * @param filter Filter to match.
     * @returns all events that match the filter.
     */
    getEvents(filter: FullEventFilter): Promise<EventLog[]>;
}
export {};

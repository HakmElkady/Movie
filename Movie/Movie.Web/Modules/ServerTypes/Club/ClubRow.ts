import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";

export interface ClubRow {
    ClubId?: number;
    ClubName?: string;
    Code?: string;
    PingTime?: string;
}

export abstract class ClubRow {
    static readonly idProperty = 'ClubId';
    static readonly nameProperty = 'ClubName';
    static readonly localTextPrefix = 'Club.Club';
    static readonly lookupKey = 'Club.Club';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<ClubRow>('Club.Club') }
    static async getLookupAsync() { return getLookupAsync<ClubRow>('Club.Club') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<ClubRow>();
}
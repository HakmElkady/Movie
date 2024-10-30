import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { ClubRow } from "./ClubRow";

export interface ClubColumns {
    ClubId: Column<ClubRow>;
    ClubName: Column<ClubRow>;
    Code: Column<ClubRow>;
    PingTime: Column<ClubRow>;
}

export class ClubColumns extends ColumnsBase<ClubRow> {
    static readonly columnsKey = 'Club.Club';
    static readonly Fields = fieldsProxy<ClubColumns>();
}
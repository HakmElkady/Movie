import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { ClubColumns, ClubRow, ClubService } from '../../ServerTypes/Club';
import { ClubDialog } from './ClubDialog';

@Decorators.registerClass('Movie.Club.ClubGrid')
export class ClubGrid extends EntityGrid<ClubRow> {
    protected getColumnsKey() { return ClubColumns.columnsKey; }
    protected getDialogType() { return ClubDialog; }
    protected getRowDefinition() { return ClubRow; }
    protected getService() { return ClubService.baseUrl; }
}
import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { ClubForm, ClubRow, ClubService } from '../../ServerTypes/Club';

@Decorators.registerClass('Movie.Club.ClubDialog')
export class ClubDialog extends EntityDialog<ClubRow, any> {
    protected getFormKey() { return ClubForm.formKey; }
    protected getRowDefinition() { return ClubRow; }
    protected getService() { return ClubService.baseUrl; }

    protected form = new ClubForm(this.idPrefix);
}
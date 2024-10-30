import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { EmployeeForm, EmployeeRow, EmployeeService } from '../../ServerTypes/Club';

@Decorators.registerClass('Movie.Club.EmployeeDialog')
export class EmployeeDialog extends EntityDialog<EmployeeRow, any> {
    protected getFormKey() { return EmployeeForm.formKey; }
    protected getRowDefinition() { return EmployeeRow; }
    protected getService() { return EmployeeService.baseUrl; }

    protected form = new EmployeeForm(this.idPrefix);
}
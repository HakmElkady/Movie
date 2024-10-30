import { StringEditor, DateEditor, LookupEditor, EnumEditor, DecimalEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { ClubDialog } from "../../Club/Club/ClubDialog";
import { Gender } from "../Modules/MovieDB.Person.Gender";

export interface EmployeeForm {
    FirstName: StringEditor;
    LastName: StringEditor;
    BirthDate: DateEditor;
    Address: StringEditor;
    ClubId: LookupEditor;
    Gender: EnumEditor;
    Salary: DecimalEditor;
}

export class EmployeeForm extends PrefixedContext {
    static readonly formKey = 'Club.Employee';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!EmployeeForm.init)  {
            EmployeeForm.init = true;

            var w0 = StringEditor;
            var w1 = DateEditor;
            var w2 = LookupEditor;
            var w3 = EnumEditor;
            var w4 = DecimalEditor;

            initFormType(EmployeeForm, [
                'FirstName', w0,
                'LastName', w0,
                'BirthDate', w1,
                'Address', w0,
                'ClubId', w2,
                'Gender', w3,
                'Salary', w4
            ]);
        }
    }
}

queueMicrotask(() => [ClubDialog, Gender]); // referenced types
import { StringEditor, DateEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface ClubForm {
    ClubName: StringEditor;
    Code: StringEditor;
    PingTime: DateEditor;
}

export class ClubForm extends PrefixedContext {
    static readonly formKey = 'Club.Club';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ClubForm.init)  {
            ClubForm.init = true;

            var w0 = StringEditor;
            var w1 = DateEditor;

            initFormType(ClubForm, [
                'ClubName', w0,
                'Code', w0,
                'PingTime', w1
            ]);
        }
    }
}
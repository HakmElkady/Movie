import { fieldsProxy } from "@serenity-is/corelib";
import { Gender } from "../Modules/MovieDB.Person.Gender";

export interface EmployeeRow {
    EmployeeId?: number;
    FirstName?: string;
    LastName?: string;
    BirthDate?: string;
    Address?: string;
    Gender?: Gender;
    Salary?: number;
    ClubId?: number;
    ClubName?: string;
}

export abstract class EmployeeRow {
    static readonly idProperty = 'EmployeeId';
    static readonly nameProperty = 'FirstName';
    static readonly localTextPrefix = 'Club.Employee';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<EmployeeRow>();
}
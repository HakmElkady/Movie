import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { Gender } from "../Modules/MovieDB.Person.Gender";
import { EmployeeRow } from "./EmployeeRow";

export interface EmployeeColumns {
    EmployeeId: Column<EmployeeRow>;
    FirstName: Column<EmployeeRow>;
    LastName: Column<EmployeeRow>;
    ClubName: Column<EmployeeRow>;
    BirthDate: Column<EmployeeRow>;
    Address: Column<EmployeeRow>;
    Gender: Column<EmployeeRow>;
    Salary: Column<EmployeeRow>;
}

export class EmployeeColumns extends ColumnsBase<EmployeeRow> {
    static readonly columnsKey = 'Club.Employee';
    static readonly Fields = fieldsProxy<EmployeeColumns>();
}

queueMicrotask(() => [Gender]); // referenced types
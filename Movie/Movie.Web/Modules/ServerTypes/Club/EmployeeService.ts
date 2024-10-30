﻿import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { EmployeeRow } from "./EmployeeRow";

export namespace EmployeeService {
    export const baseUrl = 'Club/Employee';

    export declare function Create(request: SaveRequest<EmployeeRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<EmployeeRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<EmployeeRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<EmployeeRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<EmployeeRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<EmployeeRow>>;

    export const Methods = {
        Create: "Club/Employee/Create",
        Update: "Club/Employee/Update",
        Delete: "Club/Employee/Delete",
        Retrieve: "Club/Employee/Retrieve",
        List: "Club/Employee/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>EmployeeService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}
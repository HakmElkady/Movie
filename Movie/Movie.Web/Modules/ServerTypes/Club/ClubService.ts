import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { ClubRow } from "./ClubRow";

export namespace ClubService {
    export const baseUrl = 'Club/Club';

    export declare function Create(request: SaveRequest<ClubRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<ClubRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<ClubRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<ClubRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<ClubRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<ClubRow>>;

    export const Methods = {
        Create: "Club/Club/Create",
        Update: "Club/Club/Update",
        Delete: "Club/Club/Delete",
        Retrieve: "Club/Club/Retrieve",
        List: "Club/Club/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>ClubService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}
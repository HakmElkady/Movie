﻿using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Movie.Administration.RoleRow>;
using MyRow = Movie.Administration.RoleRow;


namespace Movie.Administration;
public interface IRoleListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class RoleListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IRoleListHandler
{
    public RoleListHandler(IRequestContext context)
         : base(context)
    {
    }
}
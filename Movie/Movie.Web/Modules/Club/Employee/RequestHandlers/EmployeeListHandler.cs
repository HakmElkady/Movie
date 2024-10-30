using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Movie.Club.EmployeeRow>;
using MyRow = Movie.Club.EmployeeRow;

namespace Movie.Club;

public interface IEmployeeListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class EmployeeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeListHandler
{
    public EmployeeListHandler(IRequestContext context)
            : base(context)
    {
    }
}
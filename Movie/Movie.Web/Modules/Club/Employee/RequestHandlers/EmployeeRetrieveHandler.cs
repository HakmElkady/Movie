using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Movie.Club.EmployeeRow>;
using MyRow = Movie.Club.EmployeeRow;

namespace Movie.Club;

public interface IEmployeeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class EmployeeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeRetrieveHandler
{
    public EmployeeRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}
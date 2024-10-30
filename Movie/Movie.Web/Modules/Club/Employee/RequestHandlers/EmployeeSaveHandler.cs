using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Movie.Club.EmployeeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Movie.Club.EmployeeRow;

namespace Movie.Club;

public interface IEmployeeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class EmployeeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeSaveHandler
{
    public EmployeeSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}
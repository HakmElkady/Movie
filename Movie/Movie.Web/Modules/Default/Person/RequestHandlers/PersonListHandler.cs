using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Movie.Default.PersonRow>;
using MyRow = Movie.Default.PersonRow;

namespace Movie.Default;

public interface IPersonListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class PersonListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPersonListHandler
{
    public PersonListHandler(IRequestContext context)
            : base(context)
    {
    }
}
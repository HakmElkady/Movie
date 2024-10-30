using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Movie.MovieDB.PersonRow>;
using MyRow = Movie.MovieDB.PersonRow;

namespace Movie.MovieDB;

public interface IPersonListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class PersonListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPersonListHandler
{
    public PersonListHandler(IRequestContext context)
            : base(context)
    {
    }
}
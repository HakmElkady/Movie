using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Movie.MovieDB.MovieCastRow>;
using MyRow = Movie.MovieDB.MovieCastRow;

namespace Movie.MovieDB;

public interface IMovieCastListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class MovieCastListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMovieCastListHandler
{
    public MovieCastListHandler(IRequestContext context)
            : base(context)
    {
    }
}
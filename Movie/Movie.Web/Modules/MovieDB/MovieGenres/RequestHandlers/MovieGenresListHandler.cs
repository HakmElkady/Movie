using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Movie.MovieDB.MovieGenresRow>;
using MyRow = Movie.MovieDB.MovieGenresRow;

namespace Movie.MovieDB;

public interface IMovieGenresListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class MovieGenresListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMovieGenresListHandler
{
    public MovieGenresListHandler(IRequestContext context)
            : base(context)
    {
    }
}
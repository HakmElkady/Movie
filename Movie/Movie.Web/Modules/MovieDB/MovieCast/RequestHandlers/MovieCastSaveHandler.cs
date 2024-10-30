using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Movie.MovieDB.MovieCastRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Movie.MovieDB.MovieCastRow;

namespace Movie.MovieDB;

public interface IMovieCastSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class MovieCastSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieCastSaveHandler
{
    public MovieCastSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}
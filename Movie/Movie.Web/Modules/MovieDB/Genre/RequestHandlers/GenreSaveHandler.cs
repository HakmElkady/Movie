using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Movie.MovieDB.GenreRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Movie.MovieDB.GenreRow;

namespace Movie.MovieDB;

public interface IGenreSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class GenreSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IGenreSaveHandler
{
    public GenreSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}
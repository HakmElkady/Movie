using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Movie.MovieDB.PersonRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Movie.MovieDB.PersonRow;

namespace Movie.MovieDB;

public interface IPersonSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class PersonSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonSaveHandler
{
    public PersonSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}
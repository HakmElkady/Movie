using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Movie.Club.ClubRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Movie.Club.ClubRow;

namespace Movie.Club;

public interface IClubSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class ClubSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IClubSaveHandler
{
    public ClubSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}
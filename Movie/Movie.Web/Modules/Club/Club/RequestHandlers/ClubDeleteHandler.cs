using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Movie.Club.ClubRow;

namespace Movie.Club;

public interface IClubDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class ClubDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IClubDeleteHandler
{
    public ClubDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}
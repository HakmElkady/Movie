using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Movie.Club.ClubRow>;
using MyRow = Movie.Club.ClubRow;

namespace Movie.Club;

public interface IClubListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class ClubListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IClubListHandler
{
    public ClubListHandler(IRequestContext context)
            : base(context)
    {
    }
}
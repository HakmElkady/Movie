using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Movie.Club.ClubRow>;
using MyRow = Movie.Club.ClubRow;

namespace Movie.Club;

public interface IClubRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class ClubRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IClubRetrieveHandler
{
    public ClubRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}
using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Movie.Club.Pages;

[PageAuthorize(typeof(ClubRow))]
public class ClubPage : Controller
{
    [Route("Club/Club")]
    public ActionResult Index()
    {
        return this.GridPage<ClubRow>("@/Club/Club/ClubPage");
    }
}
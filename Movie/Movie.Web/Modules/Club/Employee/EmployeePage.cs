using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Movie.Club.Pages;

[PageAuthorize(typeof(EmployeeRow))]
public class EmployeePage : Controller
{
    [Route("Club/Employee")]
    public ActionResult Index()
    {
        return this.GridPage<EmployeeRow>("@/Club/Employee/EmployeePage");
    }
}
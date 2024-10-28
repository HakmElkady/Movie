﻿using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Movie.MovieDB.Pages;

[PageAuthorize(typeof(GenreRow))]
public class GenrePage : Controller
{
    [Route("MovieDB/Genre")]
    public ActionResult Index()
    {
        return this.GridPage<GenreRow>("@/MovieDB/Genre/GenrePage");
    }
}
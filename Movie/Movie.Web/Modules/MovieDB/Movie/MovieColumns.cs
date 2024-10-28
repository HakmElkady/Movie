using Movie.Modules.MovieDB.Movie;
using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Movie.MovieDB.Columns;

[ColumnsScript("MovieDB.Movie")]
[BasedOnRow(typeof(MovieRow), CheckNames = true)]
public class MovieColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
    public int MovieId { get; set; }
    [EditLink]
    public string Title { get; set; }
    public string Description { get; set; }
    public string Storyline { get; set; }
    public int Year { get; set; }
    public DateTime ReleaseDate { get; set; }

    [DisplayName("Runtime in Mins"), Width(110), AlignCenter]
    public int Runtime { get; set; }

    public MovieKind Kind { get; set; }

    [Width(100), QuickFilter]
    public string GenreName { get; set; }


}
using Serenity.ComponentModel;

namespace Movie.MovieDB.Forms;

[FormScript("MovieDB.MovieCast")]
[BasedOnRow(typeof(MovieCastRow), CheckNames = true)]
public class MovieCastForm
{
    public int PersonId { get; set; }
    public string Character { get; set; }

}
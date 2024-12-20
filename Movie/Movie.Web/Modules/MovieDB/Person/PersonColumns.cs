using Movie.Modules.MovieDB.Person;
using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Movie.MovieDB.Columns;

[ColumnsScript("MovieDB.Person")]
[BasedOnRow(typeof(PersonRow), CheckNames = true)]
public class PersonColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int PersonId { get; set; }
    [EditLink]
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string FullName { get; set; }
    public DateTime BirthDate { get; set; }
    public string BirthPlace { get; set; }
    public Gender Gender { get; set; }
    public int Height { get; set; }
}
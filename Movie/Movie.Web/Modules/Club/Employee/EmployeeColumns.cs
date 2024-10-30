using Movie.Modules.MovieDB.Person;
using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Movie.Club.Columns;

[ColumnsScript("Club.Employee")]
[BasedOnRow(typeof(EmployeeRow), CheckNames = true)]
public class EmployeeColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int EmployeeId { get; set; }
    [EditLink]
    public string FirstName { get; set; }
    public string LastName { get; set; }

    public string ClubName { get; set; }

    public DateTime BirthDate { get; set; }
    public string Address { get; set; }
    public Gender Gender { get; set; }
    public decimal Salary { get; set; }
}
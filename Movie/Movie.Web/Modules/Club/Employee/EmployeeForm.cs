using Movie.Modules.MovieDB.Person;
using Serenity.ComponentModel;
using System;

namespace Movie.Club.Forms;

[FormScript("Club.Employee")]
[BasedOnRow(typeof(EmployeeRow), CheckNames = true)]
public class EmployeeForm
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime BirthDate { get; set; }
    public string Address { get; set; }

    public int ClubId { get; set; }

    public Gender Gender { get; set; }
    public decimal Salary { get; set; }
}
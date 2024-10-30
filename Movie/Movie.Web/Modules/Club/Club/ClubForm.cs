using Serenity.ComponentModel;
using System;

namespace Movie.Club.Forms;

[FormScript("Club.Club")]
[BasedOnRow(typeof(ClubRow), CheckNames = true)]
public class ClubForm
{
    public string ClubName { get; set; }
    public string Code { get; set; }
    public DateTime PingTime { get; set; }
}
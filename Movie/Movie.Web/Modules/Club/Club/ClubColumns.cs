using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Movie.Club.Columns;

[ColumnsScript("Club.Club")]
[BasedOnRow(typeof(ClubRow), CheckNames = true)]
public class ClubColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int ClubId { get; set; }
    [EditLink]
    public string ClubName { get; set; }
    public string Code { get; set; }
    public DateTime PingTime { get; set; }
}
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Movie.Club;

[ConnectionKey("Default"), Module("Club"), TableName("Club")]
[DisplayName("Club"), InstanceName("Club")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
[LookupScript]
public sealed class ClubRow : Row<ClubRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Club Id"), Identity, IdProperty]
    public int? ClubId { get => fields.ClubId[this]; set => fields.ClubId[this] = value; }

    [DisplayName("Club Name"), Size(50), NotNull, QuickSearch, NameProperty]
    public string ClubName { get => fields.ClubName[this]; set => fields.ClubName[this] = value; }

    [DisplayName("Code"), Size(50), NotNull]
    public string Code { get => fields.Code[this]; set => fields.Code[this] = value; }

    [DisplayName("Ping Time")]
    public DateTime? PingTime { get => fields.PingTime[this]; set => fields.PingTime[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field ClubId;
        public StringField ClubName;
        public StringField Code;
        public DateTimeField PingTime;

    }
}
using Movie.Modules.MovieDB.Person;
using Movie.MovieDB;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Demo.Northwind;
using System;
using System.ComponentModel;
using static Movie.ESM.Modules.MovieDB;
using Gender = Movie.Modules.MovieDB.Person.Gender;

namespace Movie.Club;

[ConnectionKey("Default"), Module("Club"), TableName("Employee")]
[DisplayName("Employee"), InstanceName("Employee")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class EmployeeRow : Row<EmployeeRow.RowFields>, IIdRow, INameRow
{

    const string jClub = nameof(jClub);



    [DisplayName("Employee Id"), Identity, IdProperty]
    public int? EmployeeId { get => fields.EmployeeId[this]; set => fields.EmployeeId[this] = value; }

    [DisplayName("First Name"), Size(50), NotNull, QuickSearch, NameProperty]
    public string FirstName { get => fields.FirstName[this]; set => fields.FirstName[this] = value; }

    [DisplayName("Last Name"), Size(50), NotNull]
    public string LastName { get => fields.LastName[this]; set => fields.LastName[this] = value; }


    [DisplayName("ClubName"), ForeignKey(typeof(ClubRow)), LeftJoin(jClub) ]
    [LookupEditor(typeof(ClubRow) , InplaceAdd = true)]
    public int? ClubId { get => fields.ClubId[this]; set => fields.ClubId[this] = value; }

    [DisplayName("Club"), Origin(jClub, nameof(ClubRow.ClubName))]
    public string ClubName { get => fields.ClubName[this]; set => fields.ClubName[this] = value; }


    [DisplayName("Birth Date")]
    public DateTime? BirthDate { get => fields.BirthDate[this]; set => fields.BirthDate[this] = value; }

    [DisplayName("Address"), Size(200)]
    public string Address { get => fields.Address[this]; set => fields.Address[this] = value; }

    [DisplayName("Gender") , DefaultValue(1)]
    public Gender? Gender { get => fields.Gender[this]; set => fields.Gender[this] = value; }

    [DisplayName("Salary"), Size(19), Scale(5), NotNull]
    public decimal? Salary { get => fields.Salary[this]; set => fields.Salary[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field EmployeeId;
        public StringField FirstName;
        public StringField LastName;
        public DateTimeField BirthDate;
        public StringField Address;
        public EnumField<Gender> Gender;
        public DecimalField Salary;


        public Int32Field ClubId;
        public StringField ClubName;


    }
}
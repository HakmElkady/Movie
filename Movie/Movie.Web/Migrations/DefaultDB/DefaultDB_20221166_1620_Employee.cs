using FluentMigrator;

namespace Movie.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20221115_1620)]
public class DefaultDB_20221166_1620_Employee : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("Employee")
       .WithColumn("EmployeeId").AsInt32().Identity()
           .PrimaryKey().NotNullable()
       .WithColumn("FirstName").AsString(50).NotNullable()
       .WithColumn("LastName").AsString(50).NotNullable()
       .WithColumn("BirthDate").AsDateTime().Nullable()
       .WithColumn("Address").AsString(200).Nullable()
       .WithColumn("Gender").AsInt32().Nullable()
       .WithColumn("Salary").AsDecimal().NotNullable();


        
    }

}

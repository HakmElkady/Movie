using FluentMigrator;

namespace Movie.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20221115_1622)]
public class DefaultDB_20221166_1622_AddClub : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("Club")
       .WithColumn("ClubId").AsInt32().Identity()
           .PrimaryKey().NotNullable()
       .WithColumn("ClubName").AsString(50).NotNullable()
       .WithColumn("Code").AsString(50).NotNullable()
       .WithColumn("PingTime").AsDateTime().Nullable();


        Alter.Table("Employee")
           .AddColumn("ClubId").AsInt32().Nullable()
               .ForeignKey("FK_Employee_ClubId", "Club", "ClubId");



    }

}

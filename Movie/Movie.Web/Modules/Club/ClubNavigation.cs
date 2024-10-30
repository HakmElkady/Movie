using Serenity.Navigation;
using MyPages = Movie.Club.Pages;

[assembly: NavigationLink(int.MaxValue, "Club/Employee", typeof(MyPages.EmployeePage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Club/Club", typeof(MyPages.ClubPage), icon: null)]
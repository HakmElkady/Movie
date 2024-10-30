﻿using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Movie.Default.PersonRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Movie.Default.PersonRow;

namespace Movie.Default;

public interface IPersonSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class PersonSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonSaveHandler
{
    public PersonSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}
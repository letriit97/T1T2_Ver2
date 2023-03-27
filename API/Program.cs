
using API.Configurations;
using API.Helpers.Utilities;
using Microsoft.AspNetCore.Http.Features;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();
// Add services to the container.

builder.Services.AddControllers();
builder.Services.Configure<FormOptions>(options =>
{
    options.ValueCountLimit = int.MaxValue;
});

// In-memory cache
builder.Services.AddMemoryCache();

// Setting DBContexts
builder.Services.AddDatabaseConfiguration(builder.Configuration);

// AutoMapper Settings
builder.Services.AddAutoMapperConfiguration();

// Add Identity and Authentication
builder.Services.AddAuthenticationConfigufation(builder.Configuration);

// RepositoryAccessor and Service
builder.Services.AddDependencyInjectionConfiguration();

// Swagger Config
builder.Services.AddSwaggerGenConfiguration();

// Aspose Config
AsposeUtility.Install();

//Exception Handling Middleware Error
builder.Services.AddTransient<ExceptionHandlingMiddleware>();

builder.Services.AddEndpointsApiExplorer();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
app.UseHttpsRedirection();

app.UseRouting();
app.UseMiddleware<ExceptionHandlingMiddleware>();
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

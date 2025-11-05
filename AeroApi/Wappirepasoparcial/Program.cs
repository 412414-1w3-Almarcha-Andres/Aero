using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using Wappirepasoparcial.Models;
using Wappirepasoparcial.Repositories;
using Wappirepasoparcial.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddDbContext<AEROLINEASContext>(options =>
options
.UseSqlServer(builder.Configuration
.GetConnectionString("DefaultConnection")));


builder.Services.AddScoped<IAeroRepo, AeroRepo>();
builder.Services.AddScoped<IService, Service>();

// Habilitar CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost", policy =>
    {
        policy.WithOrigins("http://127.0.0.1:5500")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//**
// Usar CORS
// Usar CORS
app.UseCors("AllowLocalhost");


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace phonebook
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            //services.AddControllers().AddNewtonsoftJson();
            //services.AddMvc().AddJsonOptions(o =>
            //{
            //    o.JsonSerializerOptions.PropertyNamingPolicy = null;
            //    o.JsonSerializerOptions.DictionaryKeyPolicy = null;
            //});

           

            //services.AddMvc(options =>
            //{
            //    options.UseCustomStringModelBinder();
            //    options.AllowEmptyInputInBodyModelBinding = true;
            //    foreach (var formatter in options.InputFormatters)
            //    {
            //        if (formatter.GetType() == typeof(SystemTextJsonInputFormatter))
            //            ((SystemTextJsonInputFormatter)formatter).SupportedMediaTypes.Add(
            //                Microsoft.Net.Http.Headers.MediaTypeHeaderValue.Parse("text/plain"));
            //    }
            //}).AddJsonOptions(options =>
            //{
            //    options.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
            //});

            services.AddCors(options =>
            {
                options.AddPolicy("AllowMyOrigin", builder =>
                     builder.WithOrigins("*").AllowAnyHeader()
                                        .AllowAnyMethod());
            });

            services.AddTransient<dataaccess.IDataService, dataaccess.DataService>();
            services.AddControllers();
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}

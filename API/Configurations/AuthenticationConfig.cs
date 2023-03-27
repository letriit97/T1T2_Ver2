using System.Text;
using API.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace API.Configurations
{
    public static class AuthenticationConfig
    {
        public static void AddAuthenticationConfigufation(this IServiceCollection services, IConfiguration configuration) {
            if (services == null) throw new ArgumentNullException(nameof(services));

            // add Identity
            // services.AddIdentity<ApplicationUser, ApplicationRole>().AddEntityFrameworkStores<T2_DBContext>();
            
            // add autentication
            services.AddAuthentication(x => {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII
                    .GetBytes(configuration.GetSection("AppSettings:Token").Value)),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });
        }
    }
}
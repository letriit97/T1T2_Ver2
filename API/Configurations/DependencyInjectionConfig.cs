using API._Repositories.Interfaces.Accessor;
using API._Repositories.Repositories.Accessor;
using API.Helpers.Utilities;

namespace API.Configurations
{
    public static class DependencyInjectionConfig
    {
        public static void AddDependencyInjectionConfiguration(this IServiceCollection services)
        {
            if (services == null) throw new ArgumentNullException(nameof(services));

            // Add RepositoryAccessor
            // services.AddScoped<IT2RepositoryAccessor, T2RepositoryAccessor>();
            // services.AddScoped<IUOFRepositoryAccessor, UOFRepositoryAccessor>();

            // Add Service
            services.AddScoped<IFunctionUtility, FunctionUtility>();
           
        }
    }
}
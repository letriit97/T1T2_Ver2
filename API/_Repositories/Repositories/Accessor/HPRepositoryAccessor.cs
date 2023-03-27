using API._Repositories.Interfaces.Accessor;
using API.Data;

namespace API._Repositories.Repositories.Accessor
{
    public class HPRepositoryAccessor : IHPRepositoryAccessor
    {
        private HP_DBContext _dbContext;

        public HPRepositoryAccessor(HP_DBContext dbContext)
        {
            _dbContext = dbContext;
            // HP_Style_Article_j09 = new HP_Style_Article_j09_Repository(_dbContext);
        }
        // public IHP_Style_Article_j09_Repository HP_Style_Article_j09 { get; private set; }

        public async Task<bool> Save()
        {
            return await _dbContext.SaveChangesAsync() > 0;
        }
    }
}
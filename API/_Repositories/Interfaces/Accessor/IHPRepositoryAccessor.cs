namespace API._Repositories.Interfaces.Accessor
{
    public interface IHPRepositoryAccessor
    {
        
        // IVW_HP_Style_j08Repository VW_HP_Style_j08 { get; }
        Task<bool> Save();
    }
}

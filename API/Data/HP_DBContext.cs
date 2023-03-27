using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public partial class HP_DBContext : DbContext
    {
        public HP_DBContext()
        {
        }

        public HP_DBContext(DbContextOptions<HP_DBContext> options) : base(options)
        {
            Database.SetCommandTimeout((int)TimeSpan.FromMinutes(10).TotalSeconds);
        }

        // public virtual DbSet<HP_Style_Article_j09> HP_Style_Article_j09 { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // modelBuilder.Entity<HP_Style_j08>(entity =>
            // {
            //     entity.HasNoKey();
            // });
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
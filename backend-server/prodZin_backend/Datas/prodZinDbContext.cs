using Microsoft.EntityFrameworkCore;
using prodZin_backend.Models;

namespace prodZin_backend.Datas
{
    public class prodZinDbContext : DbContext
    {
        public prodZinDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Person> Person { get; set; }
    }
}

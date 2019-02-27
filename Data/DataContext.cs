using DatingAppV2.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingAppV2.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options)
        {
        }

        public DbSet<Value> Values { get; set; }
        
    }
}
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace dataaccess.Models
{
    public class PhoneBooksContext : DbContext
    {
        public PhoneBooksContext() : base()
        {

        }
       
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\;Database=PhoneBooks;Trusted_Connection=True;");
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PhoneBooks>().HasData(new PhoneBooks {Id=1, Name="My PhoneBook" });
            modelBuilder.Entity<PhoneBookEntry>().HasData(new PhoneBookEntry { Id = 1, Name = "Tom", PhoneNumber="011234678", PhoneBooksId=1 });
        }

        public DbSet<PhoneBooks> PhoneBooks { get; set; }
        public DbSet<PhoneBookEntry> PhoneBookEntries{ get; set; }
    }
}

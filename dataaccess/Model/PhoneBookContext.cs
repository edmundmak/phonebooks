using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace dataaccess.Model
{
    public partial class PhoneBookContext : DbContext
    {
        public PhoneBookContext()
        {
        }

        public PhoneBookContext(DbContextOptions<PhoneBookContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Entry> Entries { get; set; }
        public virtual DbSet<PhoneBook> PhoneBooks { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\;Database=PhoneBook;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Entry>(entity =>
            {
                entity.ToTable("Entry");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.PhoneBookId).HasColumnName("PhoneBookID");

                entity.Property(e => e.PhoneNumber).HasMaxLength(50);
            });

            modelBuilder.Entity<PhoneBook>(entity =>
            {
                entity.ToTable("PhoneBook");

                entity.Property(e => e.Id).HasColumnName("ID");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

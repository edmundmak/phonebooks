﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using dataaccess.Models;

namespace dataaccess.Migrations
{
    [DbContext(typeof(PhoneBooksContext))]
    [Migration("20210109165607_seeding")]
    partial class seeding
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("dataaccess.Models.PhoneBookEntry", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("PhoneBooksId")
                        .HasColumnType("int");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("PhoneBooksId");

                    b.ToTable("PhoneBookEntries");
                });

            modelBuilder.Entity("dataaccess.Models.PhoneBooks", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("PhoneBooks");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "My PhoneBook"
                        });
                });

            modelBuilder.Entity("dataaccess.Models.PhoneBookEntry", b =>
                {
                    b.HasOne("dataaccess.Models.PhoneBooks", "PhoneBooks")
                        .WithMany("PhoneBookEntries")
                        .HasForeignKey("PhoneBooksId");

                    b.Navigation("PhoneBooks");
                });

            modelBuilder.Entity("dataaccess.Models.PhoneBooks", b =>
                {
                    b.Navigation("PhoneBookEntries");
                });
#pragma warning restore 612, 618
        }
    }
}
using Microsoft.EntityFrameworkCore;
using server.Modal;
using System;
using System.Collections.Generic;

namespace server.AppDbContext;

public class UnifiedDbContext : DbContext
{
    public UnifiedDbContext(DbContextOptions<UnifiedDbContext> options)
        : base(options)
    {
    }  
     public DbSet<UserStory> UserStories { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<UserStory>().Property(e => e.Priority).HasConversion<string>();
    }
}

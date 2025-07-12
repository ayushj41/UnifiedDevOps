using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Metadata;

namespace server.Modal;
public enum Priority
{
    Low,
    Medium,
    High
}
public class UserStory
{
    [Key]
    public int ID { get; set; }
    [Column(TypeName="nvarchar(30)")]
    public string? StoryId { get; set; } 
    public string? Title { get; set; }
    public string? Status { get; set; }

    public Priority Priority { get; set; }
    public DateTime LastUpdated { get; set; }
    public string? BlockedReason{ get; set; }

}
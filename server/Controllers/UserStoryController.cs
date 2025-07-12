using Microsoft.AspNetCore.Mvc;
using server.AppDbContext;
using server.Modal;
namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserStoryController : ControllerBase
{
    private readonly UnifiedDbContext _userContext;
    public UserStoryController(UnifiedDbContext unifiedDb)
    {
        _userContext = unifiedDb;
    }
    [HttpGet("GetUser")]
    public IActionResult GetUser()
    {
        try
        {
            var stories = _userContext.UserStories.ToList(); // Get all stories
            return Ok(stories);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "Internal server error", error = ex.Message });
        }
    }
    [HttpPost("CreateUser")]
    public IActionResult CreateUser(string title,string status,Priority priority)
    {
        try
        {
            var story = new UserStory
            {
                Title = title,
                Status = status,
                Priority = priority,
                StoryId = $"US-{Guid.NewGuid().ToString().Substring(0, 6)}", // Optional ID generation
                LastUpdated = DateTime.UtcNow
            };
            _userContext.UserStories.Add(story);
            _userContext.SaveChanges();
            return Ok(story);
            
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "Internal server error", error = ex.Message });
        }
    }
}
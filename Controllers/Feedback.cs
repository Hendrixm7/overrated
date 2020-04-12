using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Overrated.Models;

namespace Overrated.Controllers
{
    [Route ("api/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        public DatabaseContext db { get; set; } = new DatabaseContext ();

        [HttpPost]
        public Feedback CreateFeedback (Feedback feedback)
        {
            var restaurant = db.Restaurants.First (r => r.ID == feedback.RestaurantId);
            restaurant.Feedback.Add (feedback);
            db.SaveChanges ();
            return feedback;
        }

    }
}
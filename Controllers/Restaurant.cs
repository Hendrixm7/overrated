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
    public class RestaurantController : ControllerBase
    {
        public DatabaseContext db { get; set; } = new DatabaseContext ();

        [HttpGet]
        public List<Restaurant> GetAllRestaurants ()
        {
            var restaurants = db.Restaurants.OrderBy (m => m.Name).Include (r => r.Feedback);
            return restaurants.ToList ();
        }

        [HttpGet ("search")]
        public List<Restaurant> SearchRestaurantsByName (string name)
        {
            var restaurants = db.Restaurants.Where (restaurant => restaurant.Name.ToLower ().Contains (name)).Include (restaurants => restaurants.Feedback);
            return restaurants.ToList ();
        }

        [HttpGet ("{id}")]
        public ActionResult<Restaurant> GetOneRestaurant (int id)
        {
            var restaurant = db.Restaurants.Include (r => r.Feedback).FirstOrDefault (i => i.ID == id);
            if (restaurant == null)
            {
                return NotFound ();
            }
            return Ok (restaurant);
        }

        [HttpPost]
        public Restaurant CreateRestaurant (Restaurant restaurant)
        {
            db.Restaurants.Add (restaurant);
            db.SaveChanges ();
            return restaurant;
        }

    }

}
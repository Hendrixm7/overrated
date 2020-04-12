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

            return new List<Restaurant> ();

        }

        [HttpGet ("{id}")]
        public ActionResult<Restaurant> GetOneRestaurant (int id)
        {

            return Ok (new Restaurant ());

        }

        [HttpPost]
        public Restaurant CreateRestaurant (Restaurant restaurant)
        {

            return new Restaurant ();
        }

    }

}
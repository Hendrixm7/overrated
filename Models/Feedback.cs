using System;
using System.Text.Json.Serialization;

namespace Overrated.Models
{
    public class Feedback
    {
        public int ID { get; set; }
        public string Comment { get; set; }
        public bool Overrated { get; set; }
        public DateTime Datestamp { get; set; } = DateTime.Now;

        public int RestaurantId { get; set; }

        [JsonIgnore]
        public Restaurant Restaurant { get; set; }
    }
}
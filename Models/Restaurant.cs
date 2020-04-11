using System.Collections.Generic;

namespace Overrated.Models
{
    public class Restaurant
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }

        public List<Feedback> Feedback { get; set; } = new List<Feedback> ();
    }
}
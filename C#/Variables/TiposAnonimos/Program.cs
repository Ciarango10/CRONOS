namespace TiposAnonimos
{
    class Program
    {
        static void Main(string[] args)
        {
            var carlos = new
            {
                Name = "Carlos",
                Country = "Colombia"
            };

            Console.WriteLine($"{carlos.Name} {carlos.Country}");

            var beers = new[]
            {
                new {Name = "Red", Brand="Delirium"},
                new {Name = "London Porter", Brand="Fullers"},
            };

            foreach (var b in beers)
            {
                Console.WriteLine($"Cerveza {b.Name} {b.Brand}");
            }
        }
    }
}
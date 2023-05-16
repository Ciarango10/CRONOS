namespace Tuplas
{
    class Program
    {
        static void Main(string[] args)
        {
            (int id, string name) product = (1, "Cerveza stout");
            
            Console.WriteLine($"{product.id} {product.name}");

            product.name = "Cerveza porter";
            
            Console.WriteLine($"{product.id} {product.name}");

            var person = (1, "Carlos");//Otra forma de crear tuplas
            Console.WriteLine($"Persona {person.Item1} {person.Item2}");

            var people = new[] 
            {
                (1,"Carlos"),
                (2,"Pedro"),
                (3,"Juan")
            };
            
            foreach(var p in people)
            {
                Console.WriteLine($"{p.Item1} {p.Item2}");
            }

            (int id, string name)[] people2 = new[]
            {
                (1,"Carlos"),
                (2,"Pedro"),
                (3,"Juan")
            };

            foreach (var p in people2)
            {
                Console.WriteLine($"{p.id} {p.name}");
            }

            var cityInfo = getLocationMED();
            Console.WriteLine($"Lat: {cityInfo.lat} long: {cityInfo.lng} nombre: {cityInfo.name}");

            var (_, lng, _) = getLocationMED();//Obtener solo un valor de la tupla
            Console.WriteLine(lng);
        }

        public static (float lat, float lng, string name) getLocationMED()
        {
            float lat = 19.2121f;
            float lng = -99.19242f;
            string name = "Medellin";

            return (lat,lng,name);  
        }
    }
}

using System.Globalization;

namespace Interface
{
    class Program
    {
        static void Main(string[] args)
        {
            Shark[] sharks = new Shark[]
            {
                new Shark("Tiburonsin", 56),
                new Shark("Jaws",65)
            };

            IFish[] fish = new IFish[]
            {
                new Sirena(100),
                new Shark("Tiburonsin",56)
            };

            ShowFish(sharks);
            ShowAnimals(sharks);
            ShowFish(fish);
        }
        public static void ShowAnimals(IAnimal[] animals)
        {
            Console.WriteLine("- Mostramos los peces --");
            int i = 0;
            while (i < animals.Length)
            {
                Console.WriteLine(animals[i].Name);
                i++;
            }
        }
        public static void ShowFish(IFish[] fish)
        {
            Console.WriteLine("- Mostramos los peces --");
            int i = 0;
            while(i < fish.Length)
            {
                Console.WriteLine(fish[i].Swim());
                i++;
            }
        }
    }


    public class Sirena : IFish
    {
        public int Speed { get; set; }

        public Sirena(int Speed)
        {
            this.Speed = Speed;
        }

        public string Swim()
        {
            return $"La sirena nada a {Speed}km/h";
        }
    }
    
    public class Shark : IAnimal, IFish
    {
        public string Name { get; set; }
        public int Speed { get; set; }

        public Shark(String Name, int Speed)
        {
            this.Name = Name;
            this.Speed = Speed;
        }

        public string Swim()
        {
            return $"{Name} Nada {Speed} km/h ";
        }
    }
    public interface IAnimal
    {
        public string Name { get; set; }
    }

    public interface IFish
    {
        public int Speed { get; set; }
        public string Swim();
    }
} 
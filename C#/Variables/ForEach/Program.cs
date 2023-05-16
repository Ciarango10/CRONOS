using System.Collections.Generic;

namespace ForEach
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = new List<int>()
            {
                23,3,5,10,22,12
            };

            foreach (int number in numbers)
            {
                Console.WriteLine(number);
            }

            List<People> students = new List<People>() // es igual a var students = new List<People>() 
            {
                new People(){Name = "Hector", Country = "Mexico"},
                new People(){Name = "Roberto", Country = "Argentina"},
                new People(){Name = "Ana", Country = "USA"},
            };

            Show(students);
            
            students.RemoveAt(0);
            
            Show(students);
        }
       
        static void Show(List<People> students)
        {
            Console.WriteLine("-- Personas --");
            foreach (var people in students)
            {
                Console.WriteLine($"Nombre:{people.Name}, Pais: {people.Country}");
            }  
        }
    }

    class People
    {
        public string Name { get; set; }
        public string Country { get; set; }
    }
}
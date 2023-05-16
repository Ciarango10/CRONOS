using BaseDeDatos.Models;
using System.Collections.Concurrent;
using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;
using System.Xml.Linq;

namespace BaseDeDatos
{   
    class Program
    {
        static void Main(string[] args)
        {
            try 
            {

                var persona = new List<Persona>();
                persona.Add(new Persona()
                {
                     IDPersona = Guid.NewGuid(),
                     Nombres = "Carlos Andres",
                     Apellidos = "Arango",
                     Edad = 16
                });

                persona.Add(new Persona()
                {
                    IDPersona = Guid.NewGuid(),
                    Nombres = "Carlos Eduardo",
                    Apellidos = "Lopez",
                    Edad = 18
                });
                var detalle = (from c in persona where c.Edad == 18 select c).FirstOrDefault();
                bool again = true;
                //int op = 0;

                do
                {
                    //ShowMenu();
                    //Console.WriteLine("Elige una opcion: ");
                    //op = int.Parse(Console.ReadLine());

                    //switch (op)
                    //{
                    //    case 1:
                    //        Show(beerDB);
                    //        break;
                    //    case 2:
                    //        Add(beerDB);
                    //        break;
                    //    case 3:
                    //        Edit(beerDB);
                    //        break;
                    //    case 4:
                    //        Delete(beerDB);
                    //        break;
                    //    case 5:
                    //        again = false;
                    //        break;
                    //}
                } while (again);

            }
            catch (SqlException )
            {
                Console.WriteLine("No pudimos conectarnos");
            }
        }

        //public static void ShowMenu()
        //{
        //    Console.WriteLine("\n--------Menu--------");
        //    Console.WriteLine("1.- Mostrar");
        //    Console.WriteLine("2.- Agregar");
        //    Console.WriteLine("3.- Editar");
        //    Console.WriteLine("4.- Eliminar");
        //    Console.WriteLine("5.- Salir");
        //}

        //public static void Show(BeerDB beerDB)
        //{
        //    Console.Clear();
        //    Console.WriteLine("Cervezas de la base de datos");
        //    List<Beer> beers = beerDB.GetAll();

        //    foreach (var beer in beers)
        //    {
        //        Console.WriteLine($"Id: {beer.Id} Nombre: {beer.Name}");
        //    }
        //}

        //public static void Add(BeerDB beerDB)
        //{
        //    Console.Clear();
        //    Console.WriteLine("Agregar nueva cerveza");
        //    Console.WriteLine("Escribe el nombre: ");
        //    string name = Console.ReadLine();
        //    Console.WriteLine("Escribe el Id de la marca:");
        //    int brandId = int.Parse(Console.ReadLine());
        //    Beer beer = new Beer(name,brandId);
        //    beerDB.Add(beer);
        //}

        //public static void Edit(BeerDB beerDB)
        //{
        //    Console.Clear();
        //    Show(beerDB);
        //    Console.WriteLine("Editar Cerveza");
        //    Console.WriteLine("Escribe el Id de tu cerveza a editar: ");
        //    int id = int.Parse(Console.ReadLine());
            
        //    Beer beer = beerDB.Get(id);
        //    if(beer != null)
        //    {
        //        Console.WriteLine("Escribe el nombre: ");
        //        string nombre = Console.ReadLine();
        //        Console.WriteLine("Escribe el Id de la marca: ");
        //        int brandId = int.Parse(Console.ReadLine());

        //        beer.Name = name;
        //        beer.BrandId = brandId;
        //        beerDB.Edit(beer);

        //    }
        //    else
        //    {
        //        Console.WriteLine("La cerveza no existe");
        //    }
            
        //}

        //public static void Delete(BeerDB beerDB)
        //{
        //    Console.Clear();
        //    Show(beerDB);
        //    Console.WriteLine("Eliminar Cerveza");
        //    Console.WriteLine("Escribe el Id de tu cerveza a eliminar: ");
        //    int id = int.Parse(Console.ReadLine());

        //    Beer beer = beerDB.Get(id);
        //    if (beer != null)
        //    {
        //        beerDB.Delete(id);
        //    }
        //    else
        //    {
        //        Console.WriteLine("La cerveza no existe");
        //    }

        //}
    }
}

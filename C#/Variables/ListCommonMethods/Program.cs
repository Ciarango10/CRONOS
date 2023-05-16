using System.Collections.Generic;

namespace ListCommonMethods
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = new List<int>()
            {
                4,3,5,19
            };
            
            Show(numbers);
            
            //Insert
            numbers.Insert(1, 6);//INSERTAR UN NUMERO. (POSICION),(VALOR)

            Show(numbers);
           
            //Contains
            if (numbers.Contains(19))//CONFIRMAR SI UN ARREGLO CONTIENE UN NUMERO
                Console.WriteLine("Existe");
            else
                Console.WriteLine("No Existe");

            //IndexOF
            int pos = numbers.IndexOf(19);
            Console.WriteLine(pos);
            pos = numbers.IndexOf(100);//SABER EN QUE POSICION ESTA. SI EL ELEMENTO NO EXITE REGRESA -1.
            Console.WriteLine(pos);

            //Sort
            numbers.Sort();//ORGANIZA LA LISTA ASCENDENTEMENTE
            Show(numbers);

            //Add Range
            var numbers2 = new List<int>()
            {
                300,200,400
            };

            numbers.AddRange(numbers2);

            Show(numbers);

            string name = "Hector";//STRING ES INMUTABLE, POR TANTO HAY QUE HACER ASIGNACION
            name = name.ToUpper();
            Console.WriteLine(name);
        }

        public static void Show(List<int> numbers)
        {
            Console.WriteLine("-- Numeros --");
            foreach (var n in numbers)
            {
                Console.WriteLine(n);
            }
        }
    }
}

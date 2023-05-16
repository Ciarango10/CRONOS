namespace While
{
    class Program
    {
        static void Main(string[] args)
        {
            int i = 0;

            while (i < 10)
            {
                Console.WriteLine("Iteracion de i " + i);
                i++;
            }

            int j = 0;

            while (j < 10)
            {
                if (j > 10)
                    break;

                Console.WriteLine("Iteracion de j " + j);
                j++;
            }

            string[] friends = new string[7]{
                "Pancho",
                "Ana",
                "Paco",
                "Ruben",
                "Karla",
                "Luis",
                "Carlos"
            };

            int index = 0;

            while (index < friends.Length)
            {
                Console.WriteLine(friends[index]);
                index++;
            }

            bool run = false;
            do
            {
                Console.WriteLine("Entro una vez y ya");
            } while (run);

        }
    }
}
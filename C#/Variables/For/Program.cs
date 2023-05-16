namespace For
{    
    class Program
    {
        static void Main(string[] args)
        {
        
            string[] friends = new string[7]{
                "Pancho",
                "Ana",
                "Paco",
                "Ruben",
                "Karla",
                "Luis",
                "Carlos"
            };

            bool run = true;
            for(int i=0; i<friends.Length && run; i++)
            {
                Console.WriteLine(friends[i]);
            }

        }
    }
}

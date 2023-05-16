namespace Excepciones
{
    class Program
    {
        static void Main(string[] args)
        {
            try 
            {
                string content = File.ReadAllText(@"C:\\Users\\Usuario\\Desktop\\CRONOS\Importante.txt");//forma de leer un archivo
                Console.WriteLine(content);

                string content2 = File.ReadAllText(@"C:\\Users\\Usuario\\Desktop\\CRONOS\Importante2.txt");//forma de leer un archivo
                Console.WriteLine(content2);

                throw new Exception("Ocurrio algo raro");
            }
            catch (FileNotFoundException ex)
            {
                Console.WriteLine("El archivo no existe");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                Console.WriteLine("Aqui me he ejecutado, pase lo que pase");
            }

            Console.WriteLine("Aqui se sigue ejecutando");
        }
    }
}

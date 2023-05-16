using System.Reflection.Metadata.Ecma335;

namespace Ejemplos.Models
{
    public class PersonaViewModel
    {
        public  Guid Id { get; set; }
        public string Identificacion { get; set; }
        public string Nombres { get; set; }

        public string Apellidos { get; set; }

        public int Celular { get; set; }

        public int Edad { get; set; }

        public string Email { get; set; }

        public bool EsTrabajador { get; set; }

        public DateTime FechaNacimiento { get; set; }

        public double Ingresos{ get; set; }
    }
}

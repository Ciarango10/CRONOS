namespace Kendo.Models
{
    public class PersonaModel
    {
        public string Identificacion { get; set; }
        public string Nombres { get; set; }

        public string Apellidos { get; set; }

        public bool EsTrabajador { get; set; }

        public int Celular { get; set; }

        public string Email { get; set; }

        public DateTime FechaNacimiento { get; set; }

        public int Edad { get; set; }

        public double Ingresos { get; set; }

    }
}

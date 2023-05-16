using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BaseDeDatos.Models
{
    public class Persona
    {
        public Guid IDPersona { get; set; }
        public string Nombres { get; set; }

        public string Apellidos { get; set; }

        public int Edad { get; set; }
    }
}

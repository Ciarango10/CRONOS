using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaEntidad
{
   public class PersonaCLS
    {

        public int iidpersona { get; set; }

        //Nombre (Persona)
        public string nombre { get; set; }

        public string appaterno { get; set; }

        public string apmaterno { get; set; }

        public string correo { get; set; }

        public string direccion { get; set; }

        public int iidsexo { get; set; }

        public string numerotelefonico { get; set; }

        public int bempleado { get; set; }

        public int iidsucursal { get; set; }
        //Columnas calculadas

        public string nombrecompleto { get; set; }
        //Nombre del sexo
        public string nombresexo { get; set; }
        public int btieneusuario { get; set; }
        public string nombreusuario { get; set; }
        public int iidusuario { get; set; }
        public int iidtipousuario { get; set; }


    }
}

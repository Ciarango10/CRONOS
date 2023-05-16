using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaEntidad
{
   public class MedicamentoCLS
    {
        //Propiedades para el listado
        public int iidmedicamento { get; set; }
        public string codigoMedicamento { get; set; }
        public string nombremedicamento { get; set; }
        public string nombrelaboratorio { get; set; }
        public string nombretipomedicamento { get; set; }
        //Combo (Name)
        public int iidlaboratorio { get; set; }

        public int iidtipomedicamento { get; set; }
        //Guardar
        public string usomedicamento { get; set; }

        public string contenido { get; set; }


    }
}

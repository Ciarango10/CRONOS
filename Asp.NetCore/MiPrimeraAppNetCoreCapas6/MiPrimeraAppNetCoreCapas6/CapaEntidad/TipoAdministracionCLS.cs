using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaEntidad
{
   public class TipoAdministracionCLS
    {
        public int iidtipoadministracion { get; set; }
        public string nombre { get; set; }
        public string descripcion { get; set; }
        //recibo()
        public int[] estado { get; set; }
        //Enviar(string)
        public string estados { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaEntidad;
using CapaDatos;

namespace CapaNegocio
{
  public  class TipoAdministracionBL
    {

        public List<TipoAdministracionCLS> filtrarTipoAdministracion(TipoAdministracionCLS obj)
		{
            TipoAdministracionDAL oTipoAdministracionDAL = new TipoAdministracionDAL();
            return oTipoAdministracionDAL.filtrarTipoAdministracion(obj);
        }

        public int eliminarTipoAdministracion(int id)
        {
            TipoAdministracionDAL obj = new TipoAdministracionDAL();
            return obj.eliminarTipoAdministracion(id);
        }
        public int guardarTipoAdministracion(TipoAdministracionCLS oTipoAdministracionCLS)
        {
            TipoAdministracionDAL obj = new TipoAdministracionDAL();
            return obj.guardarTipoAdministracion(oTipoAdministracionCLS);
        }
        public List<TipoAdministracionCLS> listarTipoAdministracion()
        {
            TipoAdministracionDAL obj = new TipoAdministracionDAL();
            return obj.listarTipoAdministracion();
        }

    }
}

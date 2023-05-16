using CapaEntidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaDatos;

namespace CapaNegocio
{
   public class TipoUsuarioBL
    {
        public int guardarDatos(TipoUsuarioCLS oTipoUsuarioCLS)
		{
            TipoUsuarioDAL oTipoUsuarioDAL = new TipoUsuarioDAL();
            return oTipoUsuarioDAL.guardarDatos(oTipoUsuarioCLS);
        }
        public TipoUsuarioCLS recuperarTipoUsuario(int iidtipousuario)
		{
            TipoUsuarioDAL oTipoUsuarioDAL = new TipoUsuarioDAL();
            return oTipoUsuarioDAL.recuperarTipoUsuario(iidtipousuario);
        }
        public List<TipoUsuarioCLS> filtrarTipoUsuario(TipoUsuarioCLS obj)
        {
            TipoUsuarioDAL oTipoUsuarioDAL = new TipoUsuarioDAL();
            return oTipoUsuarioDAL.filtrarTipoUsuario(obj);
        }
        public List<TipoUsuarioCLS> listarTipoUsuario()
        {
            TipoUsuarioDAL oTipoUsuarioDAL = new TipoUsuarioDAL();
            return oTipoUsuarioDAL.listarTipoUsuario();
        }

    }
}

using CapaEntidad;
using CapaNegocio;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiPrimeraAppNetCoreCapas6.Filter;
namespace MiPrimeraAppNetCoreCapas6.Controllers
{
    public class TipoUsuarioController : Controller
    {
        public List<TipoUsuarioCLS> filtrarTipoUsuario(TipoUsuarioCLS obj)
        {
            TipoUsuarioBL oTipoUsuarioBL = new TipoUsuarioBL();
            return oTipoUsuarioBL.filtrarTipoUsuario(obj);
        }
        [ServiceFilter(typeof(Seguridad))]
        public IActionResult Index()
        {
            return View();
        }

        public int guardarTipoUsuario(TipoUsuarioCLS oTipoUsuarioCLS)
		{
            TipoUsuarioBL obj = new TipoUsuarioBL();
            return obj.guardarDatos(oTipoUsuarioCLS);
        }

        public TipoUsuarioCLS recuperarTipoUsuario(int iidtipousuario)
		{
            TipoUsuarioBL obj = new TipoUsuarioBL();
            return obj.recuperarTipoUsuario(iidtipousuario);
        }

        public List<TipoUsuarioCLS> listarTipoUsuario()
        {
            TipoUsuarioBL obj = new TipoUsuarioBL();
            return obj.listarTipoUsuario();
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CapaEntidad;
using CapaNegocio;
using CapaDatos;
using MiPrimeraAppNetCoreCapas6.Filter;
namespace MiPrimeraAppNetCoreCapas6.Controllers
{
    public class TipoAdministracionController : Controller
    {
        [ServiceFilter(typeof(Seguridad))]
        public IActionResult Index()
        {
            return View();
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

        public List<TipoAdministracionCLS> filtrarTipoAdministracion(TipoAdministracionCLS objTipoAd)
        {
            TipoAdministracionDAL obj = new TipoAdministracionDAL();
			if (objTipoAd.estado == null)
			{
                objTipoAd.estados = "";

			}
			else
			{
                objTipoAd.estados =  String.Join(',' ,objTipoAd.estado);

            }
            return obj.filtrarTipoAdministracion(objTipoAd);
        }


        public int eliminarTipoAdministracion(int id)
        {
            TipoAdministracionDAL obj = new TipoAdministracionDAL();
            return obj.eliminarTipoAdministracion(id);
        }

    }
}

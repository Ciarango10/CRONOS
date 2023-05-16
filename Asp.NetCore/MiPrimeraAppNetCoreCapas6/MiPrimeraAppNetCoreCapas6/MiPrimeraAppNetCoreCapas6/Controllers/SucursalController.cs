using CapaEntidad;
using CapaNegocio;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using MiPrimeraAppNetCoreCapas6.Filter;
namespace MiPrimeraAppNetCoreCapas6.Controllers
{
    public class SucursalController : Controller
    {
        [ServiceFilter(typeof(Seguridad))]
        public IActionResult Index()
        {
            return View();
        }
        //Creare un metodo que se comunique con la capa de negocio
        public List<SucursalCLS> listarSucursal()
        {
            SucursalBL obj = new SucursalBL();
            return obj.listarSucursal();
        }

        public List<SucursalCLS> filtrarSucursal(string nombresucursal)
        {
            SucursalBL obj = new SucursalBL();
            return obj.filtrarSucursal(nombresucursal);

        }

        public int GuardarDatos(SucursalCLS oSucursalCLS,IFormFile fotoEnviar)
        {
            //IFormFile a byte[]
            byte[] buffer = null;
            string nombreFoto = "";
            if (fotoEnviar != null)
            {
                using (MemoryStream ms = new MemoryStream())
                {
                    fotoEnviar.CopyTo(ms);
                    nombreFoto = fotoEnviar.FileName;
                    //Array de Bytes
                    buffer = ms.ToArray();
                    oSucursalCLS.foto = buffer;
                    oSucursalCLS.nombrefoto = nombreFoto;
                }
            }
          
            SucursalBL obj = new SucursalBL();

            return obj.guardarSucursal(oSucursalCLS);
        }

        public SucursalCLS recuperarSucursal(int iidsucursal)
        {
            SucursalBL obj = new SucursalBL();
            return obj.recuperarSucursal(iidsucursal);
        }

    }
}

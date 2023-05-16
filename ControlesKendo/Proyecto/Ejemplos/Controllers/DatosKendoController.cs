using Ejemplos.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace Ejemplos.Controllers
{
    public class DatosKendoController : Controller
    {
        List<DatosKendoModel> lstDatos = null;
        public DatosKendoController()
        {
            var datos = System.IO.File.ReadAllText("D:\\Usuario\\Escritorio\\Json.json");
            if (datos != null)
            {
                lstDatos = new List<DatosKendoModel>();
                lstDatos = Newtonsoft.Json.JsonConvert.DeserializeObject<List<DatosKendoModel>>(datos);
            }
        }
            
        public JsonResult DatosTreelist()
        {
            return Json(lstDatos);
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

using Kendo.Models;
using Microsoft.AspNetCore.Mvc;

namespace Kendo.Controllers
{
    public class DataManagementController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult FileManager()
        {
            return View();
        }

        public IActionResult Filter()
        {
            return View();
        }

        public IActionResult Grid() 
        { 
            return View();
        }

        public IActionResult Grid2()
        {
            return View();
        }

        public IActionResult Spreadsheet()
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult<string>> Enviar(IEnumerable<IFormFile> filemanager)
        {
            foreach (var item in filemanager)
            {
              using var ms = new MemoryStream();
                await item.CopyToAsync(ms);

                await System.IO.File.WriteAllBytesAsync("", ms.ToArray());
            }

            return "";
        }

        public ActionResult DatosGrid()
        {
            var persona = new List<PersonaModel>();
            persona.Add(new PersonaModel { Identificacion = "1025643641", 
                Nombres = "Carlos", 
                Apellidos ="Arango",
                Celular = 316333892,
                Edad = 17,
                Email= "carlosa@gmail.com",
                EsTrabajador = true,
                FechaNacimiento = new DateTime(2005,01,31),
                Ingresos = 600000
            });

            return Json(persona);
        }
        List<TreeMapModel> lstDatosTreeMap = null;

        public DataManagementController()
        {
            var datosTreeMap = System.IO.File.ReadAllText("D:\\Usuario\\Escritorio\\TreeMap.json");
            if(datosTreeMap != null)
            {
                lstDatosTreeMap = new List<TreeMapModel>();
                lstDatosTreeMap = Newtonsoft.Json.JsonConvert.DeserializeObject<List<TreeMapModel>>(datosTreeMap);
            }
        }
        public ActionResult DatosTreeMap()
        {
            return Json(lstDatosTreeMap);
        }
    }
}

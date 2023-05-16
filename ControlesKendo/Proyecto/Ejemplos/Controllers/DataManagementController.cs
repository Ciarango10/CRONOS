using Ejemplos.Models;
using Microsoft.AspNetCore.Mvc;

namespace Ejemplos.Controllers
{
    public class DataManagementController : Controller
    {
        List<PersonaViewModel> persona;

        public DataManagementController()
        {
            persona= new List<PersonaViewModel>();
            persona.Add(new PersonaViewModel
            {
                Id = Guid.NewGuid(),
                Identificacion = "1025643641",
                Nombres = "Carlos",
                Apellidos = "Arango",
                Celular = 316333990,
                Edad = 17,
                Email = "carlos.a@gmail.com",
                EsTrabajador = true,
                FechaNacimiento = new DateTime(2005, 01, 31),
                Ingresos = 600000
            });
            persona.Add(new PersonaViewModel
            {
                Id = Guid.NewGuid(),
                Identificacion = "10",
                Nombres = "Ivan",
                Apellidos = "Londono",
                Celular = 316333990,
                Edad = 17,
                Email = "carlos.a@gmail.com",
                EsTrabajador = false,
                FechaNacimiento = DateTime.Now,
                Ingresos = 700000
            });
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Grid() 
        {
            return View();
        }

        public IActionResult PivotGrid()
        {
            return View();
        }

        public IActionResult Pager()
        {
            return View();
        }

        public IActionResult Spreadsheet()
        {
            return View();
        }
        public IActionResult ListView()
        {
           return View();
        }

        public IActionResult TaskBoard()
        {
            return View();
        }

        public IActionResult TreeList()
        {
            return View();
        }

        public IActionResult Chart()
        {
            return View();
        }

        public JsonResult DatosGrid() 
        {
            
            
            //persona = (from c in persona
            //           where c.Identificacion == identificacion
            //           select c).ToList();

            return Json(persona);
        }

        public JsonResult DatosGridFiltrados(string identificacion)
        {
            //var idPersona = Guid.Parse(id);
            var filtro = (from c in persona
                          where c.Identificacion == identificacion
                          select c).FirstOrDefault();

            return Json(filtro);
        }

        public JsonResult ActualizarDatos()
        {

            return Json(persona);
        }
    }

    
}

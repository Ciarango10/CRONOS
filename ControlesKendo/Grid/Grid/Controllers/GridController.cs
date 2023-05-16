using Grid.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Grid.Controllers
{
    public class GridController : Controller
    {
        List<GridViewModel> lstGrid = null;
        public GridController() 
        {
            var datosGrid = System.IO.File.ReadAllText("D:\\Usuario\\Escritorio\\JSON\\Grid.json");
            if (datosGrid != null)
            {
                lstGrid = new List<GridViewModel>();
                lstGrid = Newtonsoft.Json.JsonConvert.DeserializeObject<List<GridViewModel>>(datosGrid);
            }
        }
        public IActionResult Index()
        {
            return View();
        }

        public JsonResult DatosGrid()
        {
            return Json(lstGrid);
        }
    }
}

using Microsoft.AspNetCore.Mvc;

namespace Kendo.Controllers
{
    public class PdfController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult PdfExport() 
        {
            return View();
        }

        public IActionResult PdfViewer() 
        {
            return View();
        }
    }
}

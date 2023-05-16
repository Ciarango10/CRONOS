using Microsoft.AspNetCore.Mvc;

namespace Kendo.Controllers
{
    public class BarcodeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Barcode() { 
            return View();
        }

        public IActionResult Qrcode()
        {
            return View();
        }
    }
}

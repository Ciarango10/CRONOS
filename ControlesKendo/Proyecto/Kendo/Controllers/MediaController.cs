using Microsoft.AspNetCore.Mvc;

namespace Kendo.Controllers
{
    public class MediaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult MediaPlayer()
        {
            return View();
        }

        public IActionResult ScrollView()
        {
            return View();
        }
    }
}

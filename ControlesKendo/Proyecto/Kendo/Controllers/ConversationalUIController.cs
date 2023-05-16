using Microsoft.AspNetCore.Mvc;

namespace Kendo.Controllers
{
    public class ConversationalUIController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Chat() 
        {
            return View();
        }
    }
}

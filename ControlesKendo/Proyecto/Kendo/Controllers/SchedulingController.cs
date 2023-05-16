using Microsoft.AspNetCore.Mvc;

namespace Kendo.Controllers
{
    public class SchedulingController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Calendar() 
        {
            return View();
        }

        public IActionResult MultiViewCalendar()
        {
            return View();
        }

        public IActionResult Gantt()
        {
            return View();
        }

        public IActionResult Scheduler()
        {
            return View();
        }
    }
}

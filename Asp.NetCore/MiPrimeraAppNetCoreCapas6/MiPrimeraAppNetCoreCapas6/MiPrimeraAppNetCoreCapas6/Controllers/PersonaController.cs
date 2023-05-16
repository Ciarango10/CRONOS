using CapaEntidad;
using CapaNegocio;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiPrimeraAppNetCoreCapas6.Filter;
namespace MiPrimeraAppNetCoreCapas6.Controllers
{
  
    public class PersonaController : Controller
    {
        public int guardarPersona(PersonaCLS oPersonaCLS,UsuarioCLS ousuario)
		{
            PersonaBL oPersonaBL = new PersonaBL();
            return oPersonaBL.guardarPersona(oPersonaCLS, ousuario);
        }
        public PersonaCLS recuperarPersona(int iidpersona)
		{
            PersonaBL oPersonaBL = new PersonaBL();
            return oPersonaBL.recuperarPersona(iidpersona);
        }
        [ServiceFilter(typeof(Seguridad))]
        public IActionResult Index()
        {
            return View();
        }

        public List<PersonaCLS> listarPersona()
        {
            PersonaBL oPersonaBL = new PersonaBL();
            return oPersonaBL.listarPersona();
        }

        public List<PersonaCLS> filtrarPersona(PersonaCLS oPersonaCLS)
        {
            PersonaBL oPersonaBL = new PersonaBL();
            return oPersonaBL.filtrarPersona(oPersonaCLS);
        }

    }
}

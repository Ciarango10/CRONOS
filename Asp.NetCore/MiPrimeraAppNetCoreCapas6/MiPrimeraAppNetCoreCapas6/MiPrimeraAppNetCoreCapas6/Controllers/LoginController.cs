using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CapaEntidad;
using CapaNegocio;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace MiPrimeraAppNetCoreCapas6.Controllers
{
	public class LoginController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}

		public IActionResult CerrarSesion()
		{
			HttpContext.Session.Remove("persona");
			return RedirectToAction("Index");
		}

		public List<PaginaCLS> listarMenu(int iidtipousuario)
		{
			PaginaBL opaginaBL = new PaginaBL();
			return opaginaBL.listarMenu(iidtipousuario);
		}

		public PersonaCLS login(string usuario, string contra)
		{
			PersonaBL oPersonaBL = new PersonaBL();
			PersonaCLS oPersonaCLS = oPersonaBL.login(usuario, contra);
			if (oPersonaCLS.iidusuario != 0)
			{
				//Logueo (Voy a crear una variable Session)
				string objCadena = JsonConvert.SerializeObject(oPersonaCLS);
				HttpContext.Session.SetString("persona", objCadena);
				int iidtipousuario= oPersonaCLS.iidtipousuario;
				List<PaginaCLS> listapagina= listarMenu(iidtipousuario);
				string objLista = JsonConvert.SerializeObject(listapagina);
				HttpContext.Session.SetString("menus", objLista);
			}
			else
			{
				HttpContext.Session.Remove("persona");
			}
			return oPersonaCLS;
		}

	}
}

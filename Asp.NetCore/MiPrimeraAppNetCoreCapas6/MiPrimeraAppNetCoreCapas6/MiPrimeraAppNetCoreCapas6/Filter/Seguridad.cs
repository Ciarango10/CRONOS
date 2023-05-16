using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using CapaEntidad;

namespace MiPrimeraAppNetCoreCapas6.Filter
{
	public class Seguridad : IActionFilter
	{
		public void OnActionExecuted(ActionExecutedContext context)
		{
			
		}

		public void OnActionExecuting(ActionExecutingContext context)
		{
			var usu = context.HttpContext.Session.GetString("persona");
			string cadenaMenus=  context.HttpContext.Session.GetString("menus");
			if (cadenaMenus != null)
			{
				//Controller y acciones (Vistas)
				List<PaginaCLS> listamenu = JsonConvert.DeserializeObject<List<PaginaCLS>>(cadenaMenus);
				string nombreController = ((ControllerBase)context.Controller).
					ControllerContext.ActionDescriptor.ControllerName;
				string accionController = ((ControllerBase)context.Controller).
					ControllerContext.ActionDescriptor.ActionName;
				int cantidad = listamenu.Where(p => p.controlador.ToUpper() == nombreController.ToUpper() 
				&& p.accion.ToUpper() == accionController.ToUpper()).Count();
				if (cantidad == 0)
				{
					context.Result = new RedirectResult("Login");
				}

			}
			if (usu == null)
			{
				context.Result = new RedirectResult("Login");
			}
		}
	}
}

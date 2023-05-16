using CapaEntidad;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;
using System;

namespace MiPrimeraAppNetCoreCapas6.Models
{
    public class ErrorViewModel:PageModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);


        public PersonaCLS OnGet()
		{
          
          string datacadena=  HttpContext.Session.GetString("persona");
          PersonaCLS obj = JsonConvert.DeserializeObject<PersonaCLS>(datacadena);
          return obj;
        }

    }
}

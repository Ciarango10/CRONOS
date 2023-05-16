using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.Extensions.Configuration;

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CapaNegocio;
using CapaEntidad;
using System.IO;
using MiPrimeraAppNetCoreCapas6.Filter;

namespace MiPrimeraAppNetCoreCapas6.Controllers
{
    
    public class TipoMedicamentoController : Controller
    {
        [ServiceFilter(typeof(Seguridad))]
        public IActionResult Index()
        {
            
            return View();
        }

        public IActionResult Inicio()
        {
            return View();
        }
        public IActionResult SinMenu()
        {
            return View();
        }
        //string
        public string saludo()
        {
            return "Hola amigos";
        }
        public string saludoNombre(string nombre)
        {
            return "Bienvenido " + nombre;
        }
        public string saludoNombreApellido(string nombre,string apellido)
        {
            return "Bienvenido " + nombre+" "+apellido;
        }
        public int numeroentero()
        {
            return 10;
        }
        public double numerodecimal()
        {
            return 5.6;
        }

        public List<TipoMedicamentoCLS> listarTipoMedicamento()
        {
            TipoMedicamentoBL obj = new TipoMedicamentoBL();
            return obj.listarTipoMedicamento();
        }
        //Ejemplo sepas leer lo que ponemos en el appsettings.json
        public string cadena()
        {

            IConfigurationBuilder builder = new ConfigurationBuilder();
            builder.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"));
            var root = builder.Build();
            var cadenaDato = root.GetConnectionString("cn");
            return cadenaDato;
           
        }

        public TipoMedicamentoCLS recuperarTipomedicamento(int iidtipomedicamento)
        {
            TipoMedicamentoBL obj = new TipoMedicamentoBL();
            return obj.recuperarTipoMedicamento(iidtipomedicamento);
        }

        public List<TipoMedicamentoCLS> filtrarTipoMedicamento(string nombretipo)
        {
            TipoMedicamentoBL obj = new TipoMedicamentoBL();
            return obj.filtrarTipoMedicamento(nombretipo);
        }
        //entero (texto)
        public int GuardarDatos(TipoMedicamentoCLS oTipoMedicamentoCLS)
        {
            TipoMedicamentoBL obj = new TipoMedicamentoBL();
            if(oTipoMedicamentoCLS.idtipomedicamento==0)
            return obj.guardarTipoMedicamento(oTipoMedicamentoCLS);
            else
            return obj.editarTipoMedicamento(oTipoMedicamentoCLS);
        }

        public int eliminarTipoMedicamento(int id)
        {
            TipoMedicamentoBL obj = new TipoMedicamentoBL();
            return obj.eliminarTipoMedicamento(id);
        }

    }
}

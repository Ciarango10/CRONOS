using CapaEntidad;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CapaNegocio;
using MiPrimeraAppNetCoreCapas6.Filter;
namespace MiPrimeraAppNetCoreCapas6.Controllers
{
  
    public class LaboratorioController : Controller
    {
        [ServiceFilter(typeof(Seguridad))]
        public IActionResult Index()
        {
            return View();
        }

        public List<LaboratorioCLS> listarLaboratorio()
        {
            LaboratorioBL obj = new LaboratorioBL();
           
            return obj.listarLaboratorio();
        }

        public List<LaboratorioCLS> filtrarLaboratorio(LaboratorioCLS objLab)
        {
            LaboratorioBL obj = new LaboratorioBL();
            return obj.filtrarLaboratorio(objLab);
        }
        //1(Correcto) 0(Incorrecto)
        public int guardarDatos(LaboratorioCLS obj)
        {
            LaboratorioBL oLaboratorioBL = new LaboratorioBL();
            return oLaboratorioBL.guardarLaboratorio(obj);
        }

        public int eliminarLaboratorio(int id)
        {
            LaboratorioBL obj = new LaboratorioBL();
            return obj.eliminarLaboratorio(id);
        }
        public LaboratorioCLS recuperarLaboratorio(int id)
        {
            LaboratorioBL obj = new LaboratorioBL();
            return obj.recuperarLaboratorio(id);
        }

    }
}

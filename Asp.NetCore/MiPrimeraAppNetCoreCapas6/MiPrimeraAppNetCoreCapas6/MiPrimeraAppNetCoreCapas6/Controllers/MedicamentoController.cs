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
  
    public class MedicamentoController : Controller
    {
        [ServiceFilter(typeof(Seguridad))]
        public IActionResult Index()
        {
            return View();
        }
        //public string saludos()
        //{
        //    return "Buenos dias";
        //}

        public List<MedicamentoCLS> listarMedicamento()
        {
            MedicamentoBL oMedicamentoBL = new MedicamentoBL();
            return oMedicamentoBL.listarMedicamento();
        }

        public MedicamentoComboCLS listarCombosMedicamento()
        {
            MedicamentoBL oMedicamentoBL = new MedicamentoBL();
            return oMedicamentoBL.listarCombosMedicamento();
        }

        //public int numero()
        //{
        //    return 1;
        //}

        public List<MedicamentoCLS> filtrarMedicamento(MedicamentoCLS obj)
        {
            MedicamentoBL oMedicamentoBL = new MedicamentoBL();
            return oMedicamentoBL.filtrarMedicamento(obj);
        }

        public MedicamentoCLS recuperarMedicamento(int iidmedicamento)
        {
            MedicamentoBL oMedicamentoBL = new MedicamentoBL();
            return oMedicamentoBL.recuperarMedicamento(iidmedicamento);
        }

        public int guardarMedicamento(MedicamentoCLS oMedicamentoCLS)
        {
            MedicamentoBL oMedicamentoBL = new MedicamentoBL();
            return oMedicamentoBL.guardarMedicamento(oMedicamentoCLS);
        }

        public int eliminarMedicamento(int id)
        {
            MedicamentoBL oMedicamentoBL = new MedicamentoBL();
            return oMedicamentoBL.eliminarMedicamento(id);
        }




    }
}

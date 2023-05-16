using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaEntidad;
using CapaDatos;
namespace CapaNegocio
{
   public class LaboratorioBL
    {

        public int guardarLaboratorio(LaboratorioCLS oLaboratorioCLS)
        {
            LaboratorioDAL oLaboratorioDAL = new LaboratorioDAL();
            return oLaboratorioDAL.guardarLaboratorio(oLaboratorioCLS);
        }
        public List<LaboratorioCLS> listarLaboratorio()
        {
            LaboratorioDAL oLaboratorioDAL = new LaboratorioDAL();
            return oLaboratorioDAL.listarLaboratorio();
        }

        public List<LaboratorioCLS> filtrarLaboratorio(LaboratorioCLS objLab)
        {
            LaboratorioDAL oLaboratorioDAL = new LaboratorioDAL();
            return oLaboratorioDAL.filtrarLaboratorio(objLab);
        }

        public int eliminarLaboratorio(int id)
        {
            LaboratorioDAL oLaboratorioDAL = new LaboratorioDAL();
            return oLaboratorioDAL.eliminarLaboratorio(id);
        }
        public LaboratorioCLS recuperarLaboratorio(int iidlaboratorio)
        {
            LaboratorioDAL oLaboratorioDAL = new LaboratorioDAL();
            return oLaboratorioDAL.recuperarLaboratorio(iidlaboratorio);
        }


    }
}

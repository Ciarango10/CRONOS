using CapaDatos;
using CapaEntidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaNegocio
{
  public  class MedicamentoBL
    {

        public List<MedicamentoCLS> filtrarMedicamento(MedicamentoCLS obj)
        {
            MedicamentoDAL oMedicamentoDAL = new MedicamentoDAL();
            return oMedicamentoDAL.filtrarMedicamento(obj);
        }
        public List<MedicamentoCLS> listarMedicamento()
        {
            MedicamentoDAL oMedicamentoDAL = new MedicamentoDAL();
            return oMedicamentoDAL.listarMedicamento();
        }

        public MedicamentoComboCLS listarCombosMedicamento()
        {
            MedicamentoDAL oMedicamentoDAL = new MedicamentoDAL();
            return oMedicamentoDAL.listarCombosMedicamento();
        }

        public MedicamentoCLS recuperarMedicamento(int iidmedicamento)
        {
            MedicamentoDAL oMedicamentoDAL = new MedicamentoDAL();
            return oMedicamentoDAL.recuperarMedicamento(iidmedicamento);
        }

        public int guardarMedicamento(MedicamentoCLS oMedicamentoCLS)
        {
            MedicamentoDAL oMedicamentoDAL = new MedicamentoDAL();
            return oMedicamentoDAL.guardarMedicamento(oMedicamentoCLS);
        }

        public int eliminarMedicamento(int id)
        {
            MedicamentoDAL oMedicamentoDAL = new MedicamentoDAL();
            return oMedicamentoDAL.eliminarMedicamento(id);
        }


    }
}

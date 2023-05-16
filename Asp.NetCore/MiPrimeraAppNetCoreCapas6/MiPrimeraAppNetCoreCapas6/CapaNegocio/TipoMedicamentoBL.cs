using System;
using System.Collections.Generic;
using CapaDatos;
using CapaEntidad;
namespace CapaNegocio
{
    public class TipoMedicamentoBL
    {

        public int eliminarTipoMedicamento(int id)
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.eliminarTipoMedicamento(id);
        }
        public int editarTipoMedicamento(TipoMedicamentoCLS oTipoMedicamentoCLS)
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.editarTipoMedicamento(oTipoMedicamentoCLS);
        }

        public int guardarTipoMedicamento(TipoMedicamentoCLS oTipoMedicamentoCLS)
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.guardarTipoMedicamento(oTipoMedicamentoCLS);
        }
        public List<TipoMedicamentoCLS> listarTipoMedicamento()
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.listarTipoMedicamento();
        }
        public List<TipoMedicamentoCLS> filtrarTipoMedicamento(string nombretipo)
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.filtrarTipoMedicamento(nombretipo);
        }

        public TipoMedicamentoCLS recuperarTipoMedicamento(int iidtipomedicamento)
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.recuperarTipoMedicamento(iidtipomedicamento);
        }

    }
}

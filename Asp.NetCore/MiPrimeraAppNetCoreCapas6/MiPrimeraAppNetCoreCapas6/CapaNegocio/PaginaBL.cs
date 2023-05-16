using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaEntidad;
using CapaDatos;

namespace CapaNegocio
{
	public class PaginaBL
	{

		public List<PaginaCLS> listarMenu(int iidtipousuario)
		{
			PaginaDAL oPaginaDAL = new PaginaDAL();
			return oPaginaDAL.listarMenu(iidtipousuario);

		}
		public List<PaginaCLS> listarPagina()
		{
			PaginaDAL oPaginaDAL = new PaginaDAL();
			return oPaginaDAL.listarPagina();
		}

		public PaginaCLS recuperarPagina(int iidpagina)
		{
			PaginaDAL oPaginaDAL = new PaginaDAL();
			return oPaginaDAL.recuperarPagina(iidpagina);

		}
		public int eliminarPagina(int iidpagina)
		{
			PaginaDAL oPaginaDAL = new PaginaDAL();
			return oPaginaDAL.eliminarPagina(iidpagina);
		}

		public int guardarPagina(PaginaCLS oPaginaCLS)
		{
			PaginaDAL oPaginaDAL = new PaginaDAL();
			return oPaginaDAL.guardarPagina(oPaginaCLS);
		}



	}
}

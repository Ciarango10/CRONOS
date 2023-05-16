using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using CapaEntidad;
namespace CapaDatos
{
	public class PaginaDAL : CadenaDAL
	{

        /*
         create procedure uspGuardarPagina
@iidpagina int,
@mensaje varchar(100),
@controlador varchar(100),
@accion varchar(100)
as
begin

if @iidpagina=0
  insert into Pagina(MENSAJE,CONTRALADOR,ACCION,BHABILITADO)
  values(@mensaje,@controlador,@accion,1)
else
  update Pagina
  set MENSAJE=@mensaje,CONTRALADOR=@controlador,ACCION=@accion
  where IIDPAGINA=@iidpagina
end


create procedure uspEliminarPagina
@iidpagina int
as
begin

update Pagina
set BHABILITADO=0
where IIDPAGINA=@iidpagina
end


create procedure uspRecuperarPagina
@iidpagina int
as
begin
select IIDPAGINA,MENSAJE,CONTRALADOR,ACCION
from Pagina
where IIDPAGINA=@iidpagina
end
         
         */

        public List<PaginaCLS> listarMenu(int iidtipousuario)
        {
            List<PaginaCLS> lista = null;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarMenu", cn))
                    {
                        //Le indico que es un procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidtipousuario", iidtipousuario);
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {
                            lista = new List<PaginaCLS>();
                            int posId = drd.GetOrdinal("IIDPAGINA");
                            int posMensaje = drd.GetOrdinal("MENSAJE");
                            int posControlador = drd.GetOrdinal("CONTRALADOR");
                            int posAccion = drd.GetOrdinal("ACCION");
                            PaginaCLS oPaginaCLS;
                            while (drd.Read())
                            {
                                oPaginaCLS = new PaginaCLS();
                                oPaginaCLS.iidpagina = drd.IsDBNull(posId) ? 0 : drd.GetInt32(posId);
                                oPaginaCLS.mensaje = drd.IsDBNull(posMensaje) ? "" : drd.GetString(posMensaje);
                                oPaginaCLS.controlador = drd.IsDBNull(posControlador) ? "" : drd.GetString(posControlador);
                                oPaginaCLS.accion = drd.IsDBNull(posAccion) ? "" : drd.GetString(posAccion);
                                lista.Add(oPaginaCLS);
                            }
                            cn.Close();
                        }

                    }

                }
                catch (Exception ex)
                {
                    cn.Close();
                    //null para mi es error
                    lista = null;
                }

            }


            return lista;
        }

        public List<PaginaCLS> listarPagina()
        {
            List<PaginaCLS> lista = null;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarPagina", cn))
                    {
                        //Le indico que es un procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {
                            lista = new List<PaginaCLS>();
                            int posId = drd.GetOrdinal("IIDPAGINA");
                            int posMensaje = drd.GetOrdinal("MENSAJE");
                            int posControlador = drd.GetOrdinal("CONTRALADOR");
                            int posAccion = drd.GetOrdinal("ACCION");
                            PaginaCLS oPaginaCLS;
                            while (drd.Read())
                            {
                                oPaginaCLS = new PaginaCLS();
                                oPaginaCLS.iidpagina = drd.IsDBNull(posId) ? 0 : drd.GetInt32(posId);
                                oPaginaCLS.mensaje = drd.IsDBNull(posMensaje) ? "" : drd.GetString(posMensaje);
                                oPaginaCLS.controlador = drd.IsDBNull(posControlador) ? "" : drd.GetString(posControlador);
                                oPaginaCLS.accion = drd.IsDBNull(posAccion) ? "" : drd.GetString(posAccion);
                                lista.Add(oPaginaCLS);
                            }
                            cn.Close();
                        }

                    }

                }
                catch (Exception ex)
                {
                    cn.Close();
                    //null para mi es error
                    lista = null;
                }

            }


            return lista;
        }


        public int guardarPagina(PaginaCLS oPaginaCLS)
        {
            //error
            //Rpta 0 va a ser error
            int rpta = 0;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspGuardarPagina", cn))
                    {
                        //Indico que es Procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidpagina", oPaginaCLS.iidpagina);
                        cmd.Parameters.AddWithValue("@mensaje", oPaginaCLS.mensaje);
                        cmd.Parameters.AddWithValue("@controlador", oPaginaCLS.controlador);
                        cmd.Parameters.AddWithValue("@accion", oPaginaCLS.accion);
                        rpta = cmd.ExecuteNonQuery();

                    }
                }
                catch (Exception ex)
                {
                    cn.Close();
                    rpta = 0;
                }


            }
            return rpta;

        }

        public int eliminarPagina(int iidpagina)
        {
            //error
            //Rpta 0 va a ser error
            int rpta = 0;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspEliminarPagina", cn))
                    {
                        //Indico que es Procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidpagina", iidpagina);
                        rpta = cmd.ExecuteNonQuery();

                    }
                }
                catch (Exception ex)
                {
                    cn.Close();
                    rpta = 0;
                }


            }
            return rpta;

        }

        public PaginaCLS recuperarPagina(int iidpagina)
        {
            PaginaCLS oPaginaCLS = new PaginaCLS();
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspRecuperarPagina", cn))
                    {
                        //Le indico que es un procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidpagina", iidpagina);

                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {

                            int posId = drd.GetOrdinal("IIDPAGINA");
                            int posMensaje = drd.GetOrdinal("MENSAJE");
                            int posControlador = drd.GetOrdinal("CONTRALADOR");
                            int posAccion = drd.GetOrdinal("ACCION");
                            while (drd.Read())
                            {

                                oPaginaCLS.iidpagina = drd.IsDBNull(posId) ? 0 : drd.GetInt32(posId);
                                oPaginaCLS.mensaje = drd.IsDBNull(posMensaje) ? "" : drd.GetString(posMensaje);
                                oPaginaCLS.controlador = drd.IsDBNull(posControlador) ? "" : drd.GetString(posControlador);
                                oPaginaCLS.accion = drd.IsDBNull(posAccion) ? "" : drd.GetString(posAccion);
                            }
                            cn.Close();
                        }

                    }

                }
                catch (Exception ex)
                {
                    cn.Close();
                    //null para mi es error
                    oPaginaCLS = null;
                }

            }


            return oPaginaCLS;
        }











    }
}

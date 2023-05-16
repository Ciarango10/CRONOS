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



   public class TipoAdministracionDAL:CadenaDAL
    {


        public int eliminarTipoAdministracion(int id)
        {
            //error
            //Rpta 0 va a ser error
            int rpta = 0;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    //Eliminacion
                    using (SqlCommand cmd = new SqlCommand("uspEliminarTipoAdministracion", cn))
                    {
                        //Indico que es consulta SQL
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidtipoadministracion", id);

                        //Insert , Update y Delete (El numero de filas afectadas)
                        rpta = cmd.ExecuteNonQuery();
                        //Si es 1 es que es Ok , si es 0 es que no se realizo
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

        public int guardarTipoAdministracion(TipoAdministracionCLS oTipoAdministracionCLS)
        {
            //error
            //Rpta 0 va a ser error
            int rpta = 0;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspGuardarTipoAdministracion", cn))
                    {
                        //Indico que es Procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidtipoadministracion", oTipoAdministracionCLS.iidtipoadministracion);
                        cmd.Parameters.AddWithValue("@nombre", oTipoAdministracionCLS.nombre);
                        cmd.Parameters.AddWithValue("@descripcion", oTipoAdministracionCLS.descripcion);
                        SqlParameter parametro=null;
                        if (oTipoAdministracionCLS.iidtipoadministracion == 0)
                        {
                            parametro = cmd.Parameters.Add("@@identity", SqlDbType.Int);
                            parametro.Direction = ParameterDirection.ReturnValue;
                        }
                        //Insert , Update y Delete (El numero de filas afectadas)
                        rpta = cmd.ExecuteNonQuery();
                        if (rpta==1 && oTipoAdministracionCLS.iidtipoadministracion == 0)
                        {
                            //Obtiene el Id que se genera al insertar
                            rpta = (int)parametro.Value;
                        }
                        //Si es 1 es que es Ok , si es 0 es que no se realizo
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


        public List<TipoAdministracionCLS> filtrarTipoAdministracion(TipoAdministracionCLS obj)
        {
            List<TipoAdministracionCLS> lista = null;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarTipoAdministracion", cn))
                    {
                        //Le indico que es un procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombre", obj.nombre==null ? "" : obj.nombre);
                        cmd.Parameters.AddWithValue("@valores", obj.estados);
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {
                            lista = new List<TipoAdministracionCLS>();
                            int posId = drd.GetOrdinal("IIDTIPOADMINISTRACION");
                            int posNombre = drd.GetOrdinal("NOMBRE");
                            int posDescripcion = drd.GetOrdinal("DESCRIPCION");

                            TipoAdministracionCLS oTipoAdministracionCLS;
                            while (drd.Read())
                            {
                                oTipoAdministracionCLS = new TipoAdministracionCLS();
                                oTipoAdministracionCLS.iidtipoadministracion = drd.IsDBNull(posId) ? 0 :
                                    drd.GetInt32(posId);
                                oTipoAdministracionCLS.nombre = drd.IsDBNull(posNombre) ? "" :
                                    drd.GetString(posNombre);
                                oTipoAdministracionCLS.descripcion = drd.IsDBNull(posDescripcion) ? "" :
                                    drd.GetString(posDescripcion);

                                lista.Add(oTipoAdministracionCLS);
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


        public List<TipoAdministracionCLS> listarTipoAdministracion()
        {
            List<TipoAdministracionCLS> lista = null;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarTipoAdministracion", cn))
                    {
                        //Le indico que es un procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {
                            lista = new List<TipoAdministracionCLS>();
                            int posId = drd.GetOrdinal("IIDTIPOADMINISTRACION");
                            int posNombre = drd.GetOrdinal("NOMBRE");
                            int posDescripcion = drd.GetOrdinal("DESCRIPCION");

                            TipoAdministracionCLS oTipoAdministracionCLS;
                            while (drd.Read())
                            {
                                oTipoAdministracionCLS = new TipoAdministracionCLS();
                                oTipoAdministracionCLS.iidtipoadministracion = drd.IsDBNull(posId) ? 0 : 
                                    drd.GetInt32(posId);
                                oTipoAdministracionCLS.nombre = drd.IsDBNull(posNombre) ? "" :
                                    drd.GetString(posNombre);
                                oTipoAdministracionCLS.descripcion = drd.IsDBNull(posDescripcion) ? "" :
                                    drd.GetString(posDescripcion);
                                
                                lista.Add(oTipoAdministracionCLS);
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


    }
}

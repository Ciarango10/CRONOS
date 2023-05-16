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
  public  class LaboratorioDAL:CadenaDAL
    {


        public int guardarLaboratorio(LaboratorioCLS oLaboratorioCLS)
        {
            //error
            //Rpta 0 va a ser error
            int rpta = 0;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspGuardarLaboratorio", cn))
                    {
                        //Indico que es Procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@idlaboratorio", oLaboratorioCLS.iidlaboratorio);
                        cmd.Parameters.AddWithValue("@nombre", oLaboratorioCLS.nombre);
                        cmd.Parameters.AddWithValue("@direccion", oLaboratorioCLS.direccion);
                        cmd.Parameters.AddWithValue("@personacontacto", oLaboratorioCLS.personacontacto);
                        cmd.Parameters.AddWithValue("@numerocontacto", oLaboratorioCLS.numerocontacto);
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

        public int eliminarLaboratorio(int id)
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
                    using (SqlCommand cmd = new SqlCommand("uspEliminarLaboratorio", cn))
                    {
                        //Indico que es consulta SQL
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@id", id);

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

        public LaboratorioCLS recuperarLaboratorio(int iidlaboratorio)
        {
            LaboratorioCLS oLaboratorioCLS= new LaboratorioCLS(); 
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspRecuperarLaboratorio", cn))
                    {
                        //Le indico que es un procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@id", iidlaboratorio);

                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {
                          
                            int posId = drd.GetOrdinal("IIDLABORATORIO");
                            int posNombre = drd.GetOrdinal("NOMBRE");
                            int posDireccion = drd.GetOrdinal("DIRECCION");
                            int posContacto = drd.GetOrdinal("PERSONACONTACTO");
                            int posNumeroContacto = drd.GetOrdinal("NUMEROCONTACTO");
                            while (drd.Read())
                            {
                             
                                oLaboratorioCLS.iidlaboratorio = drd.IsDBNull(posId) ? 0 : drd.GetInt32(posId);
                                oLaboratorioCLS.nombre = drd.IsDBNull(posNombre) ? "" : drd.GetString(posNombre);
                                oLaboratorioCLS.direccion = drd.IsDBNull(posDireccion) ? "" : drd.GetString(posDireccion);
                                oLaboratorioCLS.personacontacto = drd.IsDBNull(posContacto) ? "" : drd.GetString(posContacto);
                                oLaboratorioCLS.numerocontacto = drd.IsDBNull(posNumeroContacto) ? "" : drd.GetString(posNumeroContacto);
                            }
                            cn.Close();
                        }

                    }

                }
                catch (Exception ex)
                {
                    cn.Close();
                    //null para mi es error
                    oLaboratorioCLS = null;
                }

            }


            return oLaboratorioCLS;
        }


        public List<LaboratorioCLS> filtrarLaboratorio(LaboratorioCLS objLab)
        {
            List<LaboratorioCLS> lista = null;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarLaboratorio", cn))
                    {
                        //Le indico que es un procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombre", objLab.nombre == null ? "" : objLab.nombre);
                        cmd.Parameters.AddWithValue("@direccion", objLab.direccion == null ? "" : objLab.direccion);
                        cmd.Parameters.AddWithValue("@personacontacto", objLab.personacontacto == null ? "" :
                            objLab.personacontacto);
                        cmd.Parameters.AddWithValue("@bhabilitado", objLab.bhabilitado);
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {
                            lista = new List<LaboratorioCLS>();
                            int posId = drd.GetOrdinal("IIDLABORATORIO");
                            int posNombre = drd.GetOrdinal("NOMBRE");
                            int posDireccion = drd.GetOrdinal("DIRECCION");
                            int posContacto = drd.GetOrdinal("PERSONACONTACTO");
                            LaboratorioCLS oLaboratorioCLS;
                            while (drd.Read())
                            {
                                oLaboratorioCLS = new LaboratorioCLS();
                                oLaboratorioCLS.iidlaboratorio = drd.IsDBNull(posId) ? 0 : drd.GetInt32(posId);
                                oLaboratorioCLS.nombre = drd.IsDBNull(posNombre) ? "" : drd.GetString(posNombre);
                                oLaboratorioCLS.direccion = drd.IsDBNull(posDireccion) ? "" : drd.GetString(posDireccion);
                                oLaboratorioCLS.personacontacto = drd.IsDBNull(posContacto) ? "" : drd.GetString(posContacto);
                                lista.Add(oLaboratorioCLS);
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


        public List<LaboratorioCLS> listarLaboratorio()
        {
            List<LaboratorioCLS> lista = null;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarLaboratorio", cn))
                    {
                        //Le indico que es un procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {
                            lista = new List<LaboratorioCLS>();
                            int posId = drd.GetOrdinal("IIDLABORATORIO");
                            int posNombre = drd.GetOrdinal("NOMBRE");
                            int posDireccion = drd.GetOrdinal("DIRECCION");
                            int posContacto = drd.GetOrdinal("PERSONACONTACTO");
                            LaboratorioCLS oLaboratorioCLS;
                            while (drd.Read())
                            {
                                oLaboratorioCLS = new LaboratorioCLS();
                                oLaboratorioCLS.iidlaboratorio = drd.IsDBNull(posId) ? 0 : drd.GetInt32(posId);
                                oLaboratorioCLS.nombre = drd.IsDBNull(posNombre) ? "" : drd.GetString(posNombre);
                                oLaboratorioCLS.direccion = drd.IsDBNull(posDireccion) ? "" : drd.GetString(posDireccion);
                                oLaboratorioCLS.personacontacto = drd.IsDBNull(posContacto) ? "" : drd.GetString(posContacto);
                                lista.Add(oLaboratorioCLS);
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

using System;
using System.Collections.Generic;
using System.Data;
//SqlConnection
using System.Data.SqlClient;
using System.IO;
using CapaEntidad;
using Microsoft.Extensions.Configuration;

namespace CapaDatos
{
    public class TipoMedicamentoDAL:CadenaDAL
    {

        public int eliminarTipoMedicamento(int id)
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
                    using (SqlCommand cmd = new SqlCommand("delete from tipomedicamento where IIDTIPOMEDICAMENTO=@id ", cn))
                    {
                        //Indico que es consulta SQL
                        cmd.CommandType = CommandType.Text;
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

        public int guardarTipoMedicamento(TipoMedicamentoCLS oTipoMedicamentoCLS)
        {
            //error
            //Rpta 0 va a ser error
            int rpta = 0;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("insert into tipomedicamento(NOMBRE,DESCRIPCION,BHABILITADO)"+
                        " values(@nombre,@descripcion,1)", cn))
                    {
                        //Indico que es consulta SQL
                        cmd.CommandType = CommandType.Text;
                        cmd.Parameters.AddWithValue("@nombre", oTipoMedicamentoCLS.nombre == null ? "" :
                            oTipoMedicamentoCLS.nombre);
                        cmd.Parameters.AddWithValue("@descripcion", oTipoMedicamentoCLS.descripcion == null ? "" :
                              oTipoMedicamentoCLS.descripcion);
                        //Insert , Update y Delete (El numero de filas afectadas)
                        rpta = cmd.ExecuteNonQuery();
                        //Si es 1 es que es Ok , si es 0 es que no se realizo
                    }
                }
                catch(Exception ex)
                {
                    cn.Close();
                    rpta = 0;
                }


            }
            return rpta;

        }
        //Editar la informacion
        public int editarTipoMedicamento(TipoMedicamentoCLS oTipoMedicamentoCLS)
        {
            //error
            //Rpta 0 va a ser error
            int rpta = 0;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("update tipomedicamento set NOMBRE=@nombre , DESCRIPCION=@descripcion" +
                        " where IIDTIPOMEDICAMENTO=@id", cn))
                    {
                        //Indico que es consulta SQL
                        cmd.CommandType = CommandType.Text;
                        cmd.Parameters.AddWithValue("@id", oTipoMedicamentoCLS.idtipomedicamento);
                        cmd.Parameters.AddWithValue("@nombre", oTipoMedicamentoCLS.nombre==null ? "" :
                            oTipoMedicamentoCLS.nombre);
                        cmd.Parameters.AddWithValue("@descripcion", oTipoMedicamentoCLS.descripcion==null ? "":
                            oTipoMedicamentoCLS.descripcion);
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

        public List<TipoMedicamentoCLS> filtrarTipoMedicamento(string nombretipo)
        {
            List<TipoMedicamentoCLS> lista = null;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("select iidtipomedicamento, descripcion, nombre" +
                        " from TipoMedicamento where BHABILITADO = 1 and nombre like '%"+ nombretipo + "%' ", cn))
                    {
                        cmd.CommandType = CommandType.Text;
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {
                            TipoMedicamentoCLS oTipoMedicamentoCLS;
                            lista = new List<TipoMedicamentoCLS>();
                            int postId = drd.GetOrdinal("iidtipomedicamento");
                            int postNombre = drd.GetOrdinal("nombre");
                            int postDescripcion = drd.GetOrdinal("descripcion");
                            while (drd.Read())
                            {
                                oTipoMedicamentoCLS = new TipoMedicamentoCLS();
                                oTipoMedicamentoCLS.idtipomedicamento = drd.IsDBNull(postId) ? 0 : drd.GetInt32(postId);
                                oTipoMedicamentoCLS.nombre = drd.IsDBNull(postNombre) ? "" : drd.GetString(postNombre);
                                oTipoMedicamentoCLS.descripcion = drd.IsDBNull(postDescripcion) ? "" : drd.GetString(postDescripcion);
                                lista.Add(oTipoMedicamentoCLS);
                            }
                            //Cerrar conexiòn
                            cn.Close();
                        }
                    }
                }
                catch (Exception ex)
                {
                    cn.Close();
                    lista = null;
                }



            }

            return lista;
        }

        public TipoMedicamentoCLS recuperarTipoMedicamento(int iidtipomedicamento)
        {
            //Nulo
            TipoMedicamentoCLS oTipoMedicamentoCLS = null;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("select iidtipomedicamento, descripcion, nombre" +
                        " from TipoMedicamento where BHABILITADO = 1 and iidtipomedicamento=@id", cn))
                    {
                        cmd.CommandType = CommandType.Text;
                        cmd.Parameters.AddWithValue("@id", iidtipomedicamento);
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {
                            
                          
                            int postId = drd.GetOrdinal("iidtipomedicamento");
                            int postNombre = drd.GetOrdinal("nombre");
                            int postDescripcion = drd.GetOrdinal("descripcion");
                            while (drd.Read())
                            {
                                //Instanciamos
                                oTipoMedicamentoCLS = new TipoMedicamentoCLS();
                                oTipoMedicamentoCLS.idtipomedicamento = drd.IsDBNull(postId) ? 0 : drd.GetInt32(postId);
                                oTipoMedicamentoCLS.nombre = drd.IsDBNull(postNombre) ? "" : drd.GetString(postNombre);
                                oTipoMedicamentoCLS.descripcion = drd.IsDBNull(postDescripcion) ? "" : drd.GetString(postDescripcion);
                               
                            }
                            //Cerrar conexiòn
                            cn.Close();
                        }
                    }
                }
                catch (Exception ex)
                {
                    cn.Close();
                    oTipoMedicamentoCLS = null;
                }



            }

            return oTipoMedicamentoCLS;
        }

        public List<TipoMedicamentoCLS> listarTipoMedicamento()
        {
            List<TipoMedicamentoCLS> lista = null;
            using (SqlConnection cn=new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using(SqlCommand cmd=new SqlCommand("select iidtipomedicamento, descripcion, nombre" +
                        " from TipoMedicamento where BHABILITADO = 1", cn))
                    {
                        cmd.CommandType = CommandType.Text;
                        SqlDataReader drd=  cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {
                            TipoMedicamentoCLS oTipoMedicamentoCLS;
                            lista = new List<TipoMedicamentoCLS>();
                            int postId = drd.GetOrdinal("iidtipomedicamento");
                            int postNombre = drd.GetOrdinal("nombre");
                            int postDescripcion = drd.GetOrdinal("descripcion");
                            while (drd.Read())
                            {
                                oTipoMedicamentoCLS = new TipoMedicamentoCLS();
                                oTipoMedicamentoCLS.idtipomedicamento = drd.IsDBNull(postId) ? 0:  drd.GetInt32(postId);
                                oTipoMedicamentoCLS.nombre = drd.IsDBNull(postNombre) ? "": drd.GetString(postNombre);
                                oTipoMedicamentoCLS.descripcion = drd.IsDBNull(postDescripcion) ? "" :  drd.GetString(postDescripcion);
                                lista.Add(oTipoMedicamentoCLS);
                            }
                            //Cerrar conexiòn
                            cn.Close();
                        }
                    }
                }
                catch(Exception ex)
                {
                    cn.Close();
                    lista = null;
                }
             


            }
            
            return lista;
        }

            /*
            public List<TipoMedicamentoCLS> listarMedicamentos()
            {
                List<TipoMedicamentoCLS> lista = new List<TipoMedicamentoCLS>();
                lista.Add(new TipoMedicamentoCLS
                {
                    idtipomedicamento = 1,
                    nombre = "Analgesicos",
                    descripcion = "Des 1"
                });
                lista.Add(new TipoMedicamentoCLS
                {
                    idtipomedicamento = 2,
                    nombre = "Antialergicos",
                    descripcion = "Des 2"
                });
                return lista;
            }*/

        }
}

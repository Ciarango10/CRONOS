using CapaEntidad;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.IO;

namespace CapaDatos
{
   public class SucursalDAL:CadenaDAL
    {


        public SucursalCLS recuperarSucursal(int iidsucursal)
        {
            SucursalCLS oSucursalCLS= new SucursalCLS();
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspRecuperarSucursal", cn))
                    {
                        //Le indico que es un procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidsucursal", iidsucursal);
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {
                          
                            int posId = drd.GetOrdinal("IIDSUCURSAL");
                            int posNombre = drd.GetOrdinal("NOMBRE");
                            int posDireccion = drd.GetOrdinal("DIRECCION");
                            int posFotoSucursal = drd.GetOrdinal("FOTOSUCURSAL");
                            int posNombreFotoSucursal = drd.GetOrdinal("NOMBREFOTOSUCURSAL");
                            while (drd.Read())
                            {
                               
                                oSucursalCLS.iidsucursal = drd.IsDBNull(posId) ? 0 : drd.GetInt32(posId);
                                oSucursalCLS.nombre = drd.IsDBNull(posNombre) ? "" : drd.GetString(posNombre);
                                oSucursalCLS.direccion = drd.IsDBNull(posDireccion) ? "" : drd.GetString(posDireccion);
                           
                                if (!drd.IsDBNull(posFotoSucursal))
                                {
                                    //
                                    string base64 = "";
                                    //Captura de pantalla (1).png
                                    oSucursalCLS.nombrefoto = drd.IsDBNull(posNombreFotoSucursal) ? "" :
                                     drd.GetString(posNombreFotoSucursal);
                                    //.jpg .png
                                    string extension = Path.GetExtension(oSucursalCLS.nombrefoto);
                                    //jpg png
                                    string sinPuntoExtension = extension.Substring(1);
                                    //Buffer (Byte[])
                                    byte[] buffer = (byte[])drd.GetValue(posFotoSucursal);
                                    //Visualizar imagenes en la Web (data:image/png;base64,)
                                    //data:image/jpg;base64,
                                    string cabecera = "data:image/" + sinPuntoExtension + ";base64,";
                                    base64 =  Convert.ToBase64String(buffer);
                                    string baseTotal = cabecera + base64;
                                    oSucursalCLS.base64 = baseTotal;
                                }
                            } 
                            cn.Close();
                        }

                    }

                }
                catch (Exception ex)
                {
                    cn.Close();
                    //null para mi es error
                    oSucursalCLS = null;
                }

            }


            return oSucursalCLS;
        }


        public int guardarSucursal(SucursalCLS oSucursalCLS)
        {
            //error
            //Rpta 0 va a ser error
            int rpta = 0;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspGuardarSucursal", cn))
                    {
                        //Indico que es Procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidsucursal", oSucursalCLS.iidsucursal);
                        cmd.Parameters.AddWithValue("@nombre", oSucursalCLS.nombre);
                        cmd.Parameters.AddWithValue("@direccion", oSucursalCLS.direccion);
                        cmd.Parameters.AddWithValue("@fotosucursal",
                            oSucursalCLS.foto==null ? System.Data.SqlTypes.SqlBinary.Null : oSucursalCLS.foto);
                        cmd.Parameters.AddWithValue("@nombrefotosucursal",
                            oSucursalCLS.nombrefoto==null ? "" : oSucursalCLS.nombrefoto);
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


        public List<SucursalCLS> filtrarSucursal(string nombresucursal)
        {
            List<SucursalCLS> lista = null;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarSucursal", cn))
                    {
                        //Le indico que es un procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        //Esta linea define un parametro
                        cmd.Parameters.AddWithValue("@nombresucursal", nombresucursal==null ? "" : nombresucursal);
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {
                            lista = new List<SucursalCLS>();
                            int posId = drd.GetOrdinal("IIDSUCURSAL");
                            int posNombre = drd.GetOrdinal("NOMBRE");
                            int posDireccion = drd.GetOrdinal("DIRECCION");
                            SucursalCLS oSucursalCLS;
                            while (drd.Read())
                            {
                                oSucursalCLS = new SucursalCLS();
                                oSucursalCLS.iidsucursal = drd.IsDBNull(posId) ? 0 : drd.GetInt32(posId);
                                oSucursalCLS.nombre = drd.IsDBNull(posNombre) ? "" : drd.GetString(posNombre);
                                oSucursalCLS.direccion = drd.IsDBNull(posDireccion) ? "" : drd.GetString(posDireccion);
                                lista.Add(oSucursalCLS);
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
        public List<SucursalCLS> listarSucursal()
        {
            List<SucursalCLS> lista = null;
            using(SqlConnection cn=new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using(SqlCommand cmd=new SqlCommand("uspListarSucursal",cn))
                    {
                        //Le indico que es un procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        SqlDataReader drd=  cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {
                            lista = new List<SucursalCLS>();
                            int posId = drd.GetOrdinal("IIDSUCURSAL");
                            int posNombre= drd.GetOrdinal("NOMBRE");
                            int posDireccion= drd.GetOrdinal("DIRECCION");
                            SucursalCLS oSucursalCLS;
                            while (drd.Read())
                            {
                                oSucursalCLS = new SucursalCLS();
                                oSucursalCLS.iidsucursal = drd.IsDBNull(posId) ? 0 : drd.GetInt32(posId);
                                oSucursalCLS.nombre = drd.IsDBNull(posNombre) ? "" : drd.GetString(posNombre);
                                oSucursalCLS.direccion = drd.IsDBNull(posDireccion) ? "" : drd.GetString(posDireccion);
                                lista.Add(oSucursalCLS);
                            }
                            cn.Close();
                        }

                    }

                }catch(Exception ex)
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

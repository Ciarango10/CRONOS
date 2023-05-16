using System;
using System.Collections.Generic;
using System.Data;
//SqlConnection
using System.Data.SqlClient;
using System.IO;
using CapaEntidad;
using CapaUsuario;
using Microsoft.Extensions.Configuration;

namespace CapaDatos
{
    public class PersonaDAL:CadenaDAL
    {

        public int guardarPersona(PersonaCLS oPersonaCLS, UsuarioCLS ousuario)
        {
            //error
            //Rpta 0 va a ser error
            int rpta = 0;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using(SqlTransaction transaccion= cn.BeginTransaction())
					{
                        using (SqlCommand cmd = new SqlCommand("uspGuardarPersona", cn, transaccion))
                        {
                            //Indico que es Procedure
                            cmd.CommandType = CommandType.StoredProcedure;
                            cmd.Parameters.AddWithValue("@iidpersona", oPersonaCLS.iidpersona);
                            cmd.Parameters.AddWithValue("@nombre", oPersonaCLS.nombre);
                            cmd.Parameters.AddWithValue("@appaterno", oPersonaCLS.appaterno);
                            cmd.Parameters.AddWithValue("@apmaterno", oPersonaCLS.apmaterno);
                            cmd.Parameters.AddWithValue("@correo", oPersonaCLS.correo);
                            cmd.Parameters.AddWithValue("@direccion", oPersonaCLS.direccion);
                            cmd.Parameters.AddWithValue("@iidsexo", oPersonaCLS.iidsexo);
                            cmd.Parameters.AddWithValue("@numerotelefonico", oPersonaCLS.numerotelefonico);
                            cmd.Parameters.AddWithValue("@bempleado", oPersonaCLS.bempleado);
                            cmd.Parameters.AddWithValue("@iidsucursal", oPersonaCLS.iidsucursal == 0
                                ? System.Data.SqlTypes.SqlString.Null : oPersonaCLS.iidsucursal);

                            SqlParameter parametro = null;
							if (oPersonaCLS.iidpersona == 0)
							{
                                parametro = cmd.Parameters.Add("@@identity", SqlDbType.Int);
                                parametro.Direction = ParameterDirection.ReturnValue;
                            }
                            //Insert , Update y Delete (El numero de filas afectadas)
                            rpta = cmd.ExecuteNonQuery();
                            if(rpta==1 && oPersonaCLS.iidpersona == 0)
							{
                                oPersonaCLS.iidpersona= (int)parametro.Value;
                            }
                            //Si es 1 es que es Ok , si es 0 es que no se realizo
                        }
                        //Si esta marcado en check que se registre o edite
						if (oPersonaCLS.btieneusuario == 1)
						{
                            using (SqlCommand cmd = new SqlCommand("uspGuardarUsuario", cn, transaccion))
                            {
                                cmd.CommandType = CommandType.StoredProcedure;
                                cmd.Parameters.AddWithValue("@iidusuario", ousuario.iidusuario);
                                cmd.Parameters.AddWithValue("@nombreusuario", ousuario.nombreusuario);
                                cmd.Parameters.AddWithValue("@contra", ousuario.contra==null? "":
                                    GenericLH.cifrarCadena( ousuario.contra));
                                cmd.Parameters.AddWithValue("@iidpersona", oPersonaCLS.iidpersona);
                                cmd.Parameters.AddWithValue("@iidtipousuario", ousuario.iidtipousuario);
                                rpta = cmd.ExecuteNonQuery();
                            }
                        }
                     
                        //Sin esta linea no se ejecuta
                        transaccion.Commit();
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

        public PersonaCLS login(string usuario,string contra)
		{
            PersonaCLS oPersonaCLS = new PersonaCLS();
            using (SqlConnection cn = new SqlConnection(cadena))
			{
				try
				{
                    string contraCifrada = GenericLH.cifrarCadena(contra);
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspLogin", cn))
					{
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombreusuario", usuario);
                        cmd.Parameters.AddWithValue("@contra", contraCifrada);
                        SqlDataReader drd=  cmd.ExecuteReader();
						if (drd != null)
						{
                            while (drd.Read())
                            {
                                oPersonaCLS.iidusuario = drd.IsDBNull(0) ? 0 : drd.GetInt32(0);
                                oPersonaCLS.nombrecompleto = drd.IsDBNull(1) ? "" : drd.GetString(1);
                                oPersonaCLS.iidtipousuario = drd.IsDBNull(2) ? 0 : drd.GetInt32(2);
                                oPersonaCLS.iidpersona = drd.IsDBNull(3) ? 0 : drd.GetInt32(3);

                            }
                        }
                      
                    }
                }
                catch(Exception ex)
				{
                    oPersonaCLS = new PersonaCLS();
                }
			}
            return oPersonaCLS;
        }

        public PersonaCLS recuperarPersona(int iidpersona)
        {
            PersonaCLS oPersonaCLS = new PersonaCLS();
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspRecuperarPersona", cn))
                    {
                        //Le indico que es un procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@idpersona", iidpersona);

                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {

                            int posId = drd.GetOrdinal("IIDPERSONA");
                            int posNombre = drd.GetOrdinal("NOMBRE");
                            int posApPaterno = drd.GetOrdinal("APPATERNO");
                            int posApMaterno = drd.GetOrdinal("APMATERNO");
                            int posCorreo = drd.GetOrdinal("CORREO");
                            int posDireccion = drd.GetOrdinal("DIRECCION");
                            int posIidSexo = drd.GetOrdinal("IIDSEXO");
                            int posNumeroTelefonico = drd.GetOrdinal("NUMEROTELEFONICO");
                            int posBempleado = drd.GetOrdinal("BEMPLEADO");
                             int posIidsucursal = drd.GetOrdinal("IIDSUCURSAL");
                            int posBTIENEUSUARIO = drd.GetOrdinal("BTIENEUSUARIO");
                            int posNOMBREUSUARIO = drd.GetOrdinal("NOMBREUSUARIO");
                            int posIIDTIPOUSUARIO = drd.GetOrdinal("IIDTIPOUSUARIO");
                            //IIDTIPOUSUARIO
                            while (drd.Read())
                            {

                                oPersonaCLS.iidpersona = drd.IsDBNull(posId) ? 0 : drd.GetInt32(posId);
                                oPersonaCLS.nombre = drd.IsDBNull(posNombre) ? "" : drd.GetString(posNombre);
                                oPersonaCLS.appaterno = drd.IsDBNull(posApPaterno) ? "" : drd.GetString(posApPaterno);
                                oPersonaCLS.apmaterno = drd.IsDBNull(posApMaterno) ? "" : drd.GetString(posApMaterno);
                                oPersonaCLS.correo = drd.IsDBNull(posCorreo) ? "" : drd.GetString(posCorreo);
                                oPersonaCLS.direccion = drd.IsDBNull(posDireccion) ? "" : drd.GetString(posDireccion);
                                oPersonaCLS.iidsexo = drd.IsDBNull(posIidSexo) ? 0 : drd.GetInt32(posIidSexo);
                                oPersonaCLS.numerotelefonico = drd.IsDBNull(posNumeroTelefonico) ? "" : drd.GetString(posNumeroTelefonico);
                                oPersonaCLS.bempleado = drd.IsDBNull(posBempleado) ? 0 : drd.GetInt32(posBempleado);
                                oPersonaCLS.iidsucursal = drd.IsDBNull(posIidsucursal) ? 0 : drd.GetInt32(posIidsucursal);
                                oPersonaCLS.btieneusuario = drd.IsDBNull(posBTIENEUSUARIO) ? 0 :
                                    (drd.GetInt32(posBTIENEUSUARIO) == 0 ? 0 : 1);
                                oPersonaCLS.nombreusuario = drd.IsDBNull(posNOMBREUSUARIO) ? "" : drd.GetString(posNOMBREUSUARIO);
                                oPersonaCLS.iidusuario = drd.IsDBNull(posBTIENEUSUARIO) ? 0 : drd.GetInt32(posBTIENEUSUARIO);
                                //btieneusuario(1) ->En caso halla un registro asociado  btieneusuario(0)->En el caso que no halla
                                oPersonaCLS.iidtipousuario = drd.IsDBNull(posIIDTIPOUSUARIO) ? 0 : drd.GetInt32(posIIDTIPOUSUARIO);

                            }
                            cn.Close();
                        }

                    }

                }
                catch (Exception ex)
                {
                    cn.Close();
                    //null para mi es error
                    oPersonaCLS = null;
                }

            }


            return oPersonaCLS;
        }

        public List<PersonaCLS> filtrarPersona(PersonaCLS obj)
        {
            List<PersonaCLS> lista = null;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarPersona", cn))
                    {
                        //Le indico que es un procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombrecompleto", 
                            obj.nombrecompleto==null?"": obj.nombrecompleto);
                        cmd.Parameters.AddWithValue("@iidsexo",
                          obj.iidsexo);
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {
                            lista = new List<PersonaCLS>();
                            int posId = drd.GetOrdinal("IIDPERSONA");
                            int posNombreCompleto = drd.GetOrdinal("NOMBRECOMPLETO");
                            int posNombre = drd.GetOrdinal("NOMBRE");
                            int posNumeroTelefonico = drd.GetOrdinal("NUMEROTELEFONICO");
                            PersonaCLS oPersonaCLS;
                            while (drd.Read())
                            {
                                oPersonaCLS = new PersonaCLS();
                                oPersonaCLS.iidpersona = drd.IsDBNull(posId) ? 0 :
                                    drd.GetInt32(posId);
                                oPersonaCLS.nombrecompleto = drd.IsDBNull(posNombreCompleto) ? "" :
                                    drd.GetString(posNombreCompleto);
                                oPersonaCLS.nombresexo = drd.IsDBNull(posNombre) ? "" :
                                    drd.GetString(posNombre);
                                oPersonaCLS.numerotelefonico = drd.IsDBNull(posNumeroTelefonico) ? "" :
                                 drd.GetString(posNumeroTelefonico);

                                lista.Add(oPersonaCLS);
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

        public List<PersonaCLS> listarPersona()
        {
            List<PersonaCLS> lista = null;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarPersona", cn))
                    {
                        //Le indico que es un procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {
                            lista = new List<PersonaCLS>();
                            int posId = drd.GetOrdinal("IIDPERSONA");
                            int posNombreCompleto = drd.GetOrdinal("NOMBRECOMPLETO");
                            int posNombre = drd.GetOrdinal("NOMBRE");
                            int posNumeroTelefonico = drd.GetOrdinal("NUMEROTELEFONICO");
                            PersonaCLS oPersonaCLS;
                            while (drd.Read())
                            {
                                oPersonaCLS = new PersonaCLS();
                                oPersonaCLS.iidpersona = drd.IsDBNull(posId) ? 0 :
                                    drd.GetInt32(posId);
                                oPersonaCLS.nombrecompleto = drd.IsDBNull(posNombreCompleto) ? "" :
                                    drd.GetString(posNombreCompleto);
                                oPersonaCLS.nombresexo = drd.IsDBNull(posNombre) ? "" :
                                    drd.GetString(posNombre);
                                oPersonaCLS.numerotelefonico = drd.IsDBNull(posNumeroTelefonico) ? "" :
                                 drd.GetString(posNumeroTelefonico);

                                lista.Add(oPersonaCLS);
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

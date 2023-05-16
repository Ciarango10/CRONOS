using CapaEntidad;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace CapaDatos
{
  public  class MedicamentoDAL:CadenaDAL
    {


        public int eliminarMedicamento(int id)
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
                    using (SqlCommand cmd = new SqlCommand("uspEliminarMedicamento", cn))
                    {
                        //Indico que es consulta SQL
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidmedicamento", id);

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


        public int guardarMedicamento(MedicamentoCLS oMedicamentoCLS)
        {
            //error
            //Rpta 0 va a ser error
            int rpta = 0;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspGuardarMedicamento", cn))
                    {
                        //Indico que es Procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidmedicamento", oMedicamentoCLS.iidmedicamento);
                        cmd.Parameters.AddWithValue("@codigo", oMedicamentoCLS.codigoMedicamento);
                        cmd.Parameters.AddWithValue("@nombremedicamento", oMedicamentoCLS.nombremedicamento);
                        cmd.Parameters.AddWithValue("@iidlaboratorio", oMedicamentoCLS.iidlaboratorio);
                        cmd.Parameters.AddWithValue("@iidtipomedicamento", oMedicamentoCLS.iidtipomedicamento);
                        cmd.Parameters.AddWithValue("@usomedicamento", oMedicamentoCLS.usomedicamento);
                        cmd.Parameters.AddWithValue("@contenido", oMedicamentoCLS.contenido);
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

        public MedicamentoCLS recuperarMedicamento(int iidmedicamento)
        {
            MedicamentoCLS oMedicamentoCLS = new MedicamentoCLS();
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspRecuperarMedicamento", cn))
                    {
                        //Le indico que es un procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@idmedicamento", iidmedicamento);

                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {

                            int posId = drd.GetOrdinal("IIDMEDICAMENTO");
                            int posCodigo = drd.GetOrdinal("CODIGO");
                            int posNombre = drd.GetOrdinal("NOMBREMEDICAMENTO");
                            int posIdlaboratorio = drd.GetOrdinal("IIDLABORATORIO");
                            int posIdTipomedicamento = drd.GetOrdinal("IIDTIPOMEDICAMENTO");
                            int posUsomedicamento = drd.GetOrdinal("USOMEDICAMENTO");
                            int posContenido= drd.GetOrdinal("CONTENIDO");
                            while (drd.Read())
                            {

                                oMedicamentoCLS.iidmedicamento = drd.IsDBNull(posId) ? 0 : drd.GetInt32(posId);
                                oMedicamentoCLS.codigoMedicamento = drd.IsDBNull(posCodigo) ? "" : drd.GetString(posCodigo);
                                oMedicamentoCLS.nombremedicamento = drd.IsDBNull(posNombre) ? "" : drd.GetString(posNombre);
                                oMedicamentoCLS.iidlaboratorio = drd.IsDBNull(posIdlaboratorio) ? 0 : drd.GetInt32(posIdlaboratorio);
                                oMedicamentoCLS.iidtipomedicamento = drd.IsDBNull(posIdTipomedicamento) ? 0 : drd.GetInt32(posIdTipomedicamento);
                                oMedicamentoCLS.usomedicamento = drd.IsDBNull(posUsomedicamento) ? "" : drd.GetString(posUsomedicamento);
                                oMedicamentoCLS.contenido = drd.IsDBNull(posContenido) ? "" : drd.GetString(posContenido);
                            }
                            cn.Close();
                        }

                    }

                }
                catch (Exception ex)
                {
                    cn.Close();
                    //null para mi es error
                    oMedicamentoCLS = null;
                }

            }


            return oMedicamentoCLS;
        }

        public MedicamentoComboCLS listarCombosMedicamento()
        {
            MedicamentoComboCLS oMedicamentoComboCLS = new MedicamentoComboCLS();
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarCombosMedicamento", cn))
                    {
                        //Le indico que es un procedure
                        cmd.CommandType = CommandType.StoredProcedure;

                        SqlDataReader drd = cmd.ExecuteReader();
                        if (drd != null)
                        {
                           List<LaboratorioCLS> listalaboratorio = new List<LaboratorioCLS>();
                            int posId = drd.GetOrdinal("IIDLABORATORIO");
                            int posNombre = drd.GetOrdinal("NOMBRE");

                            LaboratorioCLS oLaboratorioCLS;
                            while (drd.Read())
                            {
                                oLaboratorioCLS = new LaboratorioCLS();
                                oLaboratorioCLS.iidlaboratorio = drd.IsDBNull(posId) ? 0 : drd.GetInt32(posId);
                                oLaboratorioCLS.nombre = drd.IsDBNull(posNombre) ? "" : drd.GetString(posNombre);

                                listalaboratorio.Add(oLaboratorioCLS);
                            }
                            oMedicamentoComboCLS.listalaboratorio = listalaboratorio;


                        }
                        if (drd.NextResult())
                        {
                            List<TipoMedicamentoCLS> listaTipoMedicamento = new List<TipoMedicamentoCLS>();
                            int posId = drd.GetOrdinal("IIDTIPOMEDICAMENTO");
                            int posNombre = drd.GetOrdinal("NOMBRE");

                            TipoMedicamentoCLS oTipoMedicamentoCLS;
                            while (drd.Read())
                            {
                                oTipoMedicamentoCLS = new TipoMedicamentoCLS();
                                oTipoMedicamentoCLS.idtipomedicamento = drd.IsDBNull(posId) ? 0 : drd.GetInt32(posId);
                                oTipoMedicamentoCLS.nombre = drd.IsDBNull(posNombre) ? "" : drd.GetString(posNombre);

                                listaTipoMedicamento.Add(oTipoMedicamentoCLS);
                            }
                            oMedicamentoComboCLS.listatipomedicamento = listaTipoMedicamento;
                        }
                        cn.Close();
                    }

                }
                catch (Exception ex)
                {
                    cn.Close();
                    //null para mi es error
                    oMedicamentoComboCLS = null;
                }

            }



            return oMedicamentoComboCLS;
        }


        public List<MedicamentoCLS> filtrarMedicamento(MedicamentoCLS obj)
        {
            List<MedicamentoCLS> lista = null;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarMedicamento", cn))
                    {
                        //Le indico que es un procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@idmedicamento", obj.iidmedicamento);
                        cmd.Parameters.AddWithValue("@nombre", obj.nombremedicamento==null? "": obj.nombremedicamento);
                        cmd.Parameters.AddWithValue("@idlaboratorio", obj.iidlaboratorio);
                        cmd.Parameters.AddWithValue("@idtipomedicamento", obj.iidtipomedicamento);
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {
                            lista = new List<MedicamentoCLS>();
                            int posId = drd.GetOrdinal("IIDMEDICAMENTO");
                            int posNombre = drd.GetOrdinal("NOMBREMEDICAMENTO");
                            int posNombreLab = drd.GetOrdinal("NOMBRELABOTARIO");
                            int posNombreTip = drd.GetOrdinal("NOMBRETIPO");

                            MedicamentoCLS oMedicamentoCLS;
                            while (drd.Read())
                            {
                                oMedicamentoCLS = new MedicamentoCLS();
                                oMedicamentoCLS.iidmedicamento = drd.IsDBNull(posId) ? 0 : drd.GetInt32(posId);
                                oMedicamentoCLS.nombremedicamento = drd.IsDBNull(posNombre) ? "" : drd.GetString(posNombre);
                                oMedicamentoCLS.nombrelaboratorio = drd.IsDBNull(posNombreLab) ? "" : drd.GetString(posNombreLab);
                                oMedicamentoCLS.nombretipomedicamento = drd.IsDBNull(posNombreTip) ? "" : drd.GetString(posNombreTip);
                                lista.Add(oMedicamentoCLS);
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


        public List<MedicamentoCLS> listarMedicamento()
        {
            List<MedicamentoCLS> lista = null;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarMedicamento", cn))
                    {
                        //Le indico que es un procedure
                        cmd.CommandType = CommandType.StoredProcedure;
                        SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult);
                        if (drd != null)
                        {
                            lista = new List<MedicamentoCLS>();
                            int posId = drd.GetOrdinal("IIDMEDICAMENTO");
                            int posNombre = drd.GetOrdinal("NOMBREMEDICAMENTO");
                            int posNombreLab = drd.GetOrdinal("NOMBRELABOTARIO");
                            int posNombreTip = drd.GetOrdinal("NOMBRETIPO");

                            MedicamentoCLS oMedicamentoCLS;
                            while (drd.Read())
                            {
                                oMedicamentoCLS = new MedicamentoCLS();
                                oMedicamentoCLS.iidmedicamento = drd.IsDBNull(posId) ? 0 : drd.GetInt32(posId);
                                oMedicamentoCLS.nombremedicamento = drd.IsDBNull(posNombre) ? "" : drd.GetString(posNombre);
                                oMedicamentoCLS.nombrelaboratorio = drd.IsDBNull(posNombreLab) ? "" : drd.GetString(posNombreLab);
                                oMedicamentoCLS.nombretipomedicamento = drd.IsDBNull(posNombreTip) ? "" : drd.GetString(posNombreTip);
                                lista.Add(oMedicamentoCLS);
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

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaEntidad;
using CapaDatos;

namespace CapaNegocio
{
   public class PersonaBL
    {
        public PersonaCLS login(string usuario, string contra)
		{
            PersonaDAL oPersonaDAL = new PersonaDAL();
            return oPersonaDAL.login(usuario, contra);
        }
        public int guardarPersona(PersonaCLS oPersonaCLS, UsuarioCLS ousuario)
		{
            PersonaDAL oPersonaDAL = new PersonaDAL();
            return oPersonaDAL.guardarPersona(oPersonaCLS, ousuario);
        }
        public PersonaCLS recuperarPersona(int iidpersona)
		{
            PersonaDAL oPersonaDAL = new PersonaDAL();
            return oPersonaDAL.recuperarPersona(iidpersona);
        }
        public List<PersonaCLS> filtrarPersona(PersonaCLS obj)
		{
            PersonaDAL oPersonaDAL = new PersonaDAL();
            return oPersonaDAL.filtrarPersona(obj);
        }
        public List<PersonaCLS> listarPersona()
        {
            PersonaDAL oPersonaDAL = new PersonaDAL();
            return oPersonaDAL.listarPersona();
        }

    }
}

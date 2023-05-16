using System;
using System.Security.Cryptography;
using System.Text;

namespace CapaUsuario
{
	public class GenericLH
	{

		public static string cifrarCadena(string cadena)
		{
			SHA256Managed sha = new SHA256Managed();
			//Bytes
			byte[] bytecadena = Encoding.Default.GetBytes(cadena);
			byte[] bytecifrado = sha.ComputeHash(bytecadena);
			return BitConverter.ToString(bytecifrado).Replace("-", "");
		}


	}
}

namespace Wappirepasoparcial.Dtos
{
    public class PasajeroDto
    {
        public int ID_PASAJERO { get; set; }

        public string NOMBRE { get; set; }

        public string APELLIDO { get; set; }

        public int ID_TIPO_DOC { get; set; }

        public int NRO_DOC { get; set; }

        public int? ID_TIPO_CLIENTE { get; set; }

        public string CALLE { get; set; }

        public string EMAIL { get; set; }

        public string TELEFONO { get; set; }

        public int ID_PROVINCIA { get; set; }
    }
}

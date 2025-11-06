namespace Wappirepasoparcial.Dtos
{
    public class VueloDto
    {
        public int ID_VUELO { get; set; }

        public string CODIGO_VUELO { get; set; }

        public int? ID_AEROPUERTO_ORIGEN { get; set; }

        public int? ID_AEROPUERTO_DESTINO { get; set; }

        public DateTime FECHA_SALIDA { get; set; }

        public DateTime FECHA_LLEGADA { get; set; }

        public decimal PRECIO_BASE_VUELO { get; set; }

        public int ID_AVION { get; set; }
    }
}

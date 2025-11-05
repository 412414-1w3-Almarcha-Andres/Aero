using Wappirepasoparcial.Models;

namespace Wappirepasoparcial.Repositories
{
    public interface IAeroRepo
    {
       
        Task<List<VUELOS>> GetAllVuelos();
    }
}

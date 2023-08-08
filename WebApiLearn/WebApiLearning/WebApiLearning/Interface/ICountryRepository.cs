using WebApiLearning.Models;

namespace WebApiLearning.Interface
{
    public interface ICountryRepository
    {
        ICollection<Country> GetCountries();
        Country GetCountry(int id);
        Country GetCountryByOwner(int ownerId);
        ICollection<Owner> GetOwnersFromCountry(int ownerId);
        bool CountryExists(int id);
    }
}

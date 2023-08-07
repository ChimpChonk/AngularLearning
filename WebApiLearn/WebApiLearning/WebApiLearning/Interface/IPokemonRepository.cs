using WebApiLearning.Models;

namespace WebApiLearning.Interface
{
    public interface IPokemonRepository
    {
        ICollection<Pokemon> GetPokemons();
        Pokemon GetPokemon(int id);
        Pokemon GetPokemon(string name);

        decimal GetPokemonRating(int pokeId);
        bool PokemonExists(int pokeId);

    }
}

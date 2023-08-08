using AutoMapper;
using WebApiLearning.Dto;
using WebApiLearning.Models;

namespace WebApiLearning.Helper
{
    public class MappingProgile : Profile
    {
        public MappingProgile()
        {
            CreateMap<Pokemon, PokemonDto>();
            CreateMap<Category, CategoryDto>();
            CreateMap<Country, CountryDto>();
            CreateMap<Owner, OwnerDto>();
        }
    }
}

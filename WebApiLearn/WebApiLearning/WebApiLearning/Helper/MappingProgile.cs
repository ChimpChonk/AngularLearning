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
            CreateMap<PokemonDto, Pokemon>();
            CreateMap<Category, CategoryDto>();
            CreateMap<CategoryDto, Category>();
            CreateMap<Country, CountryDto>();
            CreateMap<CountryDto, Country>();
            CreateMap<Owner, OwnerDto>();
            CreateMap<OwnerDto, Owner>();
            CreateMap<Reviewer, ReviewerDto>();
            CreateMap<ReviewerDto, Reviewer>();
            CreateMap<Review, ReviewDto>();
            CreateMap<ReviewDto, Review>();
        }
    }
}

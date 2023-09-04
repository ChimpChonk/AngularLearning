using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Security.Cryptography;
using System.Threading.Tasks;
using WebApiLearning.Dto;
using WebApiLearning.Interface;
using WebApiLearning.Models;

namespace WebApiLearning.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepo;
        private readonly IMapper _mapper;

        public UserController(IUserRepository userRepo, IMapper mapper)
        {
            _userRepo = userRepo;
            _mapper = mapper;
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(UserDTO request)
        {
            if (_userRepo.GetUserByUsername(request.Username) != null)
            {
                return BadRequest("Username already exists");
            }

            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

            var user = new User
            {
                Username = request.Username,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt
            };

            if (_userRepo.CreateUser(user))
            {
                return Ok(user);
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "User registration failed");
            }
        }

        [HttpPost("login")]
        public async Task<ActionResult<User>> Login(UserDTO request)
        {
            var user = _userRepo.GetUserByUsername(request.Username);

            if (user == null)
            {
                return BadRequest("Username Not Found");
            }

            if (!VerifyPasswordHash(request.Password, user.PasswordHash, user.PasswordSalt))
            {
                return BadRequest("Password Incorrect");
            }

            // You may want to return some user data or a token upon successful login.
            return Ok("Login Successful");
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);
            }
        }
    }
}

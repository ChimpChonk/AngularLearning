using System.Linq;
using WebApiLearning.Data;
using WebApiLearning.Interface;
using WebApiLearning.Models;

namespace WebApiLearning.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            _context = context;
        }

        public bool CreateUser(User user)
        {
            _context.Add(user);
            return Save();
        }

        public bool DeleteUser(User user)
        {
            _context.Remove(user);
            return Save();
        }

        public User GetUser(int userId)
        {
            return _context.Users.FirstOrDefault(u => u.Id == userId);
        }

        public User GetUserByUsername(string userName)
        {
            return _context.Users.FirstOrDefault(u => u.Username == userName);
        }

        public bool Save()
        {
            return _context.SaveChanges() > 0;
        }

        public bool UpdateUser(User user)
        {
            _context.Update(user);
            return Save();
        }

        public bool UserExists(int userId)
        {
            return _context.Users.Any(u => u.Id == userId);
        }
    }
}

using WebApiLearning.Models;

namespace WebApiLearning.Interface
{
    public interface IUserRepository
    {
        bool CreateUser(User user);
        User GetUser(int userId); // Change the return type to User
        bool UserExists(int userId);
        User GetUserByUsername(string userName); // Change the return type to User
        bool Save();
        bool UpdateUser(User user);
        bool DeleteUser(User user);
        object GetUsers();
    }
}

using prodZin_backend.Models;

namespace prodZin_backend.Interfaces
{
    public interface IPersonBase
    {
        Task<List<Person>> GetListAsync();
        Task<Person> GetByIdAsync(int id);
        Task<Person> CreateAsync(Person shortUrl);
        Task<Person> GetByPath(string path);
        Task<Person> UpdatePersonAsync(int id, Person person);
        Task<Person> DeletePersonAsync(int id);
        Person GetByInputUrl(string url);

        


    }
}

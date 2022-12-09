using prodZin_backend.Interfaces;
using prodZin_backend.Models;
using prodZin_backend.Datas;
using prodZin_backend.Helper;
using Microsoft.EntityFrameworkCore;

namespace prodZin_backend.Repositories
{
    public class PersonRepository : IPersonBase
    {
        private readonly prodZinDbContext _prodZinDbContext;
        public PersonRepository(prodZinDbContext prodZinDbContext)
        {
            _prodZinDbContext = prodZinDbContext;
        }

        public async Task<Person> CreateAsync(Person person)
        {
            await _prodZinDbContext.Person.AddAsync(person);
            await _prodZinDbContext.SaveChangesAsync();

            return person;
        }

        public async Task<List<Person>> GetListAsync()
        {
            return await _prodZinDbContext.Person.ToListAsync();
        }

        public async Task<Person> GetByIdAsync(int id)
        {
            return await _prodZinDbContext.Person.FirstOrDefaultAsync(i => i.Id == id);
        }

        public async Task<Person> GetByPath(string path)
        {
            return await _prodZinDbContext.Person.FindAsync(PersonHelper.Decode((path)));
        }

        public Person GetByInputUrl(string url)
        {
            return null;
        }

        public async Task<Person> UpdatePersonAsync(int id, Person person)
        {
            var updatePerson = await _prodZinDbContext.Person.FindAsync(id);
            if(updatePerson == null)
            {
                return null;
            }

             updatePerson.firstName = person.firstName;
             updatePerson.lastName = person.lastName;
             updatePerson.displayName = person.displayName;
             updatePerson.email = person.email;
             updatePerson.personNotes = person.personNotes;
             updatePerson.primaryAddress = person.primaryAddress;
             updatePerson.secondaryAddress = person.secondaryAddress;
             updatePerson.jobTitle = person.jobTitle;
             updatePerson.jobDescription = person.jobDescription;
             updatePerson.Country = person.Country;
             updatePerson.City = person.City;
             updatePerson.State = person.State;
             updatePerson.Zip = person.Zip;
             updatePerson.isFavorite = person.isFavorite;
             updatePerson.avatar = person.avatar;
             updatePerson.phone = person.phone;
             updatePerson.date = person.date;

            await _prodZinDbContext.SaveChangesAsync();

            return updatePerson;
        }
        public async Task<Person> DeletePersonAsync(int id)
        {
            var person = await _prodZinDbContext.Person.FindAsync(id);
            if (person == null)
            {
                return null;
            }

            _prodZinDbContext.Person.Remove(person);
            await _prodZinDbContext.SaveChangesAsync();

            return person;
        }
        
    }
}

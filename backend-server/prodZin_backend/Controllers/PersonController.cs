using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using prodZin_backend.Models;
using prodZin_backend.Datas;
using prodZin_backend.Interfaces;
using prodZin_backend.Helper;
using Microsoft.EntityFrameworkCore;

namespace prodZin_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private readonly IPersonBase _personBase;

        public PersonController(IPersonBase personBase)
        {
            _personBase = personBase;
        }

        [HttpGet]
        [SwaggerOperation(Summary = "List All Persons Info")]
        [SwaggerResponse(StatusCodes.Status200OK, "Request Successful", typeof(IActionResult))]
        public async Task<IActionResult> GetAllUrls()
        {
            var urls = await _personBase.GetListAsync();
            return Ok(urls);
        }

        [HttpGet]
        [SwaggerOperation(Summary = "Find Person Info")]
        [SwaggerResponse(StatusCodes.Status200OK, "Request Successful", typeof(IActionResult))]
        [Route("{id}")]
        public async Task<IActionResult> Show(int? id)
        {
            if (!id.HasValue)
            {
                return NotFound();
            }

            var single_person = await _personBase.GetByIdAsync(id.Value);
            if (single_person == null)
            {
                return NotFound();
            }

            return Ok(single_person);
        }

        [HttpPost]
        [SwaggerOperation(Summary = "Create Person Info")]
        [SwaggerResponse(StatusCodes.Status200OK, "Request Successful", typeof(IActionResult))]
        public async Task<IActionResult> Create([FromBody] Person request)
        {
            await _personBase.CreateAsync(request);
            return Ok(request);
        }

        [HttpPut]
        [Route("{id}")]
        [SwaggerOperation(Summary = "Update Person Info")]
        [SwaggerResponse(StatusCodes.Status200OK, "Request Successful", typeof(IActionResult))]
        public async Task<IActionResult> UpdatePerson(int id, Person person)
        {
            var updatePerson = await _personBase.UpdatePersonAsync(id, person);
            if(updatePerson == null)
            {
                return NotFound();
            }

            return Ok(updatePerson);
        }

        [HttpDelete]
        [Route("{id}")]
        [SwaggerOperation(Summary = "Delete Person Info")]
        [SwaggerResponse(StatusCodes.Status200OK, "Request Successful", typeof(IActionResult))]
        public async Task<IActionResult> DeletePerson(int id)
        {
            var person = await _personBase.DeletePersonAsync(id);

            if(person == null)
            {
                return NotFound();
            }

            return Ok(person);
        }
    }
}

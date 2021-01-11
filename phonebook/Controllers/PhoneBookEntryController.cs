using common.infrastructure.Requests;
using common.infrastructure.Responses;
using dataaccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace phonebook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhoneBookEntryController : ControllerBase
    {
        private readonly ILogger<PhoneBookEntryController> _logger;
        private IDataService _services;
        public PhoneBookEntryController(ILogger<PhoneBookEntryController> logger, IDataService services )
        {
            _logger = logger;
            _services = services;
        }

        [HttpPost]
        public PhoneBookResponses GetPhoneBookEntries([FromBody] GetPhoneBookRequest getPhoneBookRequest)
        {
            var response = _services.GetPhoneEntryByPhoneBookName(getPhoneBookRequest);
            return response;
        }

        [HttpPost("createentry")]
        public CreatePhoneBookResponses CreatePhoneBooks([FromBody] CreatePhoneBookRequest createPhoneBookRequest)
        {
            var response = _services.CreatePhoneBooks(createPhoneBookRequest);
            return response;

        }

    }
}

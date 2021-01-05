using System;
using System.Collections.Generic;
using System.Text;

namespace common.infrastructure.Requests
{
    public class CreatePhoneBookRequest
    {
        public string Email { get; set; }
        public string Surname { get; set; }
        public string Address { get; set; }
        public string Name { get; set; }

        public string PhoneBookName { get; set; }
        public string PhoneNumber { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace common.infrastructure.Responses
{
    public class GetPhoneBookResponses
    {
        public List<BookResponses> Books { get; set; }
        public bool Success { get; set; }
        public string Message { get; set; }

    }
}

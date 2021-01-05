using System;
using System.Collections.Generic;
using System.Text;

namespace common.infrastructure.Responses
{
    public class PhoneBookResponses
    {
        public string PhoneBookName { get; set; }
        public List<EntryResponses> GetEntryResponses { get; set; }
        public bool Success { get; set; }
        public string Message { get; set; }
    }
}

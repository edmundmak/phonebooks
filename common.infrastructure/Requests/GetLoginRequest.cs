using System;
using System.Collections.Generic;
using System.Text;

namespace common.infrastructure.Requests
{
    public class GetLoginRequest
    {
        
        public string Username { get; set; }

        public string Password { get; set; }
    }
}

using System;
using System.Collections.Generic;

#nullable disable

namespace dataaccess.Model
{
    public partial class Entry
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public int? PhoneBookId { get; set; }
    }
}

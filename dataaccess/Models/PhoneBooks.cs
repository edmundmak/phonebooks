using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace dataaccess.Models
{
    public class PhoneBooks
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<PhoneBookEntry>  PhoneBookEntries { get; set; }
    }
}

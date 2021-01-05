using common.infrastructure.Responses;
using common.infrastructure.Requests;
using System;
using System.Collections.Generic;
using System.Text;

namespace dataaccess
{
    public interface IDataService
    {
        public PhoneBookResponses GetPhoneEntryByPhoneBookName(GetPhoneBookRequest getPhoneBook);
        public CreatePhoneBookResponses CreatePhoneBooks(CreatePhoneBookRequest createPhoneBookRequest);
    }
}

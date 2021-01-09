using common.infrastructure.Requests;
using common.infrastructure.Responses;
using dataaccess.Models;
using System.Linq;
using System.Collections.Generic;
using System;
using System.Collections.Generic;
using System.Text;

namespace dataaccess
{
    public class DataService :IDataService
    {
        public PhoneBookResponses GetPhoneEntryByPhoneBookName(GetPhoneBookRequest getPhoneBook)
        {
            try
            {
                using (var dbcontext = new PhoneBooksContext())
                {
                    var phonebooks = dbcontext.PhoneBooks.Where(p => p.Name.Equals(getPhoneBook.Name)).FirstOrDefault();
                    var getEntries = this.getEntriesByPhoneBookID(phonebooks.Id);
                    return new PhoneBookResponses { PhoneBookName = phonebooks.Name, GetEntryResponses = getEntries.ToList(), Success=true, Message=string.Empty };
                }
            }
            catch(Exception ex)
            {
                return new PhoneBookResponses { PhoneBookName = string.Empty, GetEntryResponses = null, Success = false, Message = ex.Message };
            }
        }

        public CreatePhoneBookResponses CreatePhoneBooks(CreatePhoneBookRequest createPhoneBookRequest)
        {
            try
            {
                using (var dbcontext = new PhoneBooksContext())
                {
                    PhoneBooks addBook = new PhoneBooks { Name = createPhoneBookRequest.PhoneBookName };
                    var checkPhoneBookNameIFExists = dbcontext.PhoneBooks.Where(name => name.Name.Equals(createPhoneBookRequest.PhoneBookName)).SingleOrDefault();
                    int phonebookID;
                    if (checkPhoneBookNameIFExists.Id < 0)
                    {
                        dbcontext.PhoneBooks.Add(addBook);
                        dbcontext.SaveChanges();
                        phonebookID = addBook.Id;
                    }
                    else
                    {
                        phonebookID = checkPhoneBookNameIFExists.Id;
                    }
                    PhoneBookEntry bookEntry = new PhoneBookEntry
                    {
                        Name = createPhoneBookRequest.Name, 
                        PhoneBooksId= phonebookID,
                        PhoneNumber = createPhoneBookRequest.PhoneNumber
                    };
                    dbcontext.PhoneBookEntries.Add(bookEntry);
                    dbcontext.SaveChanges();
                    return new CreatePhoneBookResponses { Success = true, Message = string.Empty };
                }
            }
            catch (Exception ex)
            {
                return new CreatePhoneBookResponses { Success = false, Message = ex.Message };
            }
        }
        private List<EntryResponses> getEntriesByPhoneBookID(int phonebookID)
        {
            List<EntryResponses> entryResponses=new List<EntryResponses>();
              using (var dbcontext = new PhoneBooksContext())
                {
                    var entries = dbcontext.PhoneBookEntries.Where(entry => entry.PhoneBooksId.Equals(phonebookID)).ToList();
                    foreach (var entry in entries)
                    {
                        EntryResponses newEntry = new EntryResponses
                        {
                           
                            ID = entry.Id,
                            Name = entry.Name,
                            PhoneNumber = entry.PhoneNumber
                        };
                        entryResponses.Add(newEntry);
                    }
                    return entryResponses;
                }
            }
        }
    }


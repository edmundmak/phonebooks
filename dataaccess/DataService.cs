using common.infrastructure.Requests;
using common.infrastructure.Responses;
using dataaccess.Model;
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
                using (var dbcontext = new PhoneBookContext())
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
                using (var dbcontext = new PhoneBookContext())
                {
                    PhoneBook addBook = new PhoneBook { Name = createPhoneBookRequest.PhoneBookName };
                    dbcontext.PhoneBooks.Add(addBook);
                    dbcontext.SaveChanges();
                    var phonebookID = addBook.Id;

                    Entry bookEntry = new Entry
                    {
                        Address = createPhoneBookRequest.Address,
                        Email = createPhoneBookRequest.Email,
                        Name = createPhoneBookRequest.Name,
                        PhoneBookId = phonebookID,
                        PhoneNumber = createPhoneBookRequest.PhoneNumber,
                        Surname = createPhoneBookRequest.Surname
                    };
                    dbcontext.Entries.Add(bookEntry);
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
            List<EntryResponses> entryResponses=null;
              using (var dbcontext = new PhoneBookContext())
                {
                    var entries = dbcontext.Entries.Where(entry => entry.PhoneBookId.Equals(phonebookID)).ToList();
                    foreach (var entry in entries)
                    {
                        EntryResponses newEntry = new EntryResponses
                        {
                            Address = entry.Address,
                            Email = entry.Email,
                            ID = entry.Id,
                            Name = entry.Name,
                            PhoneNumber = entry.PhoneNumber,
                            Surname = entry.Surname
                        };
                        entryResponses.Add(newEntry);
                    }
                    return entryResponses;
                }
            }
        }
    }


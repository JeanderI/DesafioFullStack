import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { IContactUpdateRequest } from "../../interfaces/contacts.interfaces";
import { contactSchemaUpdate } from "../../schemas/contact.schemas";

const updateContactService = async (
  contactId: number,
  contactData: IContactUpdateRequest
) => {
  const contactRespository = AppDataSource.getRepository(Contact);

  const contact = await contactRespository.findOneBy({ id: contactId });

  const updateContact = contactRespository.create({
    ...contact,
    ...contactData,
  });

  await contactRespository.save(updateContact);

  const update = contactSchemaUpdate.parse(updateContact);

  return update;
};

export default updateContactService;

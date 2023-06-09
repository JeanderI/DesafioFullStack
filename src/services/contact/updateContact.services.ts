import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { AppError } from "../../errors";
import { IContactUpdateRequest } from "../../interfaces/contacts.interfaces";
import { contactSchemaUpdate } from "../../schemas/contact.schemas";

const updateContactService = async (
  contactId: number,
  contactData: IContactUpdateRequest
) => {
  const contactRespository = AppDataSource.getRepository(Contact);

  const contact = await contactRespository.findOneBy({ id: contactId });
  if (!contact) {
    throw new AppError("Contact not found", 404);
  }
  if (contactData.email && contactData.email !== contact.email) {
    const existingContact = await contactRespository.findOne({
      where: { email: contactData.email },
    });

    if (existingContact) {
      throw new AppError("Email already exists for another contact", 409);
    }
  }
  const updateContact = contactRespository.create({
    ...contact,
    ...contactData,
  });

  await contactRespository.save(updateContact);

  const update = contactSchemaUpdate.parse(updateContact);

  return update;
};

export default updateContactService;

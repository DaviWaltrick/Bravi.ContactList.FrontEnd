export class Contact {
    type: ContactType;
    contactId: number;
    name: string;
    contactData: string;
}

export enum ContactType{
    Email = 1,
    WhatsApp = 2,
    Phone = 3
}
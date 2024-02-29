class Contact {
    // Private Instance Variable
    private fullName: string;
    private contactNumber: string;
    private emailAddress: string;

    // Public Properties
    get FullName(): string {
        return this.fullName;
    }

    get ContactNumber(): string {
        return this.contactNumber;
    }

    get EmailAddress(): string{
        return this.emailAddress;
    }

    set FullName(newFullName: string) {
        this.fullName = newFullName;
    }

    set ContactNumber(newContactNumber: string) {
        this.contactNumber = newContactNumber;
    }

    set EmailAddress(newEmailAddress: string) {
        this.emailAddress = newEmailAddress;
    }

    // Constructor
    constructor(fullName: string = "Unknown Name", contactNumber: string = "No Contact", emailAddress: string = "No Address") {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }

    // Public Member
    public toString(): string {
        let output = "";
        output += `Full Name      : ${this.FullName}\n`;
        output += `Contact Number : ${this.ContactNumber}\n`
        output += `Email Address  : ${this.EmailAddress}`
        return output;
    }


    // serialization or encoding the data
    public toJSON(): string {
        return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`
    }

    // deserializing or decoding the data
    public fromJSON(data: string): void {
        let arrayData: string[] = data.split(",");
        this.FullName = arrayData[0];
        this.ContactNumber = arrayData[1];
        this.EmailAddress = arrayData[2];
    }

    // Private Member
    
}
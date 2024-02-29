class Contact {
    // Private Instance Variable
    fullName;
    contactNumber;
    emailAddress;
    // Public Properties
    get FullName() {
        return this.fullName;
    }
    get ContactNumber() {
        return this.contactNumber;
    }
    get EmailAddress() {
        return this.emailAddress;
    }
    set FullName(newFullName) {
        this.fullName = newFullName;
    }
    set ContactNumber(newContactNumber) {
        this.contactNumber = newContactNumber;
    }
    set EmailAddress(newEmailAddress) {
        this.emailAddress = newEmailAddress;
    }
    // Constructor
    constructor(fullName = "Unknown Name", contactNumber = "No Contact", emailAddress = "No Address") {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }
    // Public Member
    toString() {
        let output = "";
        output += `Full Name      : ${this.FullName}\n`;
        output += `Contact Number : ${this.ContactNumber}\n`;
        output += `Email Address  : ${this.EmailAddress}`;
        return output;
    }
}
//# sourceMappingURL=contact.js.map
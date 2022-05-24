export class Proposal {
    combination?: string[];
    maxWidth?: Number;

    constructor(fields: Partial<Proposal> = {}) {
        Object.assign(this, fields);        
    }

}

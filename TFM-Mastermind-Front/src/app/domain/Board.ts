export class Board {
    secretCombination?: {
        combination?: string[];
        maxWidth?: Number;
    }

    constructor(fields: Partial<Board> = {}) {
        Object.assign(this, fields);        
    }

}
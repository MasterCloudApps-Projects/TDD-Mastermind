import { Proposal } from "./Proposal";
import { Result } from "./Result";

export class Board {
    secretCombination?: Proposal;
    proposalCombination?: Proposal[];
    actualIntent?: number;
    results?: Result[];

    constructor(fields: Partial<Board> = {}) {
        Object.assign(this, fields);        
    }

}
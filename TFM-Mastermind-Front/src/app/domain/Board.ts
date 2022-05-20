import { Proposal } from "./proposal";

export class Board {
    secretCombination?: Proposal;
    proposalCombination?: Proposal[];
    actualIntent?: number;

    constructor(fields: Partial<Board> = {}) {
        Object.assign(this, fields);        
    }

}
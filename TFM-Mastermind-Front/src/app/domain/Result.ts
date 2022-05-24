export class Result {
    white?: number;
    black?: number;
    winner?: boolean;

    constructor(fields: Partial<Result> = {}) {
        Object.assign(this, fields);        
    }

}

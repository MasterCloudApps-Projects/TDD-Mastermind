export class Result {
    white?: Number;
    black?: Number;
    winner?: Boolean;

    constructor(fields: Partial<Result> = {}) {
        Object.assign(this, fields);        
    }

}

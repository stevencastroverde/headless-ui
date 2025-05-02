import { BaseData } from "./useTable";


export class Row <T extends BaseData>{
    readonly id: string;
    readonly data: T

    constructor(data: T) {
        this.id = data.id;
        this.data = data;
    }
}
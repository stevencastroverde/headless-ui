import { Dispatch, ReactNode } from "react";
import { BaseData } from "./useTable";

export class Column<T extends BaseData> {
    readonly id: string;
    readonly dispatch: Dispatch<Action>;
    private _header: string | ReactNode;
    private _filterValue: any = null;
    

    // needs to support sorting, filtering
    // sorting can be ascending, descending, or none
    // custom sorting function
    // basic filtering can be seeing if text is included in value
    // custom filtering function

    constructor(
       column: ColumnDefinition<T>, dispatch: Dispatch<Action>) {
        this.id = column.id;
        this.dispatch = dispatch;
        this._header = column.header;
        this._filterValue = column.filterValue;
       }


       set filterValue(value: any) {
        this._filterValue = value;
        this.dispatch({type: 'FILTER', payload: {id: this.id, value: this._filterValue}});
       }
}
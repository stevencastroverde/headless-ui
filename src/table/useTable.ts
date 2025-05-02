import { useReducer, ReactNode } from "react"
// should have state for the table
// state filtering and sorting

// needs to return columns, rows, and the table state

// remote filtering and sorting on server
// filtering and sorting on client


const tableReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SORT':
            return action.payload
        case 'FILTER':
            return action.payload
    }
}

const initialState = {

}


type Row  = {};
type ColumnDefinition = {
    header: string | ReactNode;
    render: (row: Row) => ReactNode | string;
    id: string;
    sortFn?: (a: Row, b: Row) => number;
    filterFn?: (row: Row) => boolean;


}

export type BaseData = {
    id: string;
}
interface TableProps<T> {
    data: T[];
    columns: ColumnDefinition[];
}

export function useTable<T extends BaseData>({data, columns}: TableProps<T>) {

    const [tableState, dispatch] = useReducer(tableReducer, {})

    const state = {}
    const columns =[]
    const rows = []





    return {
        tableState,
        columns,
        rows
    }
}
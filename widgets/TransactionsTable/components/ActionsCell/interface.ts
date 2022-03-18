import {Transaction} from "../../../../data-structures/definitions/transactions";

export type EditAction = (t: Transaction)=>void;

export type DeleteAction = (t: Transaction)=>void;

export interface ActionsCellProps{
    editAction: ()=>void;
    deleteAction: ()=>void;
}
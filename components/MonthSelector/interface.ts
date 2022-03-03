export interface MonthSelectorProps{
    date: Date;
    previousMonth: ()=>void;
    nextMonth:()=>void
    formatMonth:(date:Date)=>string
}
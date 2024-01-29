export interface Transaction {
    id?: string;
    creditor_id: string;
    debitor_id: string;
    payment: number;
    title: string;
    description: string;
}
export interface Transaction {
    id: string;
    creditorId: string;
    debitorId: string;
    payment: string;
    title: string;
    description: string;
}
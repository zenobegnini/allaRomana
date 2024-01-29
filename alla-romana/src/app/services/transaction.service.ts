import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import axios from 'axios';
import { Transaction } from '../../models/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  baseUrl: string = 'http://127.0.0.1:8090/';

  constructor() {}

  async getAllUser(): Promise<User[]> {
    let response = await axios.get(
      this.baseUrl + '/api/collections/Users/records'
    );
    let allUsersAL: User[] = response.data;
    return allUsersAL;
  }
  
  async getUserById(id: string): Promise<User> {
    let response = await axios.get(
      this.baseUrl + '/api/collections/Users/records/' + id
    );
    let userById: User = response.data;
    return userById;
  }

  async getAllTransaction(): Promise<Transaction[]> {
    let response = await axios.get(
      this.baseUrl + '/api/collections/Transactions/records'
    );
    let allTransactionAL: Transaction[] = response.data;
    return allTransactionAL;
  }

  async getTransactionById(id: string): Promise<Transaction[]> {
    let response = await axios.get(
      this.baseUrl +
        "/api/collections/Transactions/records?filter=(creditor_id='" +
        id +
        "'||debitor_id='" + id + "')"
    );
    let transactionByCreditorId: Transaction[] = response.data;
    return transactionByCreditorId;
  }

  async insertTransaction(transaction: Transaction): Promise<void> {
    await axios.post(this.baseUrl + '/api/collections/Transactions/records', {
      creditor_id: transaction.creditorId,
      debitor_id: transaction.debitorId,
      payment: transaction.payment,
      title: transaction.title,
      description: transaction.description
    });
  }

  async updateUser(id: string, money: number): Promise<void> {
    await axios.post(
      this.baseUrl + "/api/collections/Users/records/" + id,
      {
        money: money
      }
    );
  }
}

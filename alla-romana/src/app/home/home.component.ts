import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../services/transaction.service';
import { User } from '../../models/user';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly transactionService: TransactionService;
  transactions: Transaction[] = [];
  users: User[] = [];

  constructor(transactionService: TransactionService) {
    this.transactionService = transactionService
  }

  async ngOnInit() {
    await this.transactionService.getAllTransaction().then(response => {
      this.transactions = response;
      });
      
    await this.transactionService.getAllUser().then(response => {
      this.users = response;
    });
  }

  getUsername(creditor_id: string) {
    let username: string = "";
    for(let user of this.users) {
      if(user.id == creditor_id) {
        username = user.username;
      }
    }
    return username;
  }
  
}

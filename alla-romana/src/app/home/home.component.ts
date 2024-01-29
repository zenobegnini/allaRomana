import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../services/transaction.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly transactionService: TransactionService;
  transactions: Transaction[] = []

  constructor(transactionService: TransactionService) {
    this.transactionService = transactionService
  }

  async ngOnInit() {
    this.transactions = await this.transactionService.getAllTransaction();
    console.log(this.transactions);
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { User } from '../../models/user';
import { TransactionService } from '../services/transaction.service';
import { count } from 'rxjs';
import { Transaction } from '../../models/transaction';
import {MatSelectModule} from '@angular/material/select';
@Component({
  selector: 'app-pagamento',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MatInputModule, MatIconModule, MatButtonModule, MatTooltipModule, MatCheckboxModule, MatSelectModule],
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.css'
})
export class PagamentoComponent {
  readonly transactionService: TransactionService;  
  public importDivided: number = 0;
  public import: number = 0
  public title!: string
  checked = false;
  public users: User[] = []
  public payUser: { [key: string]: boolean } = {}
  transaction!: Transaction;
  public currentUser: string= "";

  payDivded(): void {
    let lengthArray: number = Object.keys(this.payUser).filter(key => this.payUser[key]).length
    this.importDivided = this.import / lengthArray;
    console.log(this.currentUser)
  }

  constructor(transactionService: TransactionService) { 
    this.transactionService = transactionService;
  }

  async ngOnInit() {
    this.users = await this.transactionService.getAllUser();
  }

  
  createTransaction(){
    let users = Object.keys(this.payUser).filter(key => this.payUser[key]);
    for(let user of users) {
      let transaction: Transaction = {creditor_id: this.currentUser, debitor_id: user, description: "", title: this.title, payment: this.importDivided}
      this.transactionService.insertTransaction(transaction);
      
    }
    console.log(this.payUser)
  }


}

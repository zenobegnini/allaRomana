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
@Component({
  selector: 'app-pagamento',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MatInputModule, MatIconModule, MatButtonModule, MatTooltipModule, MatCheckboxModule],
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.css'
})
export class PagamentoComponent {
  readonly transactionService: TransactionService;  

  public import: number = 0
  public title!: string
  checked = false;
  public users: User[] = []
  public payUser: { [key: string]: boolean } = { ['1']: false }

  constructor(transactionService: TransactionService) {
    this.transactionService = transactionService;
  }

  async ngOnInit() {
    this.users = await this.transactionService.getAllUser();
  }


}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-pagamento',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MatInputModule, MatIconModule, MatButtonModule, MatTooltipModule, MatCheckboxModule],
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.css'
})
export class PagamentoComponent {
  public import: number = 0
  checked = false;
  public users: any[] = [{
    id: '1'
  },
  ]

  public payUser: { [key: string]: boolean } = { ['1']: false }


}

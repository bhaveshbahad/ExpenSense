import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  expense: Expense = new Expense();
 


  constructor(private _expenseService: ExpenseService,
              private _router: Router) { }

  ngOnInit(): void {
    
  }

  saveExpense() {
    this._expenseService.saveExpense(this.expense).subscribe(
      data => {
        console.log('response', data);
        this._router.navigateByUrl("/expenses");
      }
    )
  }
}
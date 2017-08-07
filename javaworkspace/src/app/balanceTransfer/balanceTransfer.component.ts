import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

@Component({
    styleUrls: ['./balanceTransfer.component.css'],
    selector: 'app-balance-transfer',
    templateUrl: './balanceTransfer.component.html'
})

export class BalanceTransferComponent {

    rForm: FormGroup;
    post: any;                     // A property for our submitted form
    balance: any = '';
    rate: any = '';
    interest: any;
    result: any;
    titleAlert: string = 'This field is required';
    showResult: boolean = false;


    constructor(private fb: FormBuilder) {

        this.rForm = fb.group({
            'balance': [null, Validators.required],
            'rate': [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2)])]
        });

    }

    addPost(post) {

        this.balance = post.balance;
        this.rate = post.rate;
 
        this.result = (this.balance * 100) / (parseFloat(this.rate) + 100);
        this.result = parseFloat(this.result.toFixed(2));
        this.interest = parseFloat(this.balance) - parseFloat(this.result);
        this.interest = parseFloat(this.interest.toFixed(2));
        this.showResult = true;
    }

    ngOnInit() {
        this.showResult = false;
    }
}

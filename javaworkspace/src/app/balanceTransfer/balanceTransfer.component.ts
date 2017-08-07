import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    styleUrls: ['./balanceTransfer.component.css'],
    selector: 'app-balance-transfer',
    templateUrl: './balanceTransfer.component.html'
})

export class BalanceTransferComponent {
    public labels = ['one', 'two', 'three'];


    rForm: FormGroup;
    post: any;                     // A property for our submitted form
    balance: string = '';
    rate: string = '';

    constructor(private fb: FormBuilder) {

        this.rForm = fb.group({
            'balance': [null, Validators.required],
            'rate': [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2)])],
            'validate': ''
        });

    }

    addPost(post) {
        this.balance = post.description;
        this.rate = post.name;
    }
}

import { ContentComponent } from './content/content.component';
import { BalanceTransferComponent } from './balanceTransfer/balanceTransfer.component';
import { CodeComponent } from './code/code.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ValidNumberPipe } from './pipes/valid-number.pipe';

const appRoutes: Routes = [
  { path: '', component: BalanceTransferComponent },
  { path: 'balanceTransfer', component: BalanceTransferComponent },
  { path: 'code', component: CodeComponent }
];

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, CodeComponent, BalanceTransferComponent, ContentComponent,
    ValidNumberPipe
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

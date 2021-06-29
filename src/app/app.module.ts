import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { ButtonComponent } from './components/button/button.component';
import { SummaryComponent } from './components/summary/summary.component';
import { WizardNavComponent } from './components/wizard-nav/wizard-nav.component';
import { ValidationComponent } from './components/validation/validation.component';

import { cartReducer } from './reducers/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    ButtonComponent,
    SummaryComponent,
    WizardNavComponent,
    ValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ cart: cartReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

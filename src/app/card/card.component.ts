import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { EmailInputComponent } from "./email-input/email-input.component";
import { PasswordInputComponent } from "./password-input/password-input.component";
import { NameInputComponent } from "./name-input/name-input.component";
import { LastNameInputComponent } from "./last-name-input/last-name-input.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { GenderComponent } from "./gender/gender.component";
import { ButtonRegisterComponent } from './button-register/button-register.component';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrl: 'card.component.css',
  standalone: true,
  imports: [MatCardModule, EmailInputComponent, PasswordInputComponent, NameInputComponent, LastNameInputComponent, DatepickerComponent, GenderComponent, ButtonRegisterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}
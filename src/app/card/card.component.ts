import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';

/** ErrorStateMatcher personalizado */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  hide = true;
  enviado = false;
  matcher = new MyErrorStateMatcher();

  // Definir el FormGroup para el formulario completo
  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
  });

  crearJson() {
    if (this.formGroup.valid) {
      const json = this.formGroup.value;
      console.log(json);
      this.enviado = true;
    } else {
      alert('Formulario inválido, revisa los campos.');
      this.formGroup.markAllAsTouched();
    }
  }


  limpiarCampos() {
    this.formGroup.reset();
    this.enviado=false;
  }
}

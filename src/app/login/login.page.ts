import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  usuario: string = ''; // Inicializa la propiedad usuario
  contrasena: string = ''; // Inicializa la propiedad contrasena

  constructor(private navCtrl: NavController) {}

  agregarDatos() {
    // Validar los campos
    if (this.usuario.length >= 3 && this.usuario.length <= 8 && /^\d{4}$/.test(this.contrasena)) {
      // Los datos son válidos, pasar a la página Home
      this.navCtrl.navigateForward('/home', {
        queryParams: {
          usuario: this.usuario,
          contrasena: this.contrasena,
        },
      });
    } else {
      // Mostrar un mensaje de error
      // Puedes agregar lógica adicional para mostrar mensajes de error personalizados
    }
  }
}

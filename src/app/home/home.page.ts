import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: string = '';
  contrasena: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';

  constructor(private route: ActivatedRoute, private alertController: AlertController) {
    this.route.queryParams.subscribe((params) => {
      if (params['usuario'] && params['contrasena']) {
        this.usuario = params['usuario'];
        this.contrasena = params['contrasena'];
      }
    });
  }

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = '';
  }

  async mostrarInformacion() {
    const alert = await this.alertController.create({
      header: 'Información Adicional',
      message: `Nombre: ${this.nombre} Apellido: ${this.apellido}`,
      buttons: ['OK'],
    });

    await alert.present();
  }
}

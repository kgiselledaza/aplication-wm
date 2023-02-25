import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/home',
      },
      {
        label: 'Administración',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Usuarios',
            icon: 'pi pi-users',
            routerLink: '/administration/list-users',
          },
          { label: 'Empresas', icon: 'pi pi-briefcase', routerLink: '/administration/list-companies' },
          { label: 'Contratistas', icon: 'pi pi-id-card' },
          { label: 'Parametros', icon: 'pi pi-book' },
          { label: 'Roles', icon: 'pi pi-verified' },
          { label: 'Sucursales empresa', icon: 'pi pi-building' },
          { label: 'Dispositivos ', icon: 'pi pi-tablet' },
          { label: 'Estructuras ', icon: 'pi pi-sitemap' },
          { label: 'Liberar sesión', icon: 'pi pi-lock-open' },
          { label: 'Llaves sesión', icon: 'pi pi-key' },
          {
            label: 'Configuración móvil',
            items: [
              { label: 'Rutero', icon: 'pi pi-map' },
              { label: 'Detalle rutero', icon: 'pi pi-list' },
              { label: 'Logo y color', icon: 'pi pi-palette' },
            ],
          },
        ],
      },
    ];
  }
}

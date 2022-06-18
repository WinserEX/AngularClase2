import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piloto',
  templateUrl: './piloto.component.html',
  styleUrls: ['./piloto.component.scss']
})
export class PilotoComponent implements OnInit {
  title = 'Piloto';
  status = 'inactivo';

  users = [
    {
      name: 'Winser',
      lastname: 'Espinal',
      status: 'inactivo',      

    },

    {
      name: 'Katherine',
      lastname: 'De Espinal',
      status: 'activo',
    },

    {
      name: 'Raymond',
      lastname: 'Espinal',
      status: 'inactivo',
    },

    {
      name: 'Liliam',
      lastname: 'Espinal',
      status: 'activo',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {
  residenceId!: number;
  residence: Residence = new Residence();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.residenceId = +id;
        this.loadResidenceDetails();
      }
    });
  }

  loadResidenceDetails(): void {
    // Remplacez cette logique par une requête réelle pour obtenir les détails de la résidence
    const residences: Residence[] = [
      { id: 1, name: 'El fel', address: 'Borj Cedria', image: '../../assets/images/R1.png', status: 'Disponible' },
      { id: 2, name: 'El yasmine', address: 'Ezzahra', image: '../../assets/images/R2.jpg', status: 'Disponible' },
      { id: 3, name: 'El Arij', address: 'Rades', image: '../../assets/images/R3.jpg', status: 'Vendu' },
      { id: 4, name: 'El Anber', address: 'inconnu', image: '../../assets/images/R4.jpg', status: 'En Construction' }
    ];

    this.residence = residences.find(res => res.id === this.residenceId)!;
  }
}

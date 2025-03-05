import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residenceId!: number;
  residence!: Residence;

   residences: Residence[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: '../../assets/images/R1.png', status: 'Disponible' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: '../../assets/images/R2.jpg', status: 'Disponible' },
    { id: 3, name: 'El Arij', address: 'Rades', image: '../../assets/images/R3.jpg', status: 'Vendu' },
    { id: 4, name: 'El Anber', address: 'inconnu', image: '../../assets/images/R4.jpg', status: 'En Construction' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.residenceId = +params.get('id')!;
      this.loadResidenceDetails();
    });
  }

  loadResidenceDetails(): void {
    this.residence = this.residences.find(res => res.id === this.residenceId)!;
  }

  goToNextResidence(): void {
    const currentIndex = this.residences.findIndex(res => res.id === this.residenceId);
    const nextIndex = (currentIndex + 1) % this.residences.length;
    const nextResidenceId = this.residences[nextIndex].id;
    this.router.navigate(['/residence', nextResidenceId]);
  }

}

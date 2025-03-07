import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/core/models/residence';
import { CommonService } from 'src/core/models/services/common.service';
import { ResidenceService } from 'src/core/models/services/residence.service';

@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css']
})
export class ResidencesComponentComponent implements OnInit {
  listResidences: Residence[] = [];
  favoriteResidences: Residence[] = [];
  searchAddress: string = '';
  residance!: Residence;

  constructor(private commonService: CommonService, private residenceService: ResidenceService) {}

  ngOnInit(): void {
    this.residenceService.getResidences().subscribe(residences => {
      this.listResidences = residences;
    });
  }

  showLocation(address: string): void {
    if (address === 'inconnu') {
      alert('L’adresse de cette résidence est « inconnu »');
    } else {
      alert(`Adresse: ${address}`);
    }
  }

  addToFavorites(residence: Residence): void {
    if (!this.favoriteResidences.includes(residence)) {
      this.favoriteResidences.push(residence);
      alert(`${residence.name} a été ajouté aux favoris.`);
    } else {
      alert(`${residence.name} est déjà dans les favoris.`);
    }
  }

  getFilteredResidences(): Residence[] {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchAddress.toLowerCase())
    );
  }

  getSimilarAddressesCount(address: string): number {
    return this.commonService.getSameValueOf(this.listResidences, 'address', address);
  }

  deleteResidence(id: number): void {
    this.residenceService.DeleteResidence(id).subscribe(
      ()=>this.ngOnInit()
    )
  }

  
}
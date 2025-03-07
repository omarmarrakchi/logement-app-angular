import { Component, OnInit } from '@angular/core';
import { Apartment } from 'src/core/models/apartment';
import { CommonService } from 'src/core/models/services/common.service';


@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {

  listApartments: Apartment[] = [
    { apartNum: 101, floorNum: 1, surface: 75, terrace: true, surfaceterrace: 10, category: 'T2', ResidenceId: 1, image: "../../../assets/images/app1.jpg" },
    { apartNum: 102, floorNum: 1, surface: 80, terrace: false, surfaceterrace: 0, category: 'T3', ResidenceId: 1, image: "../../../assets/images/app2.jpg" },
    { apartNum: 201, floorNum: 2, surface: 90, terrace: true, surfaceterrace: 15, category: 'T3', ResidenceId: 2, image: "../../../assets/images/app3.jpg" },
    { apartNum: 202, floorNum: 2, surface: 85, terrace: false, surfaceterrace: 0, category: 'T2', ResidenceId: 2, image: "../../../assets/images/app4.jpg" },
    { apartNum: 301, floorNum: 3, surface: 100, terrace: true, surfaceterrace: 20, category: 'T4', ResidenceId: 3, image: "../../../assets/images/app5.jpg" },
    { apartNum: 302, floorNum: 3, surface: 95, terrace: false, surfaceterrace: 0, category: 'T3', ResidenceId: 3, image: "../../../assets/images/app6.jpg" },
    { apartNum: 401, floorNum: 4, surface: 110, terrace: true, surfaceterrace: 25, category: 'T4', ResidenceId: 4, image: "../../../assets/images/app7.jpg" },
    { apartNum: 402, floorNum: 4, surface: 105, terrace: false, surfaceterrace: 0, category: 'T3', ResidenceId: 4, image: "../../../assets/images/app8.jpg" }
  ];

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    
  }

  getSimilarSurface(surface: number): number {
    return this.commonService.getSameValueOf(this.listApartments, 'surface', surface);
  }
    

}

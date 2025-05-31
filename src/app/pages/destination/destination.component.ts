import { Component, OnInit } from '@angular/core';
import {
  DestinationService,
  Destination,
} from '../../services/destination.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destination',
  imports: [CommonModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css',
})
export class DestinationComponent implements OnInit {
  destinations: Destination[] = [];
  isLogged = false;

  constructor(private destinationService: DestinationService) {}

  ngOnInit() {
    this.destinationService.getDestination().subscribe((data) => {
      console.log(data);
      this.destinations = data;
    });
  }
}

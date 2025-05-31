import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Destination', path: '/destination' },
    { label: 'Crew', path: '/crew' },
    { label: 'Technology', path: '/technology' },
  ];
}

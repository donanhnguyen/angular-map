import { Component } from '@angular/core';

@Component({
  selector: 'app-worldmap',
  standalone: true,
  imports: [],
  templateUrl: './worldmap.component.html',
  styleUrl: './worldmap.component.css'
})
export class WorldmapComponent {
  onMapClick(event: MouseEvent): void {
    console.log('Map clicked:', event);
  }

  onMapLoad(event: Event): void {
    console.log('Map loaded:', event);
  }
}
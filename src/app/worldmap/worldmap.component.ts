import { Component, ElementRef, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { CountryinfoComponent } from '../countryinfo/countryinfo.component';

@Component({
  selector: 'app-worldmap',
  standalone: true,
  imports: [CommonModule, CountryinfoComponent, HttpClientModule], 
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css']
})
export class WorldmapComponent implements OnInit {

  constructor(private http: HttpClient, private el: ElementRef) {}

  ngOnInit(): void {
    // Load the SVG content and inject it into the component
    this.http.get('../../assets/map-image.svg', { responseType: 'text' }).subscribe(svgContent => {
      const container = this.el.nativeElement.querySelector('.worldmap-container');
      container.innerHTML = svgContent;
      this.addEventListeners(container);
    });
  }

  private addEventListeners(container: HTMLElement): void {
    // adding mouse click event handlers
    const paths = container.querySelectorAll('path');
    paths.forEach((path) => {
      path.addEventListener('click', (event) => this.onPathClick(event));
    });
  }

  onPathClick(event: Event): void {
    // event handler itself
    const target = event.target as SVGPathElement;
    const countryName = target.getAttribute('name');
    const countryId = target.getAttribute('id');
    console.log(`Country clicked: Name = ${countryName}, ID = ${countryId}`);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchTerm: string = '';
  filteredType: string = '';

  handleSearch(searchValue: string) {
    this.searchTerm = searchValue;
  }

  handleTypeChange(type: string) {
    this.searchTerm = type;
  }
}

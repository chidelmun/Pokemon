import {Component} from '@angular/core';
import {ViewMode} from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  viewMode: ViewMode = ViewMode.Grid;
  searchTerm: string = '';
  filterByFavorites: boolean = false;

  handleSearch(searchValue: string) {
    this.searchTerm = searchValue;
    this.filterByFavorites = false;
  }

  handleTypeChange(type: string) {
    this.searchTerm = type;
  }

  handleAllClicked(event: any) {
    this.filterByFavorites = false;
    this.searchTerm = '';
  }

  handleFavoritesClick(event: any) {
    this.filterByFavorites = true;
  }

  handleListMode() {
    this.viewMode = ViewMode.List;
  }

  handleGridMode() {
    this.viewMode = ViewMode.Grid;
  }
}

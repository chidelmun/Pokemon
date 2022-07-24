import {Component} from '@angular/core';
import {ViewMode} from "./models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  viewMode: ViewMode = ViewMode.Grid;
  searchTerm: string = '';
  filterByFavorites: boolean = false;

  constructor(private router: Router) {
  }

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

  isDetailView() {
    return this.router.url.length === 1;
  }
}

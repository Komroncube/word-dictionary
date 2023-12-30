import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WordCardComponentComponent } from "./components/word-card-component/word-card-component.component";
import { HomeComponent } from "./components/home/home.component";
import { DetailsComponent } from "./components/details/details.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
    imports: [CommonModule, RouterOutlet, WordCardComponentComponent, HomeComponent, DetailsComponent]
})
export class AppComponent {
  title = 'word-dictionary';
  
}

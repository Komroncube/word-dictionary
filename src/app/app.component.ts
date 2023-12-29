import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IWordCard, WordCardComponentComponent } from "./components/word-card-component/word-card-component.component";
import { HomeComponent } from "./components/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
    imports: [CommonModule, RouterOutlet, WordCardComponentComponent, HomeComponent]
})
export class AppComponent {
  title = 'word-dictionary';
  
}

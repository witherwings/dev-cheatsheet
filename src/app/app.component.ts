import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LangContainerComponent } from './lang-container/lang-container.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dev-cheatsheet';

  constructor(private router: Router){}

  languages = ['Java','Python','Ruby','C#','PHP','JavaScript']

  navigateLang(lang: string){
    this.router.navigate(["lang", lang]);
  }
  
  navigate(route: string){
    this.router.navigate([route]);
  }
}

import { Component } from '@angular/core';
import { NavComponent } from "./component/nav/nav.component";
import { HomeComponent } from "./component/home/home.component";
import { AboutComponent } from "./component/about/about.component";
import { SkillsComponent } from "./component/skills/skills.component";
import { ExperieceComponent } from "./component/experiece/experiece.component";
import { ContactComponent } from "./component/contact/contact.component";
import { FooterComponent } from "./component/footer/footer.component";
import { ProjectsComponent } from "./component/projects/projects.component";

@Component({
  selector: 'app-root',
  imports: [NavComponent, HomeComponent, AboutComponent, SkillsComponent, ExperieceComponent, ContactComponent, FooterComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}

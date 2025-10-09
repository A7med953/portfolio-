import { Component, HostListener } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-nav',
  standalone: true, 
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  imports: [LogoComponent] 
})
export class NavComponent {

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100; 

    sections.forEach((section: Element) => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const sectionId = section.getAttribute('id');

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + section.clientHeight
      ) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
        });
        const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        activeLink?.classList.add('active');
      }
    });
  }
}

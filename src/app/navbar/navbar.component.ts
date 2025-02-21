import { Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}



// export class NavbarComponent implements AfterViewInit {
//   @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;
//   private collapseInstance!: Collapse;

//   ngAfterViewInit() {
//     this.collapseInstance = new Collapse(this.navbarCollapse.nativeElement, { toggle: false });
//   }

//   toggleNavbar() {
//     this.collapseInstance.toggle();
//   }

//   closeNavbar() {
//     if (window.innerWidth < 992) { // يعمل فقط على الشاشات الصغيرة
//       this.collapseInstance.hide();
//     }
//   }

//   scrollToSection(sectionId: string) {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//     this.closeNavbar();
//   }
// }

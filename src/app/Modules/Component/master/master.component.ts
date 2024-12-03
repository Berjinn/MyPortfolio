import { Component } from '@angular/core';
import { NavbarComponent } from "../../../Shared/navbar/navbar.component";
import { FooterComponent } from '../../../Shared/Footer/footer/footer.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

}

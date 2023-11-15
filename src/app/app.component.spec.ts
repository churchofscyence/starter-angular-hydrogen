import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {BannerComponent} from "./banner/banner.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [
                AppComponent,
                BannerComponent,
                NavbarComponent,
                FooterComponent
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });



});

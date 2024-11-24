import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; // Імпортуємо додаткові компоненти
import { PhoneCalcComponent } from './phonecalc/phonecalc.component';
import { TemperatureComponent } from './lab10/temperature.component'; // Компоненти для тестування
import { MatrixComponent } from './lab10/matrix.component'; // Компоненти для тестування
import { FormsModule } from '@angular/forms'; // Необхідно для роботи з ngModel

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, HeaderComponent, PhoneCalcComponent, TemperatureComponent, MatrixComponent, FormsModule], // Додаємо всі компоненти та модулі
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'laba9_10' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('laba9_10');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, laba9_10');
  });
});

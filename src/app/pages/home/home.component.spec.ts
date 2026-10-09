import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  function render() {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    return fixture;
  }

  it('API を確認している間は「確認しています」と表示する', () => {
    const fixture = render();
    expect(fixture.nativeElement.querySelector('.api-status').textContent).toContain('確認しています');
    http.expectOne((req) => req.url.endsWith('/graphql')).flush({ data: { health: { status: 'ok', environment: 'default' } } });
  });

  it('health が返ってきたら、つながっていることと環境を表示する', () => {
    const fixture = render();
    http.expectOne((req) => req.url.endsWith('/graphql')).flush({ data: { health: { status: 'ok', environment: 'sandbox' } } });
    fixture.detectChanges();
    const status = fixture.nativeElement.querySelector('.api-status') as HTMLElement;
    expect(status.classList).toContain('ok');
    expect(status.textContent).toContain('環境: sandbox');
  });

  it('API に届かないときは、起動しているか確認するよう表示する', () => {
    const fixture = render();
    http.expectOne((req) => req.url.endsWith('/graphql')).error(new ProgressEvent('error'));
    fixture.detectChanges();
    const status = fixture.nativeElement.querySelector('.api-status') as HTMLElement;
    expect(status.classList).toContain('error');
    expect(status.textContent).toContain('API につながりません');
  });
});

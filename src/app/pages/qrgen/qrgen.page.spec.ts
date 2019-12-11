import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QRgenPage } from './qrgen.page';

describe('QRgenPage', () => {
  let component: QRgenPage;
  let fixture: ComponentFixture<QRgenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QRgenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QRgenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

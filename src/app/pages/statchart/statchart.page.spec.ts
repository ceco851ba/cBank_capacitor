import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatchartPage } from './statchart.page';

describe('StatchartPage', () => {
  let component: StatchartPage;
  let fixture: ComponentFixture<StatchartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatchartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatchartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

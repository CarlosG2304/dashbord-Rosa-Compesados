import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarClusterComponent } from './bar-cluster.component';

describe('BarClusterComponent', () => {
  let component: BarClusterComponent;
  let fixture: ComponentFixture<BarClusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarClusterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterFabricaComponent } from './cluster-fabrica.component';

describe('ClusterFabricaComponent', () => {
  let component: ClusterFabricaComponent;
  let fixture: ComponentFixture<ClusterFabricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClusterFabricaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClusterFabricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

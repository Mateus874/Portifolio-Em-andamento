import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoComponent } from './resumo.component';

describe('ResumoComponent', () => {
  let component: ResumoComponent;
  let fixture: ComponentFixture<ResumoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumoComponent]
    });
    fixture = TestBed.createComponent(ResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

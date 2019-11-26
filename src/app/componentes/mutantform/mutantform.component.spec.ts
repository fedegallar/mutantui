import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutantformComponent } from './mutantform.component';

describe('MutantformComponent', () => {
  let component: MutantformComponent;
  let fixture: ComponentFixture<MutantformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutantformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutantformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

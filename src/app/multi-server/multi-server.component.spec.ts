import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiServerComponent } from './multi-server.component';

describe('MultiServerComponent', () => {
  let component: MultiServerComponent;
  let fixture: ComponentFixture<MultiServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

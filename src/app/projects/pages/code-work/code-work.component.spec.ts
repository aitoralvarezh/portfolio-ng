import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeWorkComponent } from './code-work.component';

describe('CodeWorkComponent', () => {
  let component: CodeWorkComponent;
  let fixture: ComponentFixture<CodeWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

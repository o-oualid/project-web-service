import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassPostComponent } from './class-post.component';

describe('ClassPostComponent', () => {
  let component: ClassPostComponent;
  let fixture: ComponentFixture<ClassPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

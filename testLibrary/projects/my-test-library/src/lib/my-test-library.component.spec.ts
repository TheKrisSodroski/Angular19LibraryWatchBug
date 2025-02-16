import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestLibraryComponent } from './my-test-library.component';

describe('MyTestLibraryComponent', () => {
  let component: MyTestLibraryComponent;
  let fixture: ComponentFixture<MyTestLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTestLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTestLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

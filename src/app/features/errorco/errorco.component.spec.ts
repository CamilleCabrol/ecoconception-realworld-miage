import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ErrorcoComponent } from "./errorco.component";

describe("ErrorcoComponent", () => {
  let component: ErrorcoComponent;
  let fixture: ComponentFixture<ErrorcoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorcoComponent],
    });
    fixture = TestBed.createComponent(ErrorcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

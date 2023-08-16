import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredDataComponent } from './stored-data.component';

describe('StoredDataComponent', () => {
  let component: StoredDataComponent;
  let fixture: ComponentFixture<StoredDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoredDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoredDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

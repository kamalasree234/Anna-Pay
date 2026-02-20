import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelParser } from './excel-parser';

describe('ExcelParser', () => {
  let component: ExcelParser;
  let fixture: ComponentFixture<ExcelParser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExcelParser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcelParser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel-parser',
  templateUrl: './excel-parser.html',
  standalone:false,
  styleUrls: ['./excel-parser.css']
})
export class ExcelParser {

  workbook: any;
  workbookLoaded: boolean = false;

  parsedData: any[] = [];
  validationErrors: string[] = [];

  // Expected columns per sheet
  requiredColumns: any = {
    Professors: ['name', 'role', 'basicPay', 'gradePay', 'experience'],
    Administrative: ['name', 'role', 'ctc', 'experience'],
    BlueCollar: ['name', 'role', 'dailyWage', 'daysWorked']
  };

  onFileChange(event: any): void {

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {

      const binaryStr = e.target.result;

      this.workbook = XLSX.read(binaryStr, { type: 'binary' });
      this.workbookLoaded = true;

      console.log("Workbook Sheets:", this.workbook.SheetNames);
    };

    reader.readAsBinaryString(file);
  }

  validateSheets(): void {

    this.validationErrors = [];
    this.parsedData = [];

    if (!this.workbook) {
      this.validationErrors.push("No Excel file uploaded.");
      return;
    }

    this.workbook.SheetNames.forEach((sheetName: string) => {

      const sheet = this.workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(sheet);

      if (!this.requiredColumns[sheetName]) {
        this.validationErrors.push(
          `Unknown sheet: ${sheetName}`
        );
        return;
      }

      const requiredCols = this.requiredColumns[sheetName];

      sheetData.forEach((row: any, index: number) => {

        // Validate required columns
        requiredCols.forEach((col: string) => {
          if (!(col in row)) {
            this.validationErrors.push(
              `Missing column "${col}" in ${sheetName} - Row ${index + 2}`
            );
          }
        });

        // If valid, push to parsedData
        if (this.validationErrors.length === 0) {
          this.parsedData.push({
            ...row,
            sheetType: sheetName
          });
        }

      });

    });

    if (this.validationErrors.length === 0) {
      console.log("Excel Parsed Successfully:", this.parsedData);
    }
  }
}
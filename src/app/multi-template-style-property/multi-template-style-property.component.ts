import { Component } from '@angular/core';
@Component({
  selector: 'app-multiple-template-style-property',
  template: ` <table>
    <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>ADDRESS</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Rohin</td>
      <td>HYD</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Ayan</td>
      <td>BNG</td>
    </tr>
  </table>`,
  styles: [
    `
      table {
        border: 1px solid black;
        border-collapse: collapse;
        width: 50%;
      }
      th {
        border: 1px solid black;
      }
      td {
        border: 1px solid black;
      }
    `,
  ],
})
export class MultipleTemplateStylePropertyComponent {}

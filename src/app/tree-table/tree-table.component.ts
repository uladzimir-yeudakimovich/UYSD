import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrl: './tree-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeTableComponent {
  dateNow: Date = new Date();
  dataSource$ = of([
    {id: 42, name: 'John', surname: 'Doe', dob: '2003-04-15'},
    {id: 777, name: 'Jenny', surname: 'Doe', dob: '2005-07-31'},
  ]).pipe(
    delay(2000),
  );

  displayedColumns = ['id', 'age', 'dob', 'name', 'surname', 'fullName'];

  fullAge(dob: string) {
    const dobDate = new Date(dob);
    const nowDate = new Date();
    let diffYears = nowDate.getFullYear() - dobDate.getFullYear();

    if (nowDate.getMonth() < dobDate.getMonth()
    || (nowDate.getMonth() === dobDate.getMonth() && nowDate.getDate() < dobDate.getDate())) {
      diffYears--;
    }

    return diffYears;
  }

  updateUser(): void {
    this.dataSource$ = of([
      {id: 42, name: 'Johnny', surname: 'Doe', dob: '2003-04-15'},
      {id: 777, name: 'Jenny', surname: 'Doe', dob: '2005-07-31'},
    ]).pipe(
      delay(1000),
    );
  }
}

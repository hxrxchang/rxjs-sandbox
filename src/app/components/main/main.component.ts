import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  observableData$ = of(3);
  observableDataWithParam$ = (param: number) => of(10 * param);

  constructor() {}

  ngOnInit() {
    this.observableData$.subscribe(res => {
      this.observableDataWithParam$(res).subscribe(data => {
        console.log(data);
      });
    });

    this.observableData$
      .pipe(mergeMap(res => this.observableDataWithParam$(res)))
      .subscribe(data => {
        console.log(data);
      });
  }
}

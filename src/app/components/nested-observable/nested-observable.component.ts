import { Component, OnInit } from '@angular/core';
import { Observable, of, combineLatest } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-nested-observable',
  templateUrl: './nested-observable.component.html',
  styleUrls: ['./nested-observable.component.scss']
})
export class NestedObservableComponent implements OnInit {
  observableData$: Observable<number> = of(3);
  observableData2$ = of(5).pipe(
    delay(2000),
    tap(() => {
      console.log('2000ms経ちました！');
    })
  );
  observableDataWithParam$ = (param: number) => of(10 * param);

  constructor() {}

  ngOnInit() {
    this.observableData$
      .pipe(
        mergeMap(res1 =>
          this.observableData2$.pipe(
            mergeMap(res2 => this.observableDataWithParam$(res1 + res2))
          )
        )
      )
      .subscribe(data => {
        console.log(data);
      });

    combineLatest(this.observableData$, this.observableData2$)
      .pipe(
        mergeMap(([res1, res2]) => this.observableDataWithParam$(res1 + res2))
      )
      .subscribe((data: number) => console.log(data));
  }
}

import { Component, OnChanges, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "dxc-transactions",
    templateUrl: "./dxc-transactions.component.html",
    styleUrls: ["./dxc-transactions.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DxcTransactionsComponent implements OnChanges {
  @Input() filesSummary = [];
  @Input() successfulCount;

  public ngOnInit() {}

  public ngOnChanges(): void {}
}

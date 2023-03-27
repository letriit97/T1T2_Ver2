import { NgModule } from "@angular/core";
import { SumAttrPipe } from "./sumAttr.pipe";


@NgModule({
    declarations: [
      SumAttrPipe,
    ],
    exports: [SumAttrPipe],
  })
  export class CustomPipeModule {}
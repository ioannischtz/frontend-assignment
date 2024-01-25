import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from "@angular/core";
import {
  BtnColor,
  BtnProps,
  BtnShape,
  BtnSize,
  BtnVariant,
} from "./button.types";
import { buttonStyles } from "./button.styles";
import { cn } from "../../utils/twCSS.utils";

export const DefaultBtnProps: BtnProps = {
  variant: "solid",
  shape: "rounded",
  color: "primary",
  size: "md",
};

@Component({
  selector: "button[lib-button]",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.css",
})
export class ButtonComponent {
  constructor(public chDetector: ChangeDetectorRef) {
    this.variant = this.variant ?? DefaultBtnProps.variant;
    this.shape = this.shape ?? DefaultBtnProps.shape;
    this.color = this.color ?? DefaultBtnProps.color;
    this.size = this.size ?? DefaultBtnProps.size;
    this.loading = this.loading ?? false;
  }

  @HostBinding("class")
  get buttonClasses(): string {
    let computedClassnames = cn(
      buttonStyles({
        variant: this.variant,
        shape: this.shape,
        color: this.color,
        size: this.size,
      }),
    );
    return computedClassnames;
  }

  @Input()
  variant!: BtnVariant;

  @Input()
  shape!: BtnShape;

  @Input()
  color!: BtnColor;

  @Input()
  size!: BtnSize;

  @Input()
  loading!: boolean;
}

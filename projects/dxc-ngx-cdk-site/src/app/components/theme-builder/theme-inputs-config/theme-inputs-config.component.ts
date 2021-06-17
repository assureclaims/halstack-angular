import { Component, OnInit, HostBinding, Input, OnDestroy } from '@angular/core';
import { css } from "emotion";
import { Stylable } from "../model/stylable";
import { ThemeBuilderService } from '../service/theme-builder.service';

interface ComponentInputs {
  propertyName: string;
  propertyValue: string;
  propertyType: string;
}


@Component({
  selector: "tb-theme-inputs-config",
  templateUrl: "./theme-inputs-config.component.html",
  styleUrls: ["./theme-inputs-config.component.scss"],
})
export class ThemeInputsConfigComponent implements OnInit, Stylable, OnDestroy {
  @HostBinding("class") className;
  defaultInputs: any;


  subscription: any;

  componentInputs: Array<ComponentInputs>;

  constructor( private  themeBuilderService: ThemeBuilderService) {
    this.subscription =  this.themeBuilderService.currentThemeComponent$.subscribe((resp) => {
      const currentComponent = resp.component;
      const currentSchema = resp.schema;
      console.dir(currentComponent);
      console.dir(currentSchema);

    });

  }



  getDynamicStyle = () => {
    return css`
      .configContainer {
        height: calc(100vh - 114px);
        display: flex;
        flex-direction: column;
        background: white;
        box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px;
        position: sticky;
        top: 89px;
        margin: 25px;
      }

      .configContainerTitle {
        font-size: 16px;
        color: #6f2c91;
        font-weight: 600;
        margin: 0px;
        padding: 11.5px 24px;
        border-bottom: 1px solid rgb(191, 191, 191);
      }

      .configContainerInputList {
        width: 350px;
        padding: 25px;
        overflow: auto;

        /* width */
        ::-webkit-scrollbar {
          width: 3px;
          height: 3px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background-color: rgb(214, 214, 214);
          border-radius: 26px;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background-color: rgb(102, 102, 102);
          border-radius: 26px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      }
    `;
  };

  ngOnInit(): void {
    this.className = this.getDynamicStyle();
  }


  ngOnDestroy():void{
    this.subscription.destroy();
  }
}

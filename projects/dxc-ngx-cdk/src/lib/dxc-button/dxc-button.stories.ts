import { ThemeModule } from "../theme";
import { DxcButtonComponent } from "./dxc-button.component";
import { DxcButtonModule } from "./dxc-button.module";
import { moduleMetadata, Meta, Story } from "@storybook/angular";
import { BackgroundProviderModule } from "../background-provider/background-provider.module";
import { ComponentsModule } from "../../../../../.storybook/components/components.module";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  component: DxcButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BackgroundProviderModule,
        DxcButtonModule,
        ComponentsModule,
        ThemeModule,
      ],
    }),
  ],
} as Meta;

const TemplateLight: Story = (args) => ({
  template: `<div theme class="pseudo">
  <sb-title title="Primary" [level]="1"></sb-title>
  <sb-example-container>
    <sb-title title="Enabled" [level]="2"></sb-title>
    <dxc-button label="Primary enabled" (onClick)="onClick($event)"></dxc-button>
  </sb-example-container>

  <sb-example-container class="pseudo-hover">
    <sb-title title="Hovered" [level]="2"></sb-title>
    <dxc-button class="pseudo-hover" label="Primary hovered" (onClick)="onClick($event)"></dxc-button>
  </sb-example-container>

  <sb-example-container class="pseudo-focus">
    <sb-title title="Focused" [level]="2"></sb-title>
    <dxc-button label="Primary focused" (onClick)="onClick($event)"></dxc-button>
  </sb-example-container>

  <sb-example-container class="pseudo-active">
    <sb-title title="Actived" [level]="2"></sb-title>
    <dxc-button label="Primary actived" (onClick)="onClick($event)"></dxc-button>
  </sb-example-container>

  <sb-example-container>
    <sb-title title="Disabled" [level]="2"></sb-title>
    <dxc-button label="Primary disabled" (onClick)="onClick($event)" [disabled]="true"></dxc-button>
  </sb-example-container>

  <sb-example-container>
    <sb-title title="With left icon" [level]="2"></sb-title>
    <dxc-button label="Primary" (onClick)="onClick($event)">
      <dxc-button-icon>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </dxc-button-icon>
    </dxc-button>
  </sb-example-container>


  <sb-example-container>
    <sb-title title="With right icon" [level]="2"></sb-title>
    <dxc-button label="Primary" (onClick)="onClick($event)" iconPosition="after">
      <dxc-button-icon>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </dxc-button-icon>
    </dxc-button>
  </sb-example-container>


  <sb-example-container>
    <sb-title title="Only icon" [level]="2"></sb-title>
    <dxc-button (onClick)="onClick($event)">
      <dxc-button-icon>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <title>Icon Heart</title>
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </dxc-button-icon>
    </dxc-button>
  </sb-example-container>

  <sb-title title="Secondary" [level]="1"></sb-title>
  <sb-example-container>
    <sb-title title="Enabled" [level]="2"></sb-title>
    <dxc-button label="Secondary enabled" mode="secondary" (onClick)="onClick($event)"></dxc-button>
  </sb-example-container>


  <sb-example-container class="pseudo-hover">
    <sb-title title="Hovered" [level]="2"></sb-title>
    <dxc-button label="Secondary hovered" mode="secondary" (onClick)="onClick($event)"></dxc-button>
  </sb-example-container>

  <sb-example-container class="pseudo-focus">
    <sb-title title="Focused" [level]="2"></sb-title>
    <dxc-button label="Secondary focused" mode="secondary" (onClick)="onClick($event)"></dxc-button>
  </sb-example-container>

  <sb-example-container class="pseudo-active">
    <sb-title title="Actived" [level]="2"></sb-title>
    <dxc-button label="Secondary actived" mode="secondary" (onClick)="onClick($event)"></dxc-button>
  </sb-example-container>

  <sb-example-container>
    <sb-title title="Disabled" [level]="2"></sb-title>
    <dxc-button label="Secondary disabled" mode="secondary" (onClick)="onClick($event)" [disabled]="true"></dxc-button>
  </sb-example-container>

  <sb-example-container>
    <sb-title title="With left icon" [level]="2"></sb-title>
    <dxc-button label="Secondary" mode="secondary" (onClick)="onClick($event)">
      <dxc-button-icon>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </dxc-button-icon>
    </dxc-button>
  </sb-example-container>


  <sb-example-container>
    <sb-title title="With right icon" [level]="2"></sb-title>
    <dxc-button label="Secondary" mode="secondary" (onClick)="onClick($event)" iconPosition="after">
      <dxc-button-icon>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </dxc-button-icon>
    </dxc-button>
  </sb-example-container>


  <sb-example-container>
    <sb-title title="Only icon" [level]="2"></sb-title>
    <dxc-button (onClick)="onClick($event)" mode="secondary">
      <dxc-button-icon>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <title>Icon Heart</title>
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </dxc-button-icon>
    </dxc-button>
  </sb-example-container>



  <sb-title title="Text" [level]="1"></sb-title>
  <sb-example-container>
    <sb-title title="Enabled" [level]="2"></sb-title>
    <dxc-button label="text enabled" mode="text" (onClick)="onClick($event)"></dxc-button>
  </sb-example-container>


  <sb-example-container class="pseudo-hover">
    <sb-title title="Hovered" [level]="2"></sb-title>
    <dxc-button label="text hovered" mode="text" (onClick)="onClick($event)"></dxc-button>
  </sb-example-container>

  <sb-example-container class="pseudo-focus">
    <sb-title title="Focused" [level]="2"></sb-title>
    <dxc-button label="text focused" mode="text" (onClick)="onClick($event)"></dxc-button>
  </sb-example-container>

  <sb-example-container class="pseudo-active">
    <sb-title title="Actived" [level]="2"></sb-title>
    <dxc-button label="text actived" mode="text" (onClick)="onClick($event)"></dxc-button>
  </sb-example-container>

  <sb-example-container>
    <sb-title title="Disabled" [level]="2"></sb-title>
    <dxc-button label="text disabled" mode="text" (onClick)="onClick($event)" [disabled]="true"></dxc-button>
  </sb-example-container>

  <sb-example-container>
    <sb-title title="Only icon" [level]="2"></sb-title>
    <dxc-button (onClick)="onClick($event)" mode="text">
      <dxc-button-icon>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <title>Icon Heart</title>
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </dxc-button-icon>
    </dxc-button>
  </sb-example-container>


  <!-- Dark mode background provider -->

  <background-provider color="#333333">
    <sb-dark-container>
      <sb-title title="Primary" theme="dark" [level]="1"></sb-title>
      <sb-example-container>
        <sb-title title="Enabled" theme="dark" [level]="2"></sb-title>
        <dxc-button label="Primary enabled" (onClick)="onClick($event)"></dxc-button>
      </sb-example-container>

      <sb-example-container class="pseudo-hover">
        <sb-title title="Hovered" theme="dark" [level]="2"></sb-title>
        <dxc-button label="Primary hovered" (onClick)="onClick($event)"></dxc-button>
      </sb-example-container>

      <sb-example-container class="pseudo-focus">
        <sb-title title="Focused" theme="dark" [level]="2"></sb-title>
        <dxc-button label="Primary focused" (onClick)="onClick($event)"></dxc-button>
      </sb-example-container>

      <sb-example-container class="pseudo-active">
        <sb-title title="Actived" theme="dark" [level]="2"></sb-title>
        <dxc-button label="Primary actived" (onClick)="onClick($event)"></dxc-button>
      </sb-example-container>

      <sb-example-container>
        <sb-title title="Disabled" theme="dark" [level]="2"></sb-title>
        <dxc-button label="Primary disabled" (onClick)="onClick($event)" [disabled]="true"></dxc-button>
      </sb-example-container>

      <sb-example-container>
        <sb-title title="Only icon" theme="dark" [level]="2"></sb-title>
        <dxc-button label="Primary" (onClick)="onClick($event)">
          <dxc-button-icon>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <title>Icon Heart</title>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </dxc-button-icon>
        </dxc-button>
      </sb-example-container>

      <sb-title title="Secondary" theme="dark" [level]="1"></sb-title>
      <sb-example-container>
        <sb-title title="Enabled" theme="dark" [level]="2"></sb-title>
        <dxc-button label="Secondary enabled" mode="secondary" (onClick)="onClick($event)"></dxc-button>
      </sb-example-container>


      <sb-example-container class="pseudo-hover">
        <sb-title title="Hovered" theme="dark" [level]="2"></sb-title>
        <dxc-button label="Secondary hovered" mode="secondary" (onClick)="onClick($event)"></dxc-button>
      </sb-example-container>

      <sb-example-container class="pseudo-focus">
        <sb-title title="Focused" theme="dark" [level]="2"></sb-title>
        <dxc-button label="Secondary focused" mode="secondary" (onClick)="onClick($event)"></dxc-button>
      </sb-example-container>

      <sb-example-container class="pseudo-active">
        <sb-title title="Actived" theme="dark" [level]="2"></sb-title>
        <dxc-button label="Secondary actived" mode="secondary" (onClick)="onClick($event)"></dxc-button>
      </sb-example-container>

      <sb-example-container>
        <sb-title title="Disabled" theme="dark" [level]="2"></sb-title>
        <dxc-button label="Secondary disabled" mode="secondary" (onClick)="onClick($event)" [disabled]="true">
        </dxc-button>
      </sb-example-container>

      <sb-example-container>
        <sb-title title="Only icon" theme="dark" [level]="2"></sb-title>
        <dxc-button label="Secondary" (onClick)="onClick($event)" mode="secondary">
          <dxc-button-icon>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <title>Icon Heart</title>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </dxc-button-icon>
        </dxc-button>
      </sb-example-container>



      <sb-title title="Text" theme="dark" [level]="1"></sb-title>
      <sb-example-container>
        <sb-title title="Enabled" theme="dark" [level]="2"></sb-title>
        <dxc-button label="text enabled" mode="text" (onClick)="onClick($event)"></dxc-button>
      </sb-example-container>


      <sb-example-container class="pseudo-hover">
        <sb-title title="Hovered" theme="dark" [level]="2"></sb-title>
        <dxc-button label="text hovered" mode="text" (onClick)="onClick($event)"></dxc-button>
      </sb-example-container>

      <sb-example-container class="pseudo-focus">
        <sb-title title="Focused" theme="dark" [level]="2"></sb-title>
        <dxc-button label="text focused" mode="text" (onClick)="onClick($event)"></dxc-button>
      </sb-example-container>

      <sb-example-container class="pseudo-active">
        <sb-title title="Actived" theme="dark" [level]="2"></sb-title>
        <dxc-button label="text actived" mode="text" (onClick)="onClick($event)"></dxc-button>
      </sb-example-container>

      <sb-example-container>
        <sb-title title="Disabled" theme="dark" [level]="2"></sb-title>
        <dxc-button label="text disabled" mode="text" (onClick)="onClick($event)" [disabled]="true"></dxc-button>
      </sb-example-container>

      <sb-example-container>
        <sb-title title="Only icon" theme="dark" [level]="2"></sb-title>
        <dxc-button (onClick)="onClick($event)" mode="text" label="Text">
          <dxc-button-icon>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <title>Icon Heart</title>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </dxc-button-icon>
        </dxc-button>
      </sb-example-container>
    </sb-dark-container>
  </background-provider>

</div>
`,
  props: {
    ...args,
    onClick: () => console.log("Clicking on button"),
  },
});

export const Chromatic = TemplateLight.bind({});

Chromatic.parameters = {
  pseudo: { hover: false, focus: false, visited: false, active: false },
};
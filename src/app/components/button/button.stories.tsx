import {
  argsToTemplate,
  type Meta,
  moduleMetadata,
  type StoryObj,
} from "@storybook/angular";
import { NgIconComponent, NgIconsModule, provideIcons } from "@ng-icons/core";
import { radixBell, radixCopy } from "@ng-icons/radix-icons";

import { ButtonComponent } from "./button.component";

const meta: Meta<ButtonComponent> = {
  title: "Button",
  component: ButtonComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [NgIconComponent],
      providers: [provideIcons({ radixBell, radixCopy })],
    }),
  ],
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
    },
    template: `<button lib-button ${
      argsToTemplate(
        args,
      )
    } >{{loading? 'Downloading': 'Download'}}</button>`,
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    variant: "solid",
    color: "primary",
    shape: "rounded",
    size: "md",
    loading: false,
  },
  argTypes: {
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "inline-radio",
    },
    color: {
      options: ["primary", "secondary", "success", "warning", "danger"],
      control: "select",
    },
    shape: {
      options: ["rounded", "pill", "sharp"],
      control: "select",
    },
    size: {
      options: ["sm", "md", "lg"],
      control: "select",
    },
  },
};

export const IconButton: Story = {
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
    },
    template: `<button lib-button color="warning"${
      argsToTemplate(
        args,
      )
    } ><ng-icon name="radixBell"></ng-icon></button>`,
  }),
};

export const WithIcon: Story = {
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
    },
    template: `<button lib-button color="success"${
      argsToTemplate(
        args,
      )
    }><ng-icon name="radixCopy"></ng-icon>Copy</button>`,
  }),
};

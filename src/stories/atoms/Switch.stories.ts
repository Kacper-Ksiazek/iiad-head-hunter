import Switch from "@/components/atoms/Switch.svelte";

import type {Meta, StoryObj} from "@storybook/svelte";

interface SwitchProps {
    label: string;
    value: boolean;
}

const meta = {
    title: "Atoms/Switch",
    component: Switch,
    tags: ["autodocs"],
    parameters:{
        docs: {
            description: {
                component: "A simple switch component that can be toggled on or off",
            },
        }
    },
    argTypes: {
        label: {
            type: "string",
            control: "text",
            description: "Text content inside the switch",
            table: {
                category: "Required",
                type: {
                    summary: "string",
                },
            },
        },
        value: {
            type: "boolean",
            control: "boolean",
            description: "The value of the switch",
            table: {
                category: "Required",
                type: {
                    summary: "boolean",
                },
            },
        },
    },
} as Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch> & { args: SwitchProps };

export const Unchecked: Story = {
    args: {
        label: "Label: Unchecked",
        value: false,
    },
}

export const Checked: Story = {
    args: {
        label: "Label: Checked",
        value: true,
    },
}
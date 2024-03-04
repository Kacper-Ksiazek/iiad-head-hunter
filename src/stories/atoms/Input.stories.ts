import Input from "@/components/atoms/Input.svelte";

import type {Meta, StoryObj} from "@storybook/svelte";

interface InputProps {
    value: string;
    placeholder: string;
}

const meta = {
    title: "Atoms/Input",
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        value: {
            type: "string",
            control: "text",
            description: "The value of the input",
            table: {
                category: "Required",
                type: {
                    summary: "string",
                },
            },
        },
        placeholder: {
            type: "string",
            control: "text",
            description: "The placeholder text of the input",
            table: {
                category: "Required",
                type: {
                    summary: "string",
                },
            },
        },
    },
} as Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input> & { args: InputProps };

export const InputWithoutContent: Story = {
    args: {
        value: "",
        placeholder: "Placeholder",
    },
}

export const InputWithContent: Story = {
    args: {
        value: "Lorem ipsum dolor",
        placeholder: "Placeholder",
    },
}

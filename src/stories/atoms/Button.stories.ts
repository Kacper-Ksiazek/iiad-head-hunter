import Button from '@/components/atoms/Button.svelte'

import type {Meta, StoryObj} from '@storybook/svelte'
import type {TailwindColor} from '@/types/tailwind'

interface ButtonProps {
    label: string;
    disabled?: boolean;
    variant?: TailwindColor;
}

const meta = {
    title: "Atoms/Button",
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        label: {
            type: 'string',
            control: 'text',
            description: 'Text content inside the button',
            table: {
                category: 'Required',
                type: {
                    summary: 'string'
                },
            }
        },
        variant: {
            control: {
                type: "select",
            },
            description: 'The color of the button, a reference to tailwind colors',
            options: [
                'slate'
                , 'gray'
                , 'zinc'
                , 'neutral'
                , 'stone'
                , 'red'
                , 'orange'
                , 'amber'
                , 'yellow'
                , 'lime'
                , 'green'
                , 'emerald'
                , 'teal'
                , 'cyan'
                , 'sky'
                , 'blue'
                , 'indigo'
                , 'violet'
                , 'purple'
                , 'fuchsia'
                , 'pink'
                , 'rose'
            ] as TailwindColor[],
            table: {
                category: 'Optional',
                type: {
                    summary: 'TailwindColor'
                }
            }
        },
        disabled: {
            type: "boolean",
            description: 'Determines whether button should be interactive',
            table: {
                category: 'Optional',
                type: {
                    summary: 'boolean'
                },
            }
        },
    },
    parameters: {
        docs:{
            description: {
                component: 'A simple button component that can be clicked'
            }
        }
    }
} as Meta<typeof Button>

export default meta;

type Story = StoryObj<typeof meta> & { args: ButtonProps }

export const Disabled: Story = {
    args: {
        disabled: true,
        label: 'Button',
        variant: 'amber',
    }
}

export const Amber: Story = {
    args: {
        disabled: false,
        variant: 'amber',
        label: 'Button'
    },
    parameters:{
        docs:{
            description: {
                story: 'A button with an amber color'
            }
        }
    }
}

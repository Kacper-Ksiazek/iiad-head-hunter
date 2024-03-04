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

export const Slate: Story = {
    args: {
        disabled: false,
        variant: 'slate',
        label: 'Button'
    }
}

export const Gray: Story = {
    args: {
        disabled: false,
        variant: 'gray',
        label: 'Button'
    }
}

export const Zinc: Story = {
    args: {
        disabled: false,
        variant: 'zinc',
        label: 'Button'
    }
}

export const Neutral: Story = {
    args: {
        disabled: false,
        variant: 'neutral',
        label: 'Button'
    }
}

export const Stone: Story = {
    args: {
        disabled: false,
        variant: 'stone',
        label: 'Button'
    }
}

export const Red: Story = {
    args: {
        disabled: false,
        variant: 'red',
        label: 'Button'
    }
}

export const Orange: Story = {
    args: {
        disabled: false,
        variant: 'orange',
        label: 'Button'
    }
}

export const Amber: Story = {
    args: {
        disabled: false,
        variant: 'amber',
        label: 'Button'
    }
}
export const Yellow: Story = {
    args: {
        disabled: false,
        variant: 'yellow',
        label: 'Button'
    }
}

export const Lime: Story = {
    args: {
        disabled: false,
        variant: 'lime',
        label: 'Button'
    }
}

export const Green: Story = {
    args: {
        disabled: false,
        variant: 'green',
        label: 'Button'
    }
}

export const Emerald: Story = {
    args: {
        disabled: false,
        variant: 'emerald',
        label: 'Button'
    }
}

export const Teal: Story = {
    args: {
        disabled: false,
        variant: 'teal',
        label: 'Button'
    }
}

export const Cyan: Story = {
    args: {
        disabled: false,
        variant: 'cyan',
        label: 'Button'
    }
}

export const Sky: Story = {
    args: {
        disabled: false,
        variant: 'sky',
        label: 'Button'
    }
}

export const Blue: Story = {
    args: {
        disabled: false,
        variant: 'blue',
        label: 'Button'
    }
}

export const Indigo: Story = {
    args: {
        disabled: false,
        variant: 'indigo',
        label: 'Button'
    }
}

export const Violet: Story = {
    args: {
        disabled: false,
        variant: 'violet',
        label: 'Button'
    }
}

export const Purple: Story = {
    args: {
        disabled: false,
        variant: 'purple',
        label: 'Button'
    }
}

export const Fuchsia: Story = {
    args: {
        disabled: false,
        variant: 'fuchsia',
        label: 'Button'
    }
}

export const Pink: Story = {
    args: {
        disabled: false,
        variant: 'pink',
        label: 'Button'
    }
}

export const Rose: Story = {
    args: {
        disabled: false,
        variant: 'rose',
        label: 'Button'
    }
}


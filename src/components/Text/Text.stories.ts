import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta = {
	title: 'Components/Text',
	tags: ['autodocs'],
	args: {
		children: 'Hello world',
		size: 'medium',
	},
	component: Text,
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

/** Default text */
export const Default: Story = {}

/** Small text */
export const Small: Story = {
	args: {
		size: 'small',
	},
}

/** Large text */
export const Large: Story = {
	args: {
		size: 'large',
	},
}

import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { colors } from '~theme/colors'

const meta = {
	title: 'Components/Button',
	tags: ['autodocs'],
	args: {
		color: colors.orange,
		size: 'medium',
	},
	component: Button,
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

/** Default button */
export const Default: Story = {}

/** Small button */
export const Small: Story = {
	args: {
		size: 'small',
	},
}

/** Large button */
export const Large: Story = {
	args: {
		size: 'large',
	},
}

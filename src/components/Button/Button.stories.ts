import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { colors } from '~theme/colors'

const meta = {
	title: 'Components/Button',
	tags: ['autodocs'],
	args: {
		color: colors.orange,
	},
	component: Button,
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

/** Default button */
export const Default: Story = {}

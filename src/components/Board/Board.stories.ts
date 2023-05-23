import type { Meta, StoryObj } from '@storybook/react'
import { Board } from './Board'

const meta = {
	title: 'Components/Board',
	tags: ['autodocs'],
	args: {},
	component: Board,
} as Meta<typeof Board>

export default meta

type Story = StoryObj<typeof meta>

/** The game board where the user will select which numbers to bet */
export const Default: Story = {}

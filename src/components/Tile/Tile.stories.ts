import type { Meta, StoryObj } from '@storybook/react'
import { Tile } from './Tile'

const meta = {
	title: 'Components/Tile',
	tags: ['autodocs'],
	args: {
		number: 1,
		isSelected: false,
		isResult: false,
	},
	component: Tile,
} satisfies Meta<typeof Tile>

export default meta

type Story = StoryObj<typeof meta>

/**
 * The basic state of the tile
 */
export const Default: Story = {}

/**
 * When the tile is selected
 */
export const Selected: Story = {
	args: {
		isSelected: true,
	},
}

/**
 * When the tile is the result
 */
export const Result: Story = {
	args: {
		isResult: true,
	},
}

/**
 * When the tile is selected and the result
 */
export const SelectedAndResult: Story = {
	args: {
		isSelected: true,
		isResult: true,
	},
}

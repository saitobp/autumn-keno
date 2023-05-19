import type { Meta, StoryObj } from '@storybook/react'
import { Tile } from './Tile'

const meta = {
	title: 'Components/Tile',
	tags: ['autodocs'],
	args: {
		/**
		 * The number to display in the tile.
		 */
		number: 1,
	},
	component: Tile,
} satisfies Meta<typeof Tile>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

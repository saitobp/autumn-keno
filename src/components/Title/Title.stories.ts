import type { Meta, StoryObj } from '@storybook/react'
import { Title } from './Title'

const meta = {
	title: 'Components/Title',
	tags: ['autodocs'],
	args: {},
	component: Title,
} as Meta<typeof Title>

export default meta

type Story = StoryObj<typeof meta>

/** The title of the game */
export const Default: Story = {}

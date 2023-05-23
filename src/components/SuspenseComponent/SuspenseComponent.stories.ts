import type { Meta, StoryObj } from '@storybook/react'
import { SuspenseComponent } from './SuspenseComponent'

const meta = {
	title: 'Components/SuspenseComponent',
	tags: ['autodocs'],
	args: {
		component: 'Hi! I am a SuspenseComponent',
	},
	component: SuspenseComponent,
} as Meta<typeof SuspenseComponent>

export default meta

type Story = StoryObj<typeof meta>

/**
 * Default SuspenseComponent
 *
 * We use this component to wrap lazy loaded components
 * and a fallback component to show while the lazy loaded
 * component is loading.
 * */
export const Default: Story = {}

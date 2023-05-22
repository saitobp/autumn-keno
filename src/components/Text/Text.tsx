import { ReactNode } from 'react'
import * as Styled from './Text.styles'

type TextProps = {
	/** Text to be shown */
	children: ReactNode

	/**
	 * The size of the text
	 * @default 'medium'
	 */
	size?: 'small' | 'medium' | 'large'
}

export function Text(props: TextProps) {
	const { children, size = 'medium' } = props

	return <Styled.Text size={size}>{children}</Styled.Text>
}

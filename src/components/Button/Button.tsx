import { motion } from 'framer-motion'
import * as Styled from './Button.styles'

type ButtonProps = {
	/** The color of the button and the shadow */
	color: string

	/**
	 * The size of the button
	 * @default 'medium'
	 */
	size?: 'small' | 'medium' | 'large'
}

export function Button(props: ButtonProps) {
	const { color, size = 'medium' } = props

	return (
		<Styled.Container aria-label='Button Container' size={size}>
			<Styled.Shadow color={color} />

			<Styled.Button
				as={motion.button}
				whileTap={{ x: '6px', y: '6px' }}
				transition={{ duration: 0.1 }}
				color={color}
				size={size}
			>
				Button
			</Styled.Button>
		</Styled.Container>
	)
}

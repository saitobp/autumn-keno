import { motion } from 'framer-motion'
import * as Styled from './Button.styles'

type ButtonProps = {
	/** The color of the button and the shadow */
	color: string
}

export function Button(props: ButtonProps) {
	const { color } = props

	return (
		<Styled.Container aria-label='Button Container'>
			<Styled.Shadow color={color} />

			<Styled.Button
				as={motion.button}
				whileTap={{ x: '6px', y: '6px' }}
				transition={{ duration: 0.1 }}
				color={color}
			>
				Button
			</Styled.Button>
		</Styled.Container>
	)
}

import styled, { css } from 'styled-components'
import { colors } from '~theme/colors'

type TextProps = {
	/** Text size */
	size: 'small' | 'medium' | 'large'
}

export const Text = styled.span<TextProps>`
	color: ${colors.orange};
	font-weight: 300;

	/** Set text size */
	${({ size }) => {
		switch (size) {
			case 'small':
				return css`
					font-size: 1rem;
				`

			case 'medium':
				return css`
					font-size: 1.6rem;
				`

			case 'large':
				return css`
					font-size: 2rem;
				`
		}
	}}
`

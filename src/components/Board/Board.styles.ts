import { styled } from 'styled-components'
import { breakpoints } from '~theme/breakpoints'
import { colors } from '~theme/colors'

const sizeSmall = '30px'
const sizeMedium = '50px'
const sizeLarge = '75px'

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(10, ${sizeSmall});
	gap: 4px;
	padding: 8px;
	background: ${colors.yellow};

	@media (min-width: ${breakpoints.small}px) {
		grid-template-columns: repeat(10, ${sizeMedium});
		gap: 6px;
		padding: 12px;
	}

	@media (min-width: ${breakpoints.medium}px) {
		grid-template-columns: repeat(10, ${sizeLarge});
		gap: 8px;
		padding: 16px;
	}
`

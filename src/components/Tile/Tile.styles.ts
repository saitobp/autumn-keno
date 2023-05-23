import styled from 'styled-components'
import { breakpoints } from '~theme/breakpoints'
import { colors } from '~theme/colors'

const sizeSmall = '30px'
const sizeMedium = '50px'
const sizeLarge = '75px'

export const Border = styled.div`
	position: relative;
	width: ${sizeSmall};
	height: ${sizeSmall};
	background: ${colors.beige};

	@media (min-width: ${breakpoints.small}px) {
		width: ${sizeMedium};
		height: ${sizeMedium};
	}

	@media (min-width: ${breakpoints.medium}px) {
		width: ${sizeLarge};
		height: ${sizeLarge};
	}
`

export const Container = styled.div`
	position: absolute;
	width: ${sizeSmall};
	height: ${sizeSmall};
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${colors.orange};
	user-select: none;
	-ms-user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	cursor: pointer;

	@media (min-width: ${breakpoints.small}px) {
		width: ${sizeMedium};
		height: ${sizeMedium};
	}

	@media (min-width: ${breakpoints.medium}px) {
		width: ${sizeLarge};
		height: ${sizeLarge};
	}
`

export const Number = styled.p`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-weight: 300;
	font-size: 1.25rem;
	color: ${colors.white};
	margin: 0;
	margin-top: 1px;
	user-select: none;
	-ms-user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	cursor: pointer;

	@media (min-width: ${breakpoints.small}px) {
		font-size: 1.5rem;
	}
`

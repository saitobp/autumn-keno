import styled from 'styled-components'
import { colors } from '~theme/colors'

const size = '50px'

export const Border = styled.div`
	position: relative;
	width: ${size};
	height: ${size};
	background: ${colors.green};
`

export const Container = styled.div`
	position: absolute;
	width: ${size};
	height: ${size};
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${colors.accent};
	cursor: pointer;
	user-select: none;
`

export const Number = styled.p`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-weight: 300;
	font-size: 1.5rem;
	color: ${colors.white};
	margin: 0;
	margin-top: 1px;
`

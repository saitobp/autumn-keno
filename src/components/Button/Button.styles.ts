import styled from 'styled-components'

const shadowSize = '6px'

export const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	min-height: 60px;
`

type ButtonProps = {
	/** Button color */
	color: string
}

export const Button = styled.button<ButtonProps>`
	/** Remove default button styles */
	border: none;
	background: none;
	padding: 0;
	margin: 0;

	/** Add custom button styles */
	position: absolute;
	top: 0;
	left: 0;
	background: ${({ color }) => color};
	color: white;
	width: calc(100% - ${shadowSize});
	height: calc(100% - ${shadowSize});
	cursor: pointer;
`

type ShadowProps = {
	/** Shadow color */
	color: string
}

export const Shadow = styled.div<ShadowProps>`
	position: absolute;
	bottom: 0;
	right: 0;
	width: calc(100% - ${shadowSize});
	height: calc(100% - ${shadowSize});
	background: ${({ color }) => color};
	opacity: 0.5;
`

import styled, { css } from 'styled-components'

const shadowSize = '6px'

type ContainerProps = {
	/** Possible sizes for the button	*/
	size: 'small' | 'medium' | 'large'
}

export const Container = styled.div<ContainerProps>`
	position: relative;

	/** Set button size */
	${({ size }) => {
		switch (size) {
			case 'small':
				return css`
					width: 80px;
					height: 40px;
				`

			case 'medium':
				return css`
					width: 120px;
					height: 60px;
				`

			case 'large':
				return css`
					width: 180px;
					height: 80px;
				`
		}
	}}
`

type ButtonProps = {
	/** Button color */
	color: string

	/** Button size */
	size: 'small' | 'medium' | 'large'
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

	/** Set font size based on the button size */
	${({ size }) => {
		switch (size) {
			case 'small':
				return css`
					font-size: 0.8rem;
				`

			case 'medium':
				return css`
					font-size: 1rem;
				`

			case 'large':
				return css`
					font-size: 1.2rem;
				`
		}
	}}
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

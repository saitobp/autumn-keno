import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

export const GlobalStyles = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');

	* {
		font-family: 'Montserrat', sans-serif;
	}

	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		background: ${colors.beige};
		width: 100vw;
		height: 100vh;
	}

	#root {
		width: 100%;
		height: 100%;
	}
`

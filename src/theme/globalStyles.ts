import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');

	* {
		font-family: 'Montserrat', sans-serif;
	}

	body: {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`

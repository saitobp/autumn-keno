import { Board } from '~components/Board'
import { Title } from '~components/Title'
import * as Styled from './Game.styles'

export function Game() {
	return (
		<Styled.Container aria-label='Game Container'>
			<Title />
			<Board />
		</Styled.Container>
	)
}

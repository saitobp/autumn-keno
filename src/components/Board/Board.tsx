import { Tile } from '~components/Tile'
import * as Styled from './Board.styles'

export function Board() {
	const boardSelection = generateEmptyBoard()

	function generateEmptyBoard() {
		const board = []

		for (let i = 0; i < 80; i++) {
			board.push({
				number: i + 1,
				isSelected: false,
				isResult: false,
			})
		}

		return board
	}

	return (
		<Styled.Container>
			{boardSelection.map((tile) => (
				<Tile
					key={tile.number}
					number={tile.number}
					isSelected={tile.isSelected}
					isResult={tile.isResult}
				/>
			))}
		</Styled.Container>
	)
}

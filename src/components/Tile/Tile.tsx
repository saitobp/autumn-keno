import * as Styled from './Tile.styles'

type TileProps = {
	/**
	 * The tile number
	 */
	number: number
}

export function Tile(props: TileProps) {
	const { number } = props

	return <Styled.TileContainer aria-label='Tile Container'>{number}</Styled.TileContainer>
}

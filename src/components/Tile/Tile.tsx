import { motion } from 'framer-motion'
import * as Styled from './Tile.styles'
import { useTileVariants } from './useTileVariants'

type TileProps = {
	/** The tile number */
	number: number

	/** Indicate if the tile is selected */
	isSelected: boolean

	/** Indicate if the tile is a result */
	isResult: boolean

	/** The callback for when the user clicks the tiles */
	onClick?: () => void
}

export function Tile(props: TileProps) {
	const { number, isSelected = false, isResult = false, onClick } = props

	const { animate, variants } = useTileVariants({
		isSelected: isSelected,
		isResult: isResult,
	})

	function handleTileClick() {
		if (!onClick) return

		onClick()
	}

	return (
		<Styled.Border
			aria-label='Tile Border'
			as={motion.div}
			animate={animate}
			variants={variants.border}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{ duration: 0.15 }}
			onClick={handleTileClick}
		>
			<Styled.Container
				aria-label='Tile Container'
				as={motion.div}
				animate={animate}
				variants={variants.container}
			/>

			<Styled.Number aria-label='Tile Number'>{number}</Styled.Number>
		</Styled.Border>
	)
}

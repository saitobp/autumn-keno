import { Variant, motion } from 'framer-motion'
import * as Styled from './Tile.styles'
import { useEffect, useState } from 'react'

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

type TileVariants = {
	default: Variant
	selected: Variant
	result: Variant
}

type TileVariantsOptions = keyof TileVariants

const containerVariants: TileVariants = {
	default: { scale: 1 },
	selected: { scale: 0.85 },
	result: { scale: 0 },
}

export function Tile(props: TileProps) {
	const { number, isSelected = false, isResult = false, onClick } = props

	const [animate, setAnimate] = useState<TileVariantsOptions>('default')

	useEffect(() => {
		if (isSelected) {
			setAnimate('selected')
			return
		}

		if (isResult) {
			setAnimate('result')
			return
		}

		setAnimate('default')
	}, [isSelected, isResult])

	function handleTileClick() {
		if (!onClick) return

		onClick()
	}

	return (
		<Styled.Border
			aria-label='Tile Border'
			as={motion.div}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{ duration: 0.15 }}
			onClick={handleTileClick}
		>
			<Styled.Container
				aria-label='Tile Container'
				as={motion.div}
				animate={animate}
				variants={containerVariants}
			/>

			<Styled.Number aria-label='Tile Number'>{number}</Styled.Number>
		</Styled.Border>
	)
}

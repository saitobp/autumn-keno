import { Variant, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import * as Styled from './Tile.styles'
import { colors } from '~theme/colors'

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
	selectedAndResult: Variant
}

type TileVariantsOptions = keyof TileVariants

const borderVariants: TileVariants = {
	default: {
		background: colors.beige,
	},
	result: {
		background: colors.green,
	},
	selected: {
		background: colors.beige,
	},
	selectedAndResult: {
		background: colors.beige,
	},
}

const containerVariants: TileVariants = {
	default: { scale: 1, background: colors.orange },
	selected: { scale: 0.85, background: colors.orange },
	result: { scale: 0, background: colors.green },
	selectedAndResult: { scale: 0.85, background: colors.green },
}

export function Tile(props: TileProps) {
	const { number, isSelected = false, isResult = false, onClick } = props

	const [animate, setAnimate] = useState<TileVariantsOptions>('default')

	useEffect(() => {
		if (isSelected && isResult) {
			setAnimate('selectedAndResult')
			return
		}

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
			animate={animate}
			variants={borderVariants}
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

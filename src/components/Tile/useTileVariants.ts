import { Variant } from 'framer-motion'
import { useEffect, useState } from 'react'
import { colors } from '~theme/colors'

type UseTileVariantsOptions = {
	/** Indicates if a tile is selected */
	isSelected: boolean

	/** Indicates if a tile is the result tile */
	isResult: boolean
}

type TileVariants = {
	default: Variant
	selected: Variant
	result: Variant
	selectedAndResult: Variant
}

const borderVariants: TileVariants = {
	default: { background: colors.beige },
	result: { background: colors.green },
	selected: { background: colors.beige },
	selectedAndResult: { background: colors.beige },
}

const containerVariants: TileVariants = {
	default: { scale: 1, background: colors.orange },
	selected: { scale: 0.85, background: colors.orange },
	result: { scale: 0, background: colors.green },
	selectedAndResult: { scale: 0.85, background: colors.green },
}

const variants = {
	border: borderVariants,
	container: containerVariants,
}

type TileVariantsOptions = keyof TileVariants

export function useTileVariants(options: UseTileVariantsOptions) {
	const { isSelected, isResult } = options

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

	return { animate, variants }
}

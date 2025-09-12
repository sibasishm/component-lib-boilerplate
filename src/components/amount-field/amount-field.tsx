import { DsInputAdornment, DsTextField } from '@am92/react-design-system';

export type TAmountFieldProps = {
	/**
	 * Input blur handler for validation
	 */
	handleBlur?: () => void;
	/**
	 * Maximum length of input
	 */
	maxLength?: number;
	/**
	 * Input change handler
	 */
	onChange: (value: string) => void;
	/**
	 * Whether to show rupee icon or not
	 * @default true
	 */
	showRupeeIcon?: boolean;
	/**
	 * Input value
	 */
	value: number;
};
export const AmountField = ({
	handleBlur,
	onChange,
	showRupeeIcon = true,
	value,
	maxLength,
}: TAmountFieldProps) => {
	return (
		<DsTextField
			inputProps={{
				maxLength: maxLength && maxLength,
			}}
			onBlur={handleBlur}
			onChange={e => onChange(e.target.value)}
			startAdornment={
				showRupeeIcon && (
					<DsInputAdornment
						position='start'
						sx={{
							'& .MuiTypography-root': {
								color: 'var(--ds-colour-typoPrimary)',
								fontSize: 'var(--ds-typo-fontSizeBitterCold)',
								fontWeight: '700',
								paddingTop: 'var(--ds-spacing-quickFreeze)',
							},
						}}
					>
						{'₹'}
					</DsInputAdornment>
				)
			}
			sx={{
				'& .MuiInputBase-input': {
					fontSize: 'var(--ds-typo-fontSizeCool)',
					fontWeight: '700',
					width: value.toString().length + 1 + 'ch',
					marginLeft: 'var(--ds-spacing-zero) !important',
				},
				'& .MuiInputBase-root': {
					bgcolor: 'var(--ds-colour-neutral2)',
					border: 'none',
					borderRadius: 'var(--ds-radius-bitterCold)',
					color: 'var(--ds-colour-typoPrimary)',
					pl: 'var(--ds-spacing-cool)',
					pr: 'var(--ds-spacing-cool)',
					justifyContent: 'center',
					pt: 'var(--ds-spacing-bitterCold)',
					pb: 'var(--ds-spacing-bitterCold)',
				},

				minWidth: '120px',
			}}
			type='tel'
			value={value}
		/>
	);
};

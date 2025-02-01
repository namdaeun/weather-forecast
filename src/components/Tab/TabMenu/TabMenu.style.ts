import { css } from '@emotion/react';
import { theme } from '../../../style/theme';

export const tabMenuStyle = (isSelected: boolean) => {
	const color = isSelected ? theme.colors.gray200 : theme.colors.gray700;

	return css({
		display: 'flex',

		flexDirection: 'column',
		alignItems: 'center',
		gap: '0.7rem',

		color,
		backgroundColor: 'transparent',

		cursor: 'pointer',

		svg: {
			path: {
				fill: color,
			},
		},
	});
};

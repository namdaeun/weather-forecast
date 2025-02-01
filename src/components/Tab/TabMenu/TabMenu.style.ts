import { css } from '@emotion/react';
import { theme } from '../../../style/theme';

export const tabMenuStyle = (isSelected: boolean) => {
	const color = isSelected ? theme.colors.gray200 : theme.colors.gray700;

	return css({
		display: 'flex',

		flexDirection: 'column',
		gap: '0.7rem',

		color,

		svg: {
			path: {
				fill: color,
			},
		},
	});
};

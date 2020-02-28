import React from 'react';

import {IconProps} from 'app/types/iconProps';
import theme from 'app/utils/theme';

export const IconLightning = React.forwardRef(
  (
    {
      color: providedColor = 'currentColor',
      size: providedSize = 'sm',
      solid: providedSolid = false,
      ...props
    }: IconProps,
    ref: React.Ref<SVGSVGElement>
  ) => {
    const color = providedColor;
    const size = theme.iconSizes[providedSize] ?? providedSize;

    return (
      <svg
        viewBox="0 0 16 16"
        fill={color}
        height={size}
        width={size}
        {...props}
        ref={ref}
      >
        {providedSolid === true ? (
          <g>
            <path d="M3.81,16a1.21,1.21,0,0,1-.74-.26,1.19,1.19,0,0,1-.33-1.45L4.79,10,2.32,8.39a1,1,0,0,1-.07-1.58L10.67.26a1.19,1.19,0,0,1,1.8,1.46L10.41,6,12.9,7.64a1,1,0,0,1,.44.78,1,1,0,0,1-.38.8L4.54,15.74A1.15,1.15,0,0,1,3.81,16Z" />
            <path d="M12.08,8.9Z" />
          </g>
        ) : (
          <g>
            <path d="M3.81,16a1.21,1.21,0,0,1-.74-.26,1.19,1.19,0,0,1-.33-1.45L4.79,10,2.32,8.39a1,1,0,0,1-.07-1.58L10.67.26a1.19,1.19,0,0,1,1.8,1.46L10.41,6,12.9,7.64a1,1,0,0,1,.44.78,1,1,0,0,1-.38.8L4.54,15.74A1.15,1.15,0,0,1,3.81,16ZM3.76,7.53l2.4,1.56a.77.77,0,0,1,.27,1L4.65,13.76l6.81-5.27L9,6.91a.75.75,0,0,1-.26-1l1.78-3.71ZM12.08,8.9Zm-.95-8h0Z" />
          </g>
        )}
      </svg>
    );
  }
);

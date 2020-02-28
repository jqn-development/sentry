import React from 'react';

import {IconProps} from 'app/types/iconProps';
import theme from 'app/utils/theme';

export const IconBroadcast = React.forwardRef(
  (
    {
      color: providedColor = 'currentColor',
      size: providedSize = 'sm',
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
        <path d="M8,10.2A2.2,2.2,0,1,1,10.2,8,2.21,2.21,0,0,1,8,10.2ZM8,7.3a.7.7,0,1,0,.7.7A.7.7,0,0,0,8,7.3Z" />
        <path d="M13.13,13.88a.74.74,0,0,1-.53-.22.75.75,0,0,1,0-1.06,6.51,6.51,0,0,0,0-9.2.75.75,0,0,1,0-1.06.75.75,0,0,1,1.06,0,8,8,0,0,1,0,11.32A.73.73,0,0,1,13.13,13.88Zm-10.26,0a.73.73,0,0,1-.53-.22,8,8,0,0,1,0-11.32.75.75,0,0,1,1.06,0,.75.75,0,0,1,0,1.06,6.51,6.51,0,0,0,0,9.2.75.75,0,0,1,0,1.06A.74.74,0,0,1,2.87,13.88Zm8.21-2.05a.74.74,0,0,1-.67-.41.76.76,0,0,1,.15-.88,3.62,3.62,0,0,0,0-5.09.74.74,0,0,1,0-1.06.75.75,0,0,1,1.06,0A5.1,5.1,0,0,1,13.1,8a5,5,0,0,1-1.49,3.61.75.75,0,0,1-.2.15A.78.78,0,0,1,11.08,11.83Zm0-.75h0Zm-6.16.75a.79.79,0,0,1-.53-.22A5.1,5.1,0,0,1,2.9,8,5,5,0,0,1,4.39,4.39l.08-.08a.75.75,0,0,1,1,1.15A3.51,3.51,0,0,0,4.4,8a3.59,3.59,0,0,0,1,2.55.74.74,0,0,1,0,1.06A.75.75,0,0,1,4.92,11.83Z" />
      </svg>
    );
  }
);

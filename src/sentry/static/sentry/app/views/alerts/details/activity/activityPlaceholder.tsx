import styled from '@emotion/styled';
import React from 'react';

import ActivityItem from 'app/components/activity/item';
import space from 'app/styles/space';
import theme from 'app/utils/theme';

const ActivityPlaceholder = () => {
  return (
    <ActivityItem
      author={null}
      bubbleProps={{
        background: theme.placeholderBackground,
        borderColor: theme.placeholderBackground,
      }}
    >
      {() => <Placeholder />}
    </ActivityItem>
  );
};

const Placeholder = styled('div')`
  padding: ${space(4)};
`;

export default ActivityPlaceholder;

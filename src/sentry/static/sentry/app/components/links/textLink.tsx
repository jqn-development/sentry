import styled from '@emotion/styled';
import {Link} from 'react-router';

/**
 * Link colored as normal text
 */
const TextLink = styled(Link)`
  color: ${p => p.theme.gray3};
  &:hover {
    color: ${p => p.theme.gray5};
  }
`;

export default TextLink;

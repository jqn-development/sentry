import styled from '@emotion/styled';
import React from 'react';

import InputField from './inputField';

export default class HiddenField extends React.Component {
  render() {
    return <HiddenInputField {...this.props} type="hidden" />;
  }
}

const HiddenInputField = styled(InputField)`
  display: none;
`;

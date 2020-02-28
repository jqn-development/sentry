import styled from '@emotion/styled';
import * as ReactRouter from 'react-router';
import {ModalBody, ModalHeader} from 'react-bootstrap';
import React from 'react';

import {t, tct} from 'app/locale';
import Button from 'app/components/button';
import Text from 'app/components/text';
import recreateRoute from 'app/utils/recreateRoute';

type Props = ReactRouter.WithRouterProps & {
  slug: string;
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
};

type State = {
  timer: number;
};

class RedirectToProjectModal extends React.Component<Props, State> {
  state = {
    timer: 5,
  };

  componentDidMount() {
    setInterval(() => {
      if (this.state.timer <= 1) {
        window.location.assign(this.newPath);
        return;
      }

      this.setState(state => ({
        timer: state.timer - 1,
      }));
    }, 1000);
  }

  get newPath() {
    const {params, slug} = this.props;

    return recreateRoute('', {
      ...this.props,
      params: {
        ...params,
        projectId: slug,
      },
    });
  }

  render() {
    const {slug, Header, Body} = this.props;
    return (
      <React.Fragment>
        <Header>{t('Redirecting to New Project...')}</Header>

        <Body>
          <div>
            <Text>
              <p>{t('The project slug has been changed.')}</p>

              <p>
                {tct(
                  'You will be redirected to the new project [project] in [timer] seconds...',
                  {
                    project: <strong>{slug}</strong>,
                    timer: `${this.state.timer}`,
                  }
                )}
              </p>
              <ButtonWrapper>
                <Button priority="primary" href={this.newPath}>
                  {t('Continue to %s', slug)}
                </Button>
              </ButtonWrapper>
            </Text>
          </div>
        </Body>
      </React.Fragment>
    );
  }
}

export default ReactRouter.withRouter(RedirectToProjectModal);
export {RedirectToProjectModal};

const ButtonWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
`;

import {Client} from 'app/api';
import GuideActions from 'app/actions/guideActions';
import {trackAnalyticsEvent} from 'app/utils/analytics';
import {Guide} from 'app/components/assistant/types';

const api = new Client();

export function fetchGuides() {
  api.request('/assistant/', {
    method: 'GET',
    success: data => {
      GuideActions.fetchSucceeded(data);
    },
  });
}

export function registerAnchor(target: string) {
  GuideActions.registerAnchor(target);
}

export function unregisterAnchor(target: string) {
  GuideActions.unregisterAnchor(target);
}

export function nextStep() {
  GuideActions.nextStep();
}

export function closeGuide() {
  GuideActions.closeGuide();
}

export function dismissGuide(guideId: Guide['id'], step: number, orgId: string | null) {
  recordDismiss(guideId, step, orgId);
  closeGuide();
}

export function recordFinish(guideId: Guide['id'], orgId: string | null) {
  api.request('/assistant/', {
    method: 'PUT',
    data: {
      guide_id: guideId,
      status: 'viewed',
    },
  });
  const data = {
    eventKey: 'assistant.guide_finished',
    eventName: 'Assistant Guide Finished',
    guide: guideId,
    organization_id: orgId,
  };
  trackAnalyticsEvent(data);
}

export function recordDismiss(guideId: Guide['id'], step: number, orgId: string | null) {
  api.request('/assistant/', {
    method: 'PUT',
    data: {
      guide_id: guideId,
      status: 'dismissed',
    },
  });
  const data = {
    eventKey: 'assistant.guide_dismissed',
    eventName: 'Assistant Guide Dismissed',
    guide: guideId,
    step,
    organization_id: orgId,
  };
  trackAnalyticsEvent(data);
}
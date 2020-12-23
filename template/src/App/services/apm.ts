import { init } from '@elastic/apm-rum';

export function setupApm(): void {
    init({
        serverUrl: process.env.REACT_APP_ELASTIC_APM_RUM_SERVER_URL,
        serviceName: process.env.REACT_APP_ELASTIC_APM_RUM_SERVICE_NAME,
        serviceVersion: process.env.REACT_APP_ELASTIC_APM_RUM_SERVICE_VERSION
    });
}

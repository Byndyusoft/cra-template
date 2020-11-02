import React, { FC, useEffect } from 'react';
import { apm } from '@elastic/apm-rum';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

const FallbackComponent: FC<any> = ({ error }) => {
    useEffect(() => {
        apm.captureError(error);
    }, [error]);

    return <ErrorFallback />;
};

const ErrorBoundary: FC = ({ children }) => {
    return <ReactErrorBoundary FallbackComponent={FallbackComponent}>{children}</ReactErrorBoundary>;
};

export default ErrorBoundary;

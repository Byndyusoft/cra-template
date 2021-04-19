import React, { FC, useEffect } from 'react';
import { apm } from '@elastic/apm-rum';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

interface IFallbackComponentProps {
    error: Error;
}

const FallbackComponent = ({ error }: IFallbackComponentProps): JSX.Element => {
    useEffect(() => {
        apm.captureError(error);
    }, [error]);

    return <ErrorFallback />;
};

const ErrorBoundary: FC = ({ children }): JSX.Element => (
    <ReactErrorBoundary FallbackComponent={FallbackComponent}>{children}</ReactErrorBoundary>
);

export default ErrorBoundary;

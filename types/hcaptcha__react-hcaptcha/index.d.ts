// Type definitions for @hcaptcha/react-hcaptcha 1.0
// Project: https://github.com/hCaptcha/react-hcaptcha
// Definitions by: Matt Sutkowski <https://github.com/msutkowski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface HCaptchaState {
    isApiReady: boolean;
    isRemoved: boolean;
    elementId: string;
    captchaId: string;
}

export interface HCaptchaProps {
    onExpire?: () => any;
    onError?: (event: string) => any;
    onVerify?: (token: string) => any;
    languageOverride?: string;
    sitekey: string;
    size?: 'normal' | 'compact' | 'invisible';
    theme?: 'light' | 'dark';
    tabIndex?: number;
}

export default class HCaptcha extends React.Component<HCaptchaProps, HCaptchaState> {
    resetCaptcha(): void;
    renderCaptcha(): void;
    removeCaptcha(): void;
}

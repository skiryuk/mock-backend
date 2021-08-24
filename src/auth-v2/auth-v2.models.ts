export interface RefreshTokenRequest {
  accessToken: string;
  refreshToken: string;
}

export interface AuthLogonRequest {
  phoneAsLogin: string;
}

export interface AuthCheckCodeLogonRequest {
  phoneAsLogin: string;
  code: string;
}

export interface AuthInSalepointRequest {
  salesPointId: number;
  accessTokenExpiresSeconds: number;
  refreshTokenExpiresSeconds: number;
}

export interface AuthLogonResponse {
  success: boolean;
  errorMessage?: string;
  smsCodeExpiration?: string;
  remainingAttempts: number;
  authToken?: AuthToken;
}

export interface AuthCheckCodeLogonResponse {
  success: boolean;
  isTimeout?: boolean;
  errorMessage?: string;
  authToken?: AuthToken;
}

export interface AuthToken {
  value: string;
  expires: string;
}

export interface AuthRefreshResponse {
  refreshToken: AuthToken;
  accessToken: AuthToken;
}

export interface AuthInSalepointResponse {
  refreshToken: AuthToken;
  accessToken: AuthToken;
}

export interface IBeginRegisterRequest {
  phoneAsLogin: string;
  checkCaptcha: ICheckCaptcha;
}

export interface ICheckCaptcha {
  code: string;
  token: string;
}

export interface IRegisterCheckCodeRequest {
  code: string;
  phoneAsLogin: string;
}

export interface IFinishRegisterRequest {
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  newPassword: string;
  accept: boolean;
}

export interface IRegisterResendCodeRequest {
  phoneAsLogin: string;
}

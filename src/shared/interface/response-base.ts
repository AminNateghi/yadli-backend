export interface ResponseBase {
  success: boolean;
  message?: string;
}

export interface ResponseBaseWithData<T> extends ResponseBase {
  data?: T;
}
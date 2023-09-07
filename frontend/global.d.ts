declare module "super-react-gist";

declare namespace AwsWafIntegration {
    declare function fetch(
      input: RequestInfo | URL,
      init?: RequestInit | undefined
    ): Promise<Response>;

    declare function getToken(): Promise<Response>;

    declare function forceRefreshToken(): Promise<void>;
  }
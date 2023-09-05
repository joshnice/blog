declare module "super-react-gist";

declare var AwsWafIntegration = {
    fetch: (url: string, opts: any) => Promise<any>,
    getToken: () => Promise<any>,
    hasToken: () => Promise<any>,
}
// Esta interface permite asignat tipado fuerte al response del fetch e implementar "IntelliSense" al response.
export class HttpFetchResponse<T> extends Response {
    data: T;
}
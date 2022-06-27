export declare class Response {
    statusCode: number;
    message: string;
    data: any;
    constructor(data: any, message?: string, statusCode?: number);
    static created(data: any, message?: string): Response;
}

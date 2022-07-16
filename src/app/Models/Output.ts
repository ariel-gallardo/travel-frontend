export interface Output<T>{
    data: T
    messages: string[]
    statusCode: number
}
export default interface Output<T>{
    data: T
    messages: string[]
    statusCode: number
}
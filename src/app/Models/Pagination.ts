export interface Pagination<T>{
    data: T
    statusCode: number
    backPage: boolean
    nextPage: boolean
    page: number
    totalItems: number
    totalPages: number
}
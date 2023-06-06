class ApiResult<T> {
  isSuccess: boolean
  result: T

  constructor(isSuccess, result) {
    this.isSuccess = isSuccess
    this.result = result
  }
}

export default ApiResult

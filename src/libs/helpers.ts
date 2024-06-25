async function parseResponse<T>(response: Response): Promise<T> {
  return (await response.json()) as T;
}

export { parseResponse };

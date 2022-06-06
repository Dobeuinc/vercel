import decamelize from 'decamelize';

export const config = {
  runtime: 'experimental-edge',
};

export default async function edge(request, event) {
  const requestBody = await request.text();

  return new Response(
    JSON.stringify({
      headerContentType: request.headers.get('content-type'),
      url: request.url,
      method: request.method,
      body: requestBody,
      decamelized: decamelize('someCamelCaseThing'),
    })
  );
}

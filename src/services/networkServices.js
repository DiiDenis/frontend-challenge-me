export async function get(endpoint) {
  const response = await fetch(`/api${endpoint}`);

  if (!response.ok) {
    throw new Error(`Erro: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

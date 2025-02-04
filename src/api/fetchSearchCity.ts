export const fetchSearchResults = async (query: string) => {
 try {
  const response = await fetch(
   `${import.meta.env.VITE_BASE_URL}/search.json?key=${import.meta.env.VITE_API_KEY}&q=${query}`,
  );

  if (!response.ok) {
   throw new Error(`${response.status}`);
  }

  return response.json();
 } catch (error) {
  console.error(error);
 }
};

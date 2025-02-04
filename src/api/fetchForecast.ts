export const fetchForecast = async (location: string) => {
 try {
  const response = await fetch(
   `${import.meta.env.VITE_BASE_URL}/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${location}&days=7`,
  );

  if (!response.ok) {
   throw new Error(`${response.status}`);
  }

  return response.json();
 } catch (error) {
  console.error(error);
 }
};

export const fetchForecast = async () => {
 try {
  const response = await fetch(
   `${import.meta.env.VITE_BASE_URL}/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=Seoul&days=7`,
  );

  if (!response.ok) {
   throw new Error(`${response.status}`);
  }

  const data = await response.json();

  return data;
 } catch (error) {
  console.error(error);
 }
};

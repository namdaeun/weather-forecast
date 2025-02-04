export const formatDate = (date: string): string => {
 const [, month, day] = date.split('-').map(Number);

 return `${month} / ${day}`;
};

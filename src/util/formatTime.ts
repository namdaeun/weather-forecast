export const formatTime = (dateTime: string): string => {
 const [, time] = dateTime.split(' ');
 const [hour, minute] = time.split(':').map(Number);

 const AMPM = hour >= 12 ? 'PM' : 'AM';
 const formattedHour = hour % 12 === 0 ? 12 : hour % 12;

 return `${AMPM} ${formattedHour}:${minute.toString().padStart(2, '0')}`;
};

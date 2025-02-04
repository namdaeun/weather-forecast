type Forecastday = {
 date: string;
 day: {
  maxtemp_c: number;
  mintemp_c: number;
  daily_chance_of_rain: number;
  condition: {
   text:
    | 'Partly Coudly '
    | 'Clear '
    | 'Sunny'
    | 'Overcast '
    | 'Cloudy '
    | 'Light freezing rain'
    | 'Moderate snow'
    | 'Blizzard'
    | 'Moderate or heavy snow showers'
    | 'Light snow showers'
    | 'Patchy snow nearby'
    | 'Rain';
  };
 };
};

type Weather =
 | 'Partly Coudly '
 | 'Clear '
 | 'Sunny'
 | 'Overcast '
 | 'Cloudy '
 | 'Light freezing rain'
 | 'Moderate snow'
 | 'Blizzard'
 | 'Moderate or heavy snow showers'
 | 'Light snow showers'
 | 'Patchy snow nearby'
 | 'Rain';

export interface Location {
 name: string;
 region: string;
 country: string;
}

export interface Forecast {
 forecastday: Forecastday[];
}

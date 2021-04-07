import { WeatherType } from '../actions/types';

const initialState = {
  city: { name: 'Lviv' },
  forecast: []
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case WeatherType.GET_WEATHER_REQUEST: {
      return {
        ...state
      };
    }

    case WeatherType.GET_WEATHER_SUCCESS: {
      return {
        ...state,
        city: action.payload.city,
        forecast: action.payload.list
      };
    }

    case WeatherType.GET_WEATHER_FAIL: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};

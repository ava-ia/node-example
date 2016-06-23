'use strict';

import 'colors';
import Ava from 'ava-ia';
import { weather, movie } from 'ava-ia/lib/intents';
import { forecastYahoo, forecastMSN, movieDB } from 'ava-ia/lib/actions';

// 1. New instance
const ava = new Ava();

// 2. Configure the intents
ava
  .intent(weather, [forecastYahoo, forecastMSN])
  .intent(movie, movieDB);

// 3. Ask something to Ava
ava.listen('Do you know if tomorrow will rain in Bangkok?')
  .then( state => console.log(state.action) )
  .catch( error => console.log(error) )

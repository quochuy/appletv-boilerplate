import ATV from 'atvjs';
import template from './template.hbs';

import staticData from 'lib/static-data-generator';

var MoviesPage = ATV.Page.create({
    name: 'movies',
    // url: API.discoverMovies,
    ready(options, resolve, reject) {
      setTimeout(function() {
        resolve(staticData(40));
      }, 3000);
    },
    template: template
});

export default MoviesPage;
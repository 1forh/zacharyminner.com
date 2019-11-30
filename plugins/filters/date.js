import moment from 'moment';
import Vue from 'vue';

Vue.filter('date', function(value, format) {
  if (value) {
    return moment(String(value)).format(format || 'DD MMMM 	YYYY');
  }
});

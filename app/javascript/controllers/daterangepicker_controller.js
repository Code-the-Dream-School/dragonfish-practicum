import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="daterangepicker"
export default class extends Controller {
  connect() {
    new DateRangePicker(this.element, {
      alwaysShowCalendars: true,
      autoApply: true,
      ranges: {
        'Last 7 Days': [moment().subtract(6, 'days').startOf('day'), moment().endOf('day')],
        'This Month': [moment().startOf('month').startOf('day'), moment().endOf('month').endOf('day')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
        'This Year': [moment().startOf('year').startOf('day'), moment().endOf('year').endOf('day')],
    },
    });
  }
}

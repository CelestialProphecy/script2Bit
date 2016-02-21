"use strict";

$(document).ready(function () {
  toastr.options = {
         "closeButton": true,
         "debug": false,
         "progressBar": false,
         "preventDuplicates": true,
         "positionClass": "toast-top-right",
         "onclick": null,
         "showDuration": "500",
         "hideDuration": "300",
         "timeOut": "1000",
         "extendedTimeOut": "1000",
         "showEasing": "swing",
         "hideEasing": "swing",
         "showMethod": "slideDown",
         "hideMethod": "slideUp"
  };
});

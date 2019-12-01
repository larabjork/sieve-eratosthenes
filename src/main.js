import { Sieve } from './project.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('.form').submit(function(event) {
    event.preventDefault();
    let num = parseint($("#enterNumber").val());
    $('#enterNumber').val("");

    $('.form').hide();
    $('.results').show();

  });
});

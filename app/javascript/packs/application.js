// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import 'bootstrap';

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//
// ... your other scripts here ...
//
//= require turbolinks
import "./plugins/flatpickr";
import { selectStatus } from "./plugins/View/Userform/StatusSelection";
import { ServicesSelected } from "./plugins/View/UserServiceForm/ServiceSelected";
import { SearchService } from './plugins/View/Service/Service';
    // Call your JS functions here
    selectStatus();
    ServicesSelected();
    SearchService();


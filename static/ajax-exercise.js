"use strict";


// PART 1: SHOW A FORTUNEor

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    function replaceFortune(fortune){

    	$("#fortune-text").html(fortune);
    }

    $.get("/fortune", replaceFortune);
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = { "zipcode": $("#zipcode-field").val() };

    function updateWeather(weather){
    	$('#weather-info').html(weather['forecast']);
    }

    $.get("/weather.json",formData, updateWeather);
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // let formData = {
    // 	"qty": $('#qty-field').val(),
    // 	"melon_type": $("#melon-type-field").val()
    // };

    let FormData = $("#order-form").serialize();

    function displayMessage(message){
    	$("#order-status").html(message['msg']);
    	if (message['code'] === 'ERROR'){
    		$('#order-status').addClass('order-error');
    	}
    }
	$.post("/order-melons.json", formData, displayMessage);

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);



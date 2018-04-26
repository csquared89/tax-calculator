//Hides the <p> before button is pressed
$('.taxPlus').hide();

// When button is clicked, run function
$('#calc').click(function(){
 // Declares the total and tax rate
 let taxRate = ($('#taxrates').val() / 100);
 let total = ($('#subtotal').val() * (taxRate + 1)).toFixed(2);
 // Show and replace text in <p>
 $('.taxPlus').show().html(`Your total is: $${total}!`);
});

// Button that clears the subtotal, tax, and total
$('#clear').click(function(){
  $('#taxrates').val('');
  $('#subtotal').val('');
  $('.taxPlus').hide();
});

// Income Tax Calculator Function

// Hide the income tax text
$('.incomeTax').hide();

// Function that calculates the tax that you owe before deductions
$('#calcFedTax').click(function() {

  // Difference in floor/ceiling of each tax bracket
  function diff(max, min) {
    var difference = max - min;
    return difference;
  }

  // Sum for two parameters
  function dbl(a, b) {
    var sum = a + b;
    return sum;
  }

  // Sum for three parameters
  function trio(x, y, z) {
    var sums = x + y + z;
    return sums;
  }

  //Declare variables
  var inc, oneZero, productOne, prodTwo, prodThree, prodFour, prodFive, lessThan1, lessThan2, lessThan3, lessThan4, lessThan5, lessThan6, lessThan7;
    inc = $('#income').val();
    oneZero = Pts.tbp1 * Rates.tr1;
    prodOne = diff(Pts.tbp2, Pts.tbp1) * Rates.tr2;
    prodTwo = diff(Pts.tbp3, Pts.tbp2) * Rates.tr3;
    prodThree = diff(Pts.bp4, Pts.tbp3) * Rates.tr4;
    prodFour = diff(Pts.tbp5, Pts.tbp4) * Rates.tr5;
    prodFive = diff(Pts.tbp6, Pts.tbp5) * Rates.tr6;
    lessThan1 = inc * Rates.tr1;
    lessThan2 = oneZero + ((inc - Pts.tbp1) * Rates.tr2);
    lessThan3 = oneZero + prodOne + ((inc - Pts.tbp2) * Rates.tr3);
    lessThan4 = oneZero + dbl(prodOne, prodTwo) + ((inc - Pts.tbp3) * Rates.tr4);
    lessThan5 = oneZero + trio(prodOne, prodTwo, prodThree) + ((inc - Pts.tbp4) * Rates.tr5);
    lessThan6 = oneZero + dbl(prodOne, prodTwo) + dbl(prodThree, prodFour) + ((inc - Pts.tbp5) * Rates.tr6);
    lessThan7 = oneZero + dbl(prodOne, prodTwo) + trio(prodThree, prodFour, prodFive) + ((inc - Pts.tbp6) * Rates.tr7);


  if ( inc <= Pts.tbp1 ) {
      $('.incomeTax').html("You owe $" + (lessThan1).toFixed(2) + " in federal taxes before deductions." );
  } else if ( Pts.tbp1 < inc <= Pts.tbp2 ) {
      $('.incomeTax').html("You owe $" + (lessThan2).toFixed(2) + " in federal taxes before deductions." );
  } else if ( Pts.tbp2 < inc <= Pts.tbp3 ) {
      $('.incomeTax').html("You owe $" + (lessThan3).toFixed(2) + " in federal taxes before deductions." );
  } else if ( Pts.tbp3 < inc <= Pts.tbp4 ) {
      $('.incomeTax').html("You owe $" + (lessThan4).toFixed(2) + " in federal taxes before deductions." );
  } else if ( Pts.tbp4 < inc <= Pts.tbp5 ) {
      $('.incomeTax').html("You owe $" + (lessThan5).toFixed(2) + " in federal taxes before deductions." );
  } else if ( Pts.tbp5 < inc <= Pts.tbp6 ) {
      $('.incomeTax').html("You owe $" + (lessThan6).toFixed(2) + " in federal taxes before deductions." );
  } else {
      $('.incomeTax').html("You owe $" + (lessThan7).toFixed(2) + " in federal taxes before deductions." );
  };

  $('.incomeTax').show();

});

// Reset button
$('#clearIncome').click(function(){
  $('#income').val('');
  $('.incomeTax').empty();
  $('.incomeTax').hide();
});

$(function() {
  $("#presidents").accordion({
    animate: 50,
    collapsible: true
  });
});

$("#presidents h2").css('cursor', 'pointer');

$(document).ready(() => {

  $('.notes').hide();

  $('.more-details-button').on('click', event => {
   $(event.currentTarget).closest('.name-learn').next().toggle()
  });

  $('.notes li').on('click', event => {
    $(event.currentTarget).addClass('active');
    $(event.currentTarget).siblings().removeClass('active');
    $(event.currentTarget).closest('.notes').children().removeClass('disabled')
  });
});

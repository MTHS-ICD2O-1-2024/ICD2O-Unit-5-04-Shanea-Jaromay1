// Copyright (c) 2025 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: Apr 2025
// This file contains the JS functions for index.html

/**
 * This function tells you if you get a student discount
 */
// eslint-disable-next-line no-unused-vars

function getStudentDiscount() {
  // input
  const userAge = parseInt(document.getElementById('age-number').value);
  const daysNumber = document.getElementById('days-number').value;

  // process
  if (daysNumber === 'Tuesday' || daysNumber === 'Thursday' || (userAge > 12 && userAge < 21)) {
    // output
    document.getElementById('result').innerHTML = 
    "You get the student discount for the museum.";
  } else {
    // output
    document.getElementById('result').innerHTML = 
    "You pay the regular price";
  }
}

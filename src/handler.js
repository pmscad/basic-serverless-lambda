'use strict';

module.exports.generateRandomNumber = event => {
  const randomNumber = parseInt(Math.random() * 100);
  console.log('The random genearted integer is:*,randomNumber');
  return randomNumber;
};

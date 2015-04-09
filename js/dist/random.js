(function(exports, undefined){

	'use strict';


/* js/src/000-kernel */
/* js/src/000-kernel/fisheryates.js */

/**
 * Sample array using Fisher-Yates method.
 */

var _fisheryates = function ( randint ) {

	var fisheryates = function ( n , a , i , j ) {

		var k , p , tmp ;

		// we will swap at most n elements

		k = i + n ;

		for ( ; i < k ; ++i ) {

			// choose any index p in the remaining array

			p = randint( i , j ) ;


			// swap element at index p with first element in the array

			tmp  = a[i] ;
			a[i] = a[p] ;
			a[p] =  tmp ;

		}

	} ;

	return fisheryates ;

} ;

exports._fisheryates = _fisheryates ;

/* js/src/000-kernel/shuffle.js */

/**
 * Shuffle array by sampling the complete array.
 */

var _shuffle = function ( sample ) {

	var shuffle = function ( a , i , j ) {
		sample( j - i , a , i , j ) ;
	} ;

	return shuffle ;

} ;

exports._shuffle = _shuffle ;

/* js/src/001-api */
/* js/src/001-api/000-randfloat.js */

/**
 * Returns a floating point number in interval [i, j[ (i included, j excluded)
 * according to a uniform distribution.
 */

var randfloat = function ( i , j ) {
	return i + Math.random( ) * ( j - i ) ;
} ;

exports.randfloat = randfloat ;

/* js/src/001-api/001-randint.js */

/**
 * Returns an integer in interval [i, j[ (i included, j excluded)
 * according to a uniform distribution.
 */

var randint = function ( i , j ) {
	return i + Math.floor( Math.random( ) * ( j - i ) ) ;
} ;

exports.randint = randint ;

/* js/src/001-api/002-sample.js */

var sample = _fisheryates( randint ) ;

exports.sample = sample ;

/* js/src/001-api/003-shuffle.js */

var shuffle = _shuffle( sample ) ;

exports.shuffle = shuffle ;

})(typeof exports === 'undefined' ? this['random'] = {} : exports);
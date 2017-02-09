const takePhoto = require( './take-photo' );
const photoToPost = require( './photo-to-post' );
const cameraSettings = require( './camera-settings' );
const schedule = require( './schedule' );

module.exports = function( emitter ) {
	emitter.on( 'camera-take-photo', takePhoto );
	emitter.on( 'photo-to-wp', photoToPost );
	emitter.on( 'camera-settings', cameraSettings );
	emitter.on( 'camera-schedule', schedule );
};

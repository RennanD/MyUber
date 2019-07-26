import React from 'react'

import MapsViewDirection from 'react-native-maps-directions'

export default function Directions({destination, origin, onReady}) {
	
	return(
	
		<MapsViewDirection
			destination = {destination}
			origin ={origin}
			onReady = {onReady}
			apikey = ''
			strokeWidth = {3}
			strokeColor = '#717'
		/>
	
	)
}

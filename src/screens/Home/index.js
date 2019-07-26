import React from 'react'
import {StyleSheet} from 'react-native'
import MapView from 'react-native-maps'
import { Container } from './styles';
import Map from '~/components/Map';

export default function Home() {
	
	return(

		<Container>
			<Map />
		</Container>
		
	)
}

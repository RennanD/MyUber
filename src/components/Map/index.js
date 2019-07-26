import React, {useState, useEffect} from 'react'
import MapView from 'react-native-maps'
import Search from '../Search';

export default function Map() {
	
	const [region, setRegion] = useState()

	useEffect(()=>{
		navigator.geolocation.getCurrentPosition(
			({coords: {latitude, longitude}}) =>{
				setRegion({
					latitude,
					longitude,
					latitudeDelta: 0.0143,
					longitudeDelta: 0.0134
				})
			},
			() =>{},
			{
				timeout: 2000,
				enableHighAccuracy: true,
				maximumAge: 1000
			}

		)
	},[])

	return(
	
		
		<>
			<MapView 
				style = {{
					flex: 1,
				}}
				region ={region}
				showsUserLocation
				loadingEnable
			/>
			<Search />		
		</>
			
		
	
	)
}

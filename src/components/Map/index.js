import React, {useState, useEffect} from 'react'
import MapView from 'react-native-maps'
import Search from '../Search';
import Directions from '../Directions';

export default function Map() {
	
	const [region, setRegion] = useState()
	const [destination, setDestination] = useState()

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

	function handleLocationSelected(data, {geometry}){
		const {location : {lat: latitude, lng: longitude}} = geometry

		setDestination({
			latitude,
			longitude,
			title : data.structured_formatting.main_text
		})
	}
	
	return(
	
		
		<>
			<MapView 
				style = {{
					flex: 1,
				}}
				region ={region}
				showsUserLocation
				loadingEnable
				ref = {el => mapView = el}
			>
				{destination && (
					<Directions origin = {region} 
						destination = {destination}
						onReady = {(result)=>{
							mapView.fitToCoordinates(result.coordinates)
						}}
					/>
				)}
			</MapView>
			<Search onLocationSelected = {handleLocationSelected} />		
		</>
			
		
	
	)
}

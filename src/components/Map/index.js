import React, {useState, useEffect} from 'react'
import MapView ,{Marker} from 'react-native-maps'
import GeoCoder from 'react-native-geocoding'
import Search from '../Search';
import Directions from '../Directions';
import {getPixelSize} from '~/utils'
import markerImage from '~/assets/marker.png'
import { LocationBox, LocationText, LocationTimeBox, 
LocationTime, LocationTimeSmall, Back, BackImage } from './styles';
import Details from '../Details';
import backImage from '~/assets/back.png'



export default function Map() {
	GeoCoder.init('')
	const [region, setRegion] = useState()
	const [destination, setDestination] = useState()
	const [duration, setDuration] = useState()
	const [location, setLocation] = useState()


	useEffect(()=>{
		findMyLocation()
	},[])

	async function findMyLocation(){
		navigator.geolocation.getCurrentPosition(
			async ({coords: {latitude, longitude}}) =>{
				const response = await GeoCoder.from({latitude, longitude})
				const address = response.results[0].formatted_address
				const location = address.substring(0, address.indexOf(','))
				setLocation(location)
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
	}

	function handleLocationSelected(data, {geometry}){
		const {location : {lat: latitude, lng: longitude}} = geometry

		setDestination({
			latitude,
			longitude,
			title : data.structured_formatting.main_text
		})
	}

	function handleBack(){
		setDestination(null)
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
					<>
						<Directions origin = {region} 
							destination = {destination}
							onReady = {(result)=>{
								setDuration(Math.floor(result.duration))

								mapView.fitToCoordinates(result.coordinates,{
									edgePadding:{
										right: getPixelSize(50),
										left: getPixelSize(50),
										top: getPixelSize(50),
										bottom: getPixelSize(350)
									}
								})
							}}
						/>
						<Marker 
							coordinate = {destination}
							anchror ={{x: 0, y:0}}
							image = {markerImage}
						>
							<LocationBox >
								<LocationText>{destination.title}</LocationText>
							</LocationBox>
						</Marker>
						<Marker 
							coordinate = {region}
							anchror ={{x: 0, y:0}}
						>
							<LocationBox >
								<LocationTimeBox>
									<LocationTime>{duration}</LocationTime>
									<LocationTimeSmall>min</LocationTimeSmall>
								</LocationTimeBox>
								<LocationText>{location}</LocationText>
							</LocationBox>
						</Marker>
					</>
				)}
			</MapView>
			{destination ? (
				<>
					<Back onPress = {handleBack}>
						<BackImage source = {backImage} />
					</Back>
					<Details />
				</>
			) 
			: (
				<Search onLocationSelected = {handleLocationSelected} />
			)}		
		</>		
	
	)
}

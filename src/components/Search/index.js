import React,{useState, useEffect} from 'react'
import {Platform} from 'react-native'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'


export default function Search() {
	
	return(
	
		<GooglePlacesAutocomplete
			placeholder = 'Destino da viagem...'
			placeholderTextColor = '#999'
			onPress = {({data, details})=>{
				console.log(data, details)
			}}
			query = {{
				key: '',
				language: 'pt'
			}}
			fetchDetails
			enablePoweredByContainer = {false}
			styles = {{
				container: {
					position: 'absolute',
					top: Platform.select({ios: 60, android: 40}),
					width: '100%'
				},
				textInputContainer: {
					flex: 1,
					backgroundColor: 'transparent',
					height: 54,
					marginHorizontal: 20,
					borderBottomWidth: 0,
					borderTopWidth: 0,
				},
				textInput: {
					height: 54,
					margin: 0,
					borderRadius: 5,
					paddingTop: 0,
					paddingBottom: 0,
					paddingLeft: 20,
					paddingRight: 20,
					marginTop: 0,
					marginLeft: 0,
					marginRight: 0,
					elevation: 5,
					borderWidth: 1,
					borderColor: '#DDD',
					fontSize: 18
				},
				listView: {
					borderColor: '#ddd',
					borderWidth: 1,
					backgroundColor: '#FEFEFE',
					marginHorizontal: 20,
					elevation: 5,
					marginTop: 10
				},
				description: {
					fontSize: 16
				},
				row: {
					padding: 20,
					height: 58
				}
			}}
		/>
	
	)
}

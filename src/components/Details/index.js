import React from 'react'

import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles'
import uberx from '~/assets/uberx.png'
export default function Details() {
	
	return(
	
		<Container>
			<TypeTitle>Popular</TypeTitle>
			<TypeDescription>Viagens mais baratas</TypeDescription>
			<TypeImage source = {uberx} />
			<TypeTitle>UberX</TypeTitle>
			<TypeDescription>R$10,00</TypeDescription>

			<RequestButton onPress ={()=>{}}>
				<RequestButtonText>Confirmar</RequestButtonText>
			</RequestButton>
		</Container>
	
	)
}

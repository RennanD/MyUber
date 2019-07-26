import styled, {css} from 'styled-components/native'
import {Platform} from 'react-native'

export const LocationBox = styled.View`
    background: #FEFEFE;
    shadow-color: #000;
    shadow-offset: 0 0;
    shadow-opacity: 0.1;
    elevation: 1;
    border: 1px solid #DDD; 
    border-radius: 3;
    flex-direction: row;

    ${Platform.select({
        ios: css `
        margin-top: 20px;
        `,
        android: css`
            margin-top: 20px;
            margin-left: 10px;
        `
    })}
`
export const LocationText = styled.Text`
    margin: 8px 10px;
    font-size: 14px;
    color: #333;
`
export const LocationTimeBox = styled.View`
    background: #222;
    padding: 3px 8px;

`

export const LocationTime = styled.Text`
    color: #fff;
    font-size: 12px;
`
export const LocationTimeSmall = styled.Text`
    color: #fff;
    font-size: 10px;
`
export const Back = styled.TouchableOpacity`
    position: absolute;
    top: ${Platform.select({
        ios: 60,
        android: 40
    })};
    left: 20px;
`

export const BackImage = styled.Image`

`

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    texto:string,
    color?:string,
    ancho?:boolean
}

export const Boton = ( {texto, color='#2D2D2D', ancho=false} : Props ) => {
    return(
        <TouchableOpacity>
            <View style={{
                ...styles.boton, 
                backgroundColor:color,
                width:(ancho?180:80)
            }}>
                <Text style={{...styles.textoBoton,
                color:(color==='#9B9B9B'?'black':'white')}}> {texto} </Text>
            </View>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    boton: {
      height:80,
      width:80,
      backgroundColor:'#2D2D2D',
      borderRadius:100,
      justifyContent:'center',
      marginHorizontal:10
    },
    textoBoton:{
        alignSelf:'center',
        color:'white',
        fontSize:30,
    }
  });
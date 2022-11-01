import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    calculadoraContainer: {
      flex:1,
      backgroundColor:'black',
      alignItems:'flex-end',
      justifyContent: 'flex-end',
      paddingHorizontal:20
    },
    resultado:{
        fontSize:60,
        color:'white'
    },
    resultadoLittle:{
        fontSize:30,
        color:'white'
    },
    fila:{
        // flex:1,
        flexDirection:'row',
        marginVertical:5
        
    }
  });
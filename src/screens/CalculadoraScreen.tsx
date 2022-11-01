import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { Boton } from '../componentes/Boton';
import { useState } from 'react';

export const CalculadoraScreen = () => {
const [numero, setnumero] = useState('100')
const [numeroAnterior, setnumeroAnterior] = useState('1500')

const limpiar = () =>{
    setnumero('0')
}

const limpiarNumeroAnterior = () =>{
    setnumeroAnterior('0')
}

const armarNumero = (numeroTexto:string) =>{
    setnumero(numero+numeroTexto)
}

    return(
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoLittle}>{numeroAnterior}</Text>
            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>
            {/* RENGLON 1 */}
            <View style={styles.fila}>
                <Boton color='#9B9B9B' texto='C' accion={limpiar}/>
                <Boton color='#9B9B9B' texto='+/-' accion={limpiar} />
                <Boton color='#9B9B9B' texto='%' accion={limpiar} />
                <Boton color='#FF9427' texto='/' accion={limpiar} />
            </View>
            {/* RENGLON 2 */}
            <View style={styles.fila}>
                <Boton texto='7' accion={armarNumero} />
                <Boton texto='8' accion={armarNumero} />
                <Boton texto='9' accion={armarNumero} />
                <Boton color='#FF9427' texto='X' accion={limpiar}/>
            </View>
            {/* RENGLON 3 */}
            <View style={styles.fila}>
                <Boton texto='4' accion={armarNumero} />
                <Boton texto='5' accion={armarNumero} />
                <Boton texto='6' accion={armarNumero} />
                <Boton color='#FF9427' texto='-'accion={limpiar} />
            </View>
            {/* RENGLON 4 */}
            <View style={styles.fila}>
                <Boton texto='1' accion={armarNumero} />
                <Boton texto='2' accion={armarNumero} />
                <Boton texto='3' accion={armarNumero} />
                <Boton color='#FF9427' texto='+' accion={limpiar}/>
            </View>
            {/* RENGLON 3 */}
            <View style={styles.fila}>
                <Boton texto='0' ancho accion={armarNumero}/>
                <Boton texto='.' accion={armarNumero} />
                <Boton color='#FF9427' texto='=' accion={limpiar}/>
            </View>
        </View>
    )
}
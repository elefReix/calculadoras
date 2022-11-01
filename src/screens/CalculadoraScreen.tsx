import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { Boton } from '../componentes/Boton';

export const CalculadoraScreen = () => {
    return(
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoLittle}>1,500.00</Text>
            <Text style={styles.resultado}>1,500.00</Text>
            {/* RENGLON 1 */}
            <View style={styles.fila}>
                <Boton color='#9B9B9B' texto='C' />
                <Boton color='#9B9B9B' texto='+/-' />
                <Boton color='#9B9B9B' texto='%' />
                <Boton color='#FF9427' texto='/' />
            </View>
            {/* RENGLON 2 */}
            <View style={styles.fila}>
                <Boton texto='7' />
                <Boton texto='8' />
                <Boton texto='9' />
                <Boton color='#FF9427' texto='X' />
            </View>
            {/* RENGLON 3 */}
            <View style={styles.fila}>
                <Boton texto='4' />
                <Boton texto='5' />
                <Boton texto='6' />
                <Boton color='#FF9427' texto='-' />
            </View>
            {/* RENGLON 4 */}
            <View style={styles.fila}>
                <Boton texto='1' />
                <Boton texto='2' />
                <Boton texto='3' />
                <Boton color='#FF9427' texto='+' />
            </View>
            {/* RENGLON 3 */}
            <View style={styles.fila}>
                <Boton texto='0' ancho/>
                <Boton texto='.' />
                <Boton color='#FF9427' texto='=' />
            </View>
        </View>
    )
}
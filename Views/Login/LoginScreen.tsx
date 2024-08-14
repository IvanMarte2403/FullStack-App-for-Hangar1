import React from 'react';
import { Text, View, Button } from "react-native";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '../../app/index';


const LoginScreen = () => {
    const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

        return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <Text>Pantalla de Iniciar Sesión</Text>
        {/* Aquí irían los componentes de formulario para iniciar sesión */}
        <Button 
            title="Ir a otra pantalla" 
            onPress={() => navigation.navigate('Login')} 
        />
        </View>
    );
}

export default LoginScreen; 
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Image,
    Pressable,
    Platform,
    Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation();
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [senha, setSenha] = useState('');
    const [tipoAcesso, setTipoAcesso] = useState('');
    const [showSenha, setShowSenha] = useState(false);

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!tipoAcesso) newErrors.tipoAcesso = 'Selecione o tipo de acesso';
        if (!cpfCnpj) newErrors.cpfCnpj = 'CPF/CNPJ é obrigatório';
        if (!senha) newErrors.senha = 'Senha é obrigatória';
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    

    const handleLogin = async () => {
        try {
            const url = 'https://abastece10.com.br/api/login-novo';

            // Montar o corpo da requisição como x-www-form-urlencoded
            const formBody = new URLSearchParams({
                login: '48551071000109',
                tipo_login: 'credenciado',
                senha: '@rtium123'
            }).toString();

            // Fazer o fetch
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formBody
            });

            const json = await response.json();
            console.log('Resposta do login:', json);

            // Exemplo: se a resposta tiver um token ou dados, você pode salvar no estado
            if (json.token) {
            // setToken(json.token);
            console.log('Token:', json.token);
            } else {
            console.log('Resposta sem token:', json);
            }

        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };


    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' }}
            style={styles.background}
            blurRadius={3}
        >
            <View style={styles.container}>
                <Image
                    source={{ uri: 'https://i.imgur.com/DSvTf5m.png' }}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <View style={styles.form}>
                    <Text style={styles.label}>Tipo de Acesso:</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={tipoAcesso}
                            onValueChange={value => setTipoAcesso(value)}
                            dropdownIconColor="#fff"
                            style={styles.picker}
                        >
                            <Picker.Item label="Selecione" value="" color="#999" />
                            <Picker.Item label="credenciado" value="credenciado" />
                            <Picker.Item label="colaborador" value="colaborador" />
                            <Picker.Item label="Administrador" value="admin" />
                        </Picker>
                    </View>
                    {errors.tipoAcesso && <Text style={styles.errorText}>{errors.tipoAcesso}</Text>}

                    <Text style={styles.label}>CPF/CNPJ:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu CPF ou CNPJ"
                        placeholderTextColor="#ccc"
                        value={cpfCnpj}
                        onChangeText={text => setCpfCnpj(text)}
                        keyboardType="numeric"
                    />
                    {errors.cpfCnpj && <Text style={styles.errorText}>{errors.cpfCnpj}</Text>}

                    <Text style={styles.label}>Senha:</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={[styles.input, { flex: 1 }]}
                            placeholder="Digite sua senha"
                            placeholderTextColor="#ccc"
                            secureTextEntry={!showSenha}
                            value={senha}
                            onChangeText={text => setSenha(text)}
                        />
                        <Pressable onPress={() => setShowSenha(!showSenha)} style={styles.eyeButton}>
                            <Text style={{ color: '#fff' }}>
                                {showSenha ? '🙈' : '👁️'}
                            </Text>
                        </Pressable>
                    </View>
                    {errors.senha && <Text style={styles.errorText}>{errors.senha}</Text>}

                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.generatePin}>Gerar Pin</Text>
                    </TouchableOpacity>

                    <Text style={styles.terms}>
                        Termos e Condições de Uso e Política de Privacidade.
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    container: {
        width: '85%',
        backgroundColor: '#042B3d',
        borderRadius: 15,
        padding: 20,
    },
    logo: {
        width: '100%',
        height: 80,
        marginBottom: 20,
        alignSelf: 'center',
    },
    form: { width: '100%' },
    label: {
        color: '#fff',
        marginBottom: 6,
        fontWeight: '600',
    },
    input: {
        backgroundColor: '#ADD8E6',
        color: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 8,
    },
    pickerContainer: {
        backgroundColor: '#ADD8E6',
        borderRadius: 8,
        marginBottom: 8,
        overflow: 'hidden',
    },
    picker: {
        color: '#fff',
        height: Platform.OS === 'ios' ? 200 : 50,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    eyeButton: {
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#042B3d',
        paddingVertical: 14,
        borderRadius: 8,
        marginTop: 12,
        marginBottom: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
    forgotPassword: {
        color: '#ccc',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 6,
    },
    generatePin: {
        color: '#ccc',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 14,
    },
    terms: {
        color: '#aaa',
        fontSize: 12,
        textAlign: 'center',
    },
    errorText: {
        color: '#ff7b7b',
        marginBottom: 6,
        fontSize: 12,
    },
});
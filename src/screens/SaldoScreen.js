import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SectionList,
    SafeAreaView,
} from 'react-native';

const saldoDisponivel = 458.02;

const transacoes = [
    {
        title: '03/12/2024',
        data: [{ nome: 'Posto para Vendas Manual', valor: -5.8 }],
    },
    {
        title: '07/11/2024',
        data: [
            { nome: 'Brasil Petro', valor: -5.0 },
            { nome: 'Brasil Petro', valor: -4.6 },
        ],
    },
    {
        title: '06/11/2024',
        data: [
            { nome: 'Teste Posto', valor: -38.99 },
            { nome: 'Teste Posto', valor: -3.6 },
            { nome: 'Brasil Petro', valor: -3.6 },
            { nome: 'Teste Posto', valor: 3.6 },
            { nome: 'Teste Posto', valor: 38.99 },
        ],
    },
    {
        title: '01/11/2024',
        data: [
            { nome: 'Teste Posto', valor: -0.6 },
            { nome: 'Teste Posto', valor: -39.99 },
        ],
    },
];

export default function SaldoScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Saldo</Text>
            <View style={styles.card}>
                <Text style={styles.disponivel}>Disponível: R$ {saldoDisponivel.toFixed(2)}</Text>
                <Text style={styles.cardInfo}>Cartão: 6063******7940</Text>
            </View>

            <SectionList
                sections={transacoes}
                keyExtractor={(item, index) => item.nome + index}
                renderItem={({ item }) => (
                    <View style={styles.transacaoRow}>
                        <Text style={styles.transacaoNome}>{item.nome}</Text>
                        <Text style={[
                            styles.transacaoValor,
                            { color: item.valor >= 0 ? 'green' : 'red' }
                        ]}>
                            {Math.abs(item.valor).toFixed(2)}
                        </Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionText}>{title}</Text>
                    </View>
                )}
                contentContainerStyle={styles.lista}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', marginTop: 50 },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
        marginLeft: 16,
    },
    card: {
        backgroundColor: '#042B3d',
        margin: 16,
        borderRadius: 8,
        padding: 16,
    },
    disponivel: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardInfo: {
        color: '#ccc',
        marginTop: 4,
    },
    sectionHeader: {
        backgroundColor: '#ADD8E6',
        paddingVertical: 6,
        paddingHorizontal: 16,
    },
    sectionText: {
        fontWeight: 'bold',
    },
    lista: {
        paddingBottom: 24,
    },
    transacaoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
    transacaoNome: {
        fontSize: 14,
        color: '#333',
    },
    transacaoValor: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});
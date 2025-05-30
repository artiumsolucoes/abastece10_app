import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

const produtosDisponiveis = ['Etanol', 'Diesel', 'Gasolina', 'Outros'];

export default function AbastecimentoScreen() {
  const [produtoSelecionado, setProdutoSelecionado] = useState('');
  const [qtd, setQtd] = useState('');
  const [valorUnit, setValorUnit] = useState('');
  const [itens, setItens] = useState([]);

  const adicionarItem = () => {
    if (!produtoSelecionado || !qtd || !valorUnit) return;
    const valorTotal = parseFloat(qtd) * parseFloat(valorUnit);
    const novoItem = {
      id: Date.now().toString(),
      produto: produtoSelecionado,
      qtd,
      valorTotal: valorTotal.toFixed(2),
    };
    setItens([...itens, novoItem]);
    setProdutoSelecionado('');
    setQtd('');
    setValorUnit('');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.logo}>VM</Text>
        <Text style={styles.title}>Abastecimento</Text>
        <Text style={styles.menu}>☰</Text>
      </View>

      {/* Botões de produtos */}
      <View style={styles.produtosContainer}>
        <Text style={styles.sectionTitle}>Produtos</Text>
        <View style={styles.botoes}>
          {produtosDisponiveis.map((prod) => (
            <TouchableOpacity
              key={prod}
              style={[
                styles.botaoProduto,
                produtoSelecionado === prod && styles.botaoSelecionado,
              ]}
              onPress={() => setProdutoSelecionado(prod)}
            >
              <Text style={styles.botaoTexto}>{prod}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Inputs */}
      <View style={styles.inputsContainer}>
        <TextInput
          placeholder="Produto"
          style={styles.input}
          value={produtoSelecionado}
          editable={false}
        />
        <TextInput
          placeholder="Qtde"
          style={styles.input}
          keyboardType="numeric"
          value={qtd}
          onChangeText={setQtd}
        />
        <TextInput
          placeholder="Valor Unit"
          style={styles.input}
          keyboardType="numeric"
          value={valorUnit}
          onChangeText={setValorUnit}
        />
      </View>

      {/* Botão adicionar item */}
      <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarItem}>
        <Text style={styles.botaoAdicionarTexto}>Adicionar item</Text>
      </TouchableOpacity>

      {/* Lista de produtos */}
      <View style={styles.listaContainer}>
        <Text style={styles.sectionTitle}>Lista de Produtos</Text>
        <View style={styles.listaHeader}>
          <Text style={styles.coluna}>Produto</Text>
          <Text style={styles.coluna}>Qtde</Text>
          <Text style={styles.coluna}>Total (R$)</Text>
        </View>
        <FlatList
          data={itens}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.listaItem}>
              <Text style={styles.coluna}>{item.produto}</Text>
              <Text style={styles.coluna}>{item.qtd}</Text>
              <Text style={styles.coluna}>R$ {item.valorTotal}</Text>
            </View>
          )}
        />
      </View>

      {/* Total e Botões */}
      <View style={styles.totalContainer}>
        <View style={styles.totalBox}>
          <Text style={styles.totalTexto}>
            Total à Pagar: R$ {itens.reduce((sum, item) => sum + parseFloat(item.valorTotal), 0).toFixed(2)}
          </Text>
        </View>

        <View style={styles.botoesRodape}>
          <TouchableOpacity style={styles.botaoCancelar}>
            <Text style={styles.botaoRodapeTexto}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoFinalizar}>
            <Text style={styles.botaoRodapeTexto}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#042B3d',
    padding: 10,
    borderRadius: 5,
  },
  logo: { color: '#00f', fontWeight: 'bold', fontSize: 18 },
  title: { color: '#fff', fontSize: 16 },
  menu: { color: '#fff', fontSize: 20 },

  produtosContainer: { marginVertical: 10 },
  sectionTitle: { fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
  botoes: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  botaoProduto: {
    backgroundColor: '#042B3d',
    padding: 10,
    borderRadius: 5,
    margin: 4,
  },
  botaoSelecionado: {
    backgroundColor: '#444',
  },
  botaoTexto: { color: '#fff' },

  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    gap: 5,
  },
  input: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    padding: 10,
    borderRadius: 5,
  },

  botaoAdicionar: {
    backgroundColor: '#042B3d',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  botaoAdicionarTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },

  listaContainer: {
    backgroundColor: '#ADD8E6',
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  listaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  listaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  coluna: { flex: 1, fontSize: 14 },

  totalContainer: {
    marginTop: 10,
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
  },
  totalBox: {
    marginBottom: 10,
  },
  totalTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  botoesRodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  botaoCancelar: {
    flex: 1,
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  botaoFinalizar: {
    flex: 1,
    backgroundColor: '#042B3d',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  botaoRodapeTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

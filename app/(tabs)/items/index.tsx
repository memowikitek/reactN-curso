import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function Items() {
  const key = (item: Product) => item.id.toString();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    console.log('Products fetched:', products);
  }, []);

  const onPressItem = (item: Product) => {
    // Aquí puedes manejar la navegación a los detalles del item
    console.log(`Pressed item with ID: ${item.id}`, item);
    router.push({ pathname: '/items/details', params: item }); // Navega a la pantalla de detalles con el item como parámetro
  };

  const renderItem = ({ item }: { item: Product }) => (
    <ThemedView>
      <TouchableOpacity onPress={() => onPressItem(item)} style={styles.itemContainer}>
        <Image contentFit="contain" source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <ThemedText ellipsizeMode='tail' numberOfLines={2} style={styles.title}>
            {item.title}
          </ThemedText>
          <ThemedText style={styles.price}>${item.price}</ThemedText>
        </View>
      </TouchableOpacity>
    </ThemedView>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={key}
      renderItem={renderItem}
      ListEmptyComponent={
        loading ? (
          <ActivityIndicator size={'large'} color={'#00f'} />
        ) : (
          <ThemedText style={{ textAlign: 'center', marginTop: 20 }}>No hay productos disponibles.</ThemedText>
        )
      }
    ></FlatList>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
    flexShrink: 1
  },
  itemContainer: {
    color: '#AAA',
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    gap: 16,
  },
  image: {
    width: 60,
    height: 60,
  },
  productContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
  },
  price: {
    fontSize: 14,
    color: "#888"
  },
  textContainer: {
    flexShrink: 1,
  }
});
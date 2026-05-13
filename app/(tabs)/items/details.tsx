import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function Details() {
  const { id, title, price, description, category, image } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
      <ThemedView style={styles.container}>
        {image && typeof image === "string" && (
          <View style={styles.imageContainer}>
            <Image
              contentFit="contain"
              source={{ uri: image }}
              style={styles.image}
            />
          </View>
        )}
        <View style={styles.textContent}>
          <View style={styles.productContainer}>
            <View style={styles.titleContainer}>
              <ThemedText style={styles.category}>{category}</ThemedText>
              <ThemedText style={styles.title}>{title}</ThemedText>
            </View>
            <View style={styles.priceContainer}>
              <ThemedText style={styles.price}>
                ${Number(price).toFixed(2)}
              </ThemedText>
            </View>
          </View>
          <ThemedText style={styles.descriptionTitle}>Descripción</ThemedText>
          <ThemedText style={styles.description}>{description}</ThemedText>
        </View>
      </ThemedView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    paddingBottom: 24,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
  },
  image: {
    width: 400,
    height: 400,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 32,
    flexShrink: 1,
  },
  category: {
    fontSize: 18,
    color: "#888",
  },
  textContainer: {
    alignItems: "center",
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 32,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    gap: 16,
  },
  textContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  titleContainer: {
    flexShrink: 1,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#555",
  },
});
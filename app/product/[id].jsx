import { View, Text } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const ProductDetails = () => {
    const router = useRouter(); // Initialize the router
    const params = useLocalSearchParams(); // Use the useSearchParams hook to get URL params
    const { id } = params; // Extract the ID from the params

    return (
        <View>
            <Text>Product ID: {id}</Text>
            {/* Here you can fetch and display product details based on the ID */}
        </View>
    );
}

export default ProductDetails;

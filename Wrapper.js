import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const ItineraryScreen = ({ navigation }) => {
  const goToTextInput = () => {
    navigation.navigate('TextInput');
  };

  const viewHotelDetails = () => {
    // Logic to view hotel details
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lịch trình</Text>
        <View style={styles.item}>
          <Text style={styles.itemText}>Địa điểm: Paris, Pháp</Text>
          <Text style={styles.itemText}>Thời gian: 9:00 AM - 5:00 PM</Text>
          <Text style={styles.itemText}>Phương tiện: Xe buýt công cộng</Text>
          <Image source={{ uri: 'https://i.pinimg.com/564x/4e/4f/90/4e4f907bfaf049e97a7bf336beeb2c30.jpg' }} style={styles.hotelImage} />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Khách sạn</Text>
        <View style={styles.hotelItem}>
        
          <View style={styles.hotelInfo}>
            <Text style={styles.hotelName}>Khách sạn Paris</Text>
            <Text style={styles.hotelLocation}>Địa điểm: Paris, Pháp</Text>
            <Text style={styles.hotelHours}>Giờ mở cửa: 24/7</Text>
            <TouchableOpacity onPress={viewHotelDetails} style={styles.detailButton}>
              <Text style={styles.detailButtonText}>Chi tiết</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={goToTextInput} style={styles.button}>
        <Text style={styles.buttonText}>Đi đến TextInput</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
  },
  hotelItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  hotelImage: {
    width: 340,
    height: 100,
    borderRadius: 10,
  },
  hotelInfo: {
    marginLeft: 10,
    flex: 1,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  hotelLocation: {
    fontSize: 16,
    color: '#666666',
  },
  hotelHours: {
    fontSize: 16,
    color: '#666666',
  },
  detailButton: {
    backgroundColor: '#f7287b',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  detailButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#f7287b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default ItineraryScreen;

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../../constants';
import dayjs from 'dayjs';

const { width } = Dimensions.get('window');

const ROOM_ITEM_SIZE = width / 3 - 15;

const RoomItem = ({ item, onPress }) => {
  const handleItemPress = () => {
    onPress?.(item);
  };

  const convertDate = (timestamp, dateFormat = 'DD/MM') =>
    dayjs.unix(timestamp).format(dateFormat);

  return (
    <TouchableOpacity
      style={[
        styles.roomItem,
        item.vacantClean && { backgroundColor: '#badc58' },
        item.bookedRoomInfo && { backgroundColor: '#ff7979' },
      ]}
      onPress={handleItemPress}>
      <Text style={styles.roomName}>{item.roomName}</Text>
      <Text style={styles.roomType}>{item.type}</Text>
      <Text style={styles.price}>{item.price}</Text>
      {item.bookedRoomInfo && (
        <>
          <Text style={styles.customerName}>
            {item.bookedRoomInfo.customerInfo.fullName}
          </Text>
          <Text style={styles.date}>
            {dayjs.unix(item.bookedRoomInfo.checkInDate).day()} -
            {convertDate(item.bookedRoomInfo.checkOutDate)}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const FloorItem = ({ data, style, onPressRoomItem }) => {
  const renderRoomItem = item => {
    return <RoomItem key={item.id} item={item} onPress={onPressRoomItem} />;
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.floorHead}>
        <Text style={styles.textHead}>{data.floorName}</Text>
      </View>
      <FlatList
        data={data.rooms}
        renderItem={({ item }) => renderRoomItem(item)}
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        }}
      />
    </View>
  );
};

export default FloorItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  floorHead: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHead: {
    ...FONTS.h3,
    fontSize: 18,
    textTransform: 'uppercase',
    color: 'white',
  },
  roomListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 10,
  },
  roomItem: {
    width: ROOM_ITEM_SIZE,
    height: ROOM_ITEM_SIZE,
    marginBottom: 10,
    backgroundColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius,
  },
  roomName: {
    fontSize: 22,
    lineHeight: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  roomType: {
    fontSize: 13,
    lineHeight: 13,
    color: 'white',
  },
  price: {
    fontSize: 15,
    color: 'white',
  },
  customerName: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  date: {
    position: 'absolute',
    top: -6,
    right: -10,
    paddingHorizontal: 5,
    paddingHorizontal: 3,
    fontSize: 12,
    color: 'white',
    backgroundColor: '#f9ca24',
  },
});

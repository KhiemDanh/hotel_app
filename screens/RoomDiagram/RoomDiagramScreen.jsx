import React, {
  useRef,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import FloorItem from './FloorItem';
import LayoutScreen from '../../components/LayoutScreen';
import { COLORS, icons } from '../../constants';

const width = Dimensions.get('window').width;

const SERVICE_BUTTON_SIZE = width / 3 - 15;

const RoomType = {
  VIP: 'VIP',
  TRIPLE: 'TRIPLE',
  DOUBLE: 'DOUBLE',
};

const data = [
  {
    id: 1,
    floorNumber: 1,
    floorName: 'Tầng 1',
    rooms: [
      {
        id: 100,
        roomName: '101',
        type: RoomType.VIP,
        price: 200000,
        vacantClean: true,
        bookedRoomInfo: {
          customerInfo: {
            id: 2132,
            fullName: 'Tiến Đạt',
          },
          checkInDate: 1703581015,
          checkOutDate: 170358192,
        },
      },
      {
        id: 101,
        roomName: '102',
        type: RoomType.VIP,
        vacantClean: false,
      },
      {
        id: 102,
        roomName: '103',
        type: RoomType.VIP,
        vacantClean: false,
      },
      {
        id: 103,
        roomName: '104',
        type: RoomType.VIP,
        vacantClean: true,
      },
    ],
  },
  {
    id: 2,
    floorNumber: 1,
    floorName: 'Tầng 1',
    rooms: [
      {
        id: 100,
        roomName: '101',
        type: RoomType.VIP,
      },
      {
        id: 101,
        roomName: '102',
        type: RoomType.VIP,
      },
      {
        id: 102,
        roomName: '103',
        type: RoomType.VIP,
      },
      {
        id: 103,
        roomName: '104',
        type: RoomType.VIP,
      },
      {
        id: 104,
        roomName: '105',
        type: RoomType.VIP,
      },
      {
        id: 105,
        roomName: '106',
        type: RoomType.VIP,
      },
      {
        id: 106,
        roomName: '107',
        type: RoomType.VIP,
      },
    ],
  },
  {
    id: 3,
    floorNumber: 1,
    floorName: 'Tầng 1',
    rooms: [
      {
        id: 100,
        roomName: '101',
        type: RoomType.VIP,
      },
      {
        id: 101,
        roomName: '102',
        type: RoomType.VIP,
      },
      {
        id: 102,
        roomName: '103',
        type: RoomType.VIP,
      },
      {
        id: 103,
        roomName: '104',
        type: RoomType.VIP,
      },
      {
        id: 104,
        roomName: '105',
        type: RoomType.VIP,
      },
      {
        id: 105,
        roomName: '106',
        type: RoomType.VIP,
      },
      {
        id: 106,
        roomName: '107',
        type: RoomType.VIP,
      },
    ],
  },
  {
    id: 4,
    floorNumber: 1,
    floorName: 'Tầng 1',
    rooms: [
      {
        id: 100,
        roomName: '101',
        type: RoomType.VIP,
      },
      {
        id: 101,
        roomName: '102',
        type: RoomType.VIP,
      },
      {
        id: 102,
        roomName: '103',
        type: RoomType.VIP,
      },
      {
        id: 103,
        roomName: '104',
        type: RoomType.VIP,
      },
      {
        id: 104,
        roomName: '105',
        type: RoomType.VIP,
      },
      {
        id: 105,
        roomName: '106',
        type: RoomType.VIP,
      },
      {
        id: 106,
        roomName: '107',
        type: RoomType.VIP,
      },
    ],
  },
];

const SERVICE_ICON_SIZE = 50;

const ServicesButton = ({ item }) => {
  return (
    <View style={styles.serviceItem}>
      <TouchableOpacity
        style={[
          styles.serviceButton,
          { backgroundColor: item.backgroundColor },
        ]}
        onPress={item.onPress}>
        <Image style={styles.serviceIcon} source={icons.add} />
      </TouchableOpacity>
      <Text>{item.title}</Text>
    </View>
  );
};

const RoomDiagramScreen = ({ navigation }) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['50%'], []);
  const [dataSheet, setDataSheet] = useState();
  const services = useMemo(
    () =>
      [
        {
          title: 'Đặt phòng',
          icon: icons.arrow_left,
          backgroundColor: '#e74c3c',
          onPress: handleCheckInPress,
        },
        {
          title: dataSheet?.vacantClean ? 'Phòng bẩn' : 'Phòng sạch',
          icon: icons.arrow_left,
          backgroundColor: dataSheet?.vacantClean ? COLORS.gray : '#e74c3c',
          onPress: handleCheckInPress,
        },
      ].concat(
        dataSheet?.bookedRoomInfo
          ? [
              {
                title: 'Sản phẩm',
                icon: icons.arrow_left,
                backgroundColor: '#e74c3c',
                onPress: handleCheckInPress,
              },
              {
                title: 'Dịch vụ',
                icon: icons.arrow_left,
                backgroundColor: '#e74c3c',
                onPress: handleCheckInPress,
              },
              {
                title: 'Trả phòng',
                icon: icons.arrow_left,
                backgroundColor: '#e74c3c',
                onPress: handleCheckOutPress,
              },
            ]
          : [],
      ),
    [dataSheet],
  );

  const handleCheckInPress = id => {};

  const handleCheckOutPress = id => {};

  const handleRoomItemPress = roomData => {
    setDataSheet(roomData);
    bottomSheetRef.current.expand();
  };

  const renderFloorItem = (item, itemIndex) => (
    <FloorItem
      data={item}
      key={item.id}
      onPressRoomItem={data => handleRoomItemPress(data)}
    />
  );

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={3}
        opacity={0.99}
      />
    ),
    [],
  );

  return (
    <LayoutScreen title={'Quản lý phòng'} goBack={() => navigation.goBack()}>
      <FlatList
        style={styles.container}
        data={data}
        renderItem={({ item }) => renderFloorItem(item)}
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enablePanDownToClose={true}>
        {dataSheet && (
          <View style={styles.contentContainer}>
            <Text style={styles.roomName}>{dataSheet.roomName}</Text>
            <Text style={styles.roomType}>Loại phòng : {dataSheet.type}</Text>
            {dataSheet.bookedRoomInfo && (
              <Text style={styles.customerName}>
                Khách hàng : {dataSheet.bookedRoomInfo.customerInfo.fullName}
              </Text>
            )}
            <View style={styles.services}>
              {services.map((item, index) => (
                <ServicesButton item={item} key={index} />
              ))}
            </View>
          </View>
        )}
      </BottomSheet>
    </LayoutScreen>
  );
};

export default RoomDiagramScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  overlay: {},
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  roomName: {
    fontSize: 22,
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  roomType: {
    fontSize: 15,
    fontWeight: '500',
  },
  customerName: {
    fontSize: 15,
    fontWeight: '500',
  },
  services: {
    flex: 1,
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serviceItem: {
    width: SERVICE_BUTTON_SIZE,
    height: SERVICE_BUTTON_SIZE,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceButton: {
    padding: 20,
    justifyContent: 'center',
    borderRadius: 999,
    alignItems: 'center',
  },
  serviceIcon: {
    width: SERVICE_ICON_SIZE,
    height: SERVICE_ICON_SIZE,
    tintColor: 'white',
  },
});

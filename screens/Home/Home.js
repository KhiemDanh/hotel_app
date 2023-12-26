import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { TextButton } from '../../components';
import { FONTS, SIZES, COLORS, icons } from "../../constants";
const Home = ({ navigation, route }) => {
    console.log(route.params)
    return (
        <TouchableOpacity>
            <View
                style={{
                   flexDirection: 'row', // chia thành cột
                  alignItems: 'center',
                    //  marginLeft: 10,
                    //  marginRight: 10,
                    justifyContent : 'space-beetwen',
                   alignItem: 'center',
                   flexWrap: 'wrap',
                 marginVertical: 20,
                marginHorizontal: 20
                
                }}
            >
                <View
                    style={{
                       justifyContent: 'center',
                        marginRight:10
                        
                    }} >
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#02A9F7',
                            justifyContent: "center",
                            alignItems: 'center',
                           padding:20,
                         // margin:20,
                            borderRadius: 10
                        }}
                       // onPress={() => navigation.navigate("QLTang")}
                    >
                        <Image
                            source={icons.bill}
                            style={{
                                height: 60,
                                width: 60,
                                tintColor: COLORS.white,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={{ textAlign: "center", ...FONTS.h3, fontSize: 15, marginTop: 9 }}>Hóa đơn </Text>
                </View>

                <View
                    style={{
                        marginRight:10
                       // justifyContent: 'center',
                        //marginTop: 10
                    }} >
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#4AB452',
                            padding: 20,
                            borderRadius: 10
                        }}
                       onPress={() => navigation.navigate("QLTang")}
                    >
                        <Image
                            source={icons.room}
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                height: 60,
                                width: 60,
                                tintColor: COLORS.white

                            }}
                        />
                    </TouchableOpacity>
                    <Text style={{ textAlign: "center", ...FONTS.h3, fontSize: 15, 
                    marginTop: 9 }}>Sơ đồ phòng</Text>
                   </View>
                    
                    <View
                    style={{
                        justifyContent: 'center',
                       marginTop: 10
                    }} >
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#02A9F7',
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 20,
                            borderRadius: 10
                        }}
                       // onPress={() => navigation.navigate("QLTang")}
                    >
                        <Image
                            source={icons.warehouse}
                            style={{
                                
                                height: 60,
                                width: 60,
                                tintColor: COLORS.white,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={{ textAlign: "center", ...FONTS.h3, fontSize: 15, marginTop: 9 }}>Tồn kho</Text>
                </View>
                </View>
                <View
                style={{
                   flexDirection: 'row', // chia thành cột
                  alignItems: 'center',
                    //  marginLeft: 10,
                    //  marginRight: 10,
                    justifyContent : 'space-beetwen',
                   alignItem: 'center',
                   flexWrap: 'wrap',
                 marginVertical: 20,
                marginHorizontal: 20
                }}
            >
                <View
                    style={{
                       justifyContent: 'center',
                        marginRight:10
                    }} >
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#02A9F7',
                            justifyContent: "center",
                               alignItems: 'center',
                            padding: 20,
                            borderRadius: 10
                        }}
                        onPress={() => navigation.navigate("QLTang")}
                    >
                        <Image
                            source={icons.tea}
                            style={{
                                height: 60,
                                width: 60,
                                tintColor: COLORS.white,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={{ textAlign: "center", ...FONTS.h3, fontSize: 15, marginTop: 9 }}>Sản phẩm</Text>
                </View>

                <View
                    style={{
                        marginRight:10
                       // justifyContent: 'center',
                        //marginTop: 10
                    }} >
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#02A9F7',
                            padding: 20,
                            borderRadius: 10
                        }}
                      //  onPress={() => navigation.navigate("QLTang")}
                    >
                        <Image
                            source={icons.shop}
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                height: 60,
                                width: 60,
                                tintColor: COLORS.white

                            }}
                        />
                    </TouchableOpacity>
                    <Text style={{ textAlign: "center", ...FONTS.h3, fontSize: 15, 
                    marginTop: 9 }}>Bán chạy</Text>
                   </View>
                    
                    <View
                    style={{
                        justifyContent: 'center',
                       marginTop: 10
                    }} >
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#FEC401',
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 20,
                            borderRadius: 10
                        }}
                       // onPress={() => navigation.navigate("QLTang")}
                    >
                        <Image
                            source={icons.ticket}
                            style={{
                                
                                height: 60,
                                width: 60,
                                tintColor: COLORS.white,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={{ textAlign: "center", ...FONTS.h3, fontSize: 15, marginTop: 9 }}> Đặt phòng</Text>
                </View>
                </View>

                <View
                style={{
                   flexDirection: 'row', // chia thành cột
                  alignItems: 'center',
                    //  marginLeft: 10,
                    //  marginRight: 10,
                    justifyContent : 'space-beetwen',
                   alignItem: 'center',
                   flexWrap: 'wrap',
                 marginVertical: 20,
                marginHorizontal: 20
                }}
            >
                <View
                    style={{
                       justifyContent: 'center',
                        marginRight:10
                    }} >
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#02A9F7',
                            justifyContent: "center",
                               alignItems: 'center',
                            padding: 20,
                            borderRadius: 10
                        }}
                        onPress={() => navigation.navigate("QLTang")}
                    >
                        <Image
                            source={icons.nhanvien}
                            style={{
                                height: 60,
                                width: 60,
                                tintColor: COLORS.white,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={{ textAlign: "center", ...FONTS.h3, fontSize: 15, marginTop: 9 }}>Nhân viên</Text>
                </View>

                <View
                    style={{
                        marginRight:10
                       // justifyContent: 'center',
                        //marginTop: 10
                    }} >
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#02A9F7',
                            padding: 20,
                            borderRadius: 10
                        }}
                      //  onPress={() => navigation.navigate("QLTang")}
                    >
                        <Image
                            source={icons.kh}
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                height: 60,
                                width: 60,
                                tintColor: COLORS.white

                            }}
                        />
                    </TouchableOpacity>
                    <Text style={{ textAlign: "center", ...FONTS.h3, fontSize: 15, 
                    marginTop: 9 }}>Khách hàng</Text>
                   </View>
                    
                    <View
                    style={{
                        justifyContent: 'center',
                       marginTop: 10
                    }} >
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#02A9F7',
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 20,
                            borderRadius: 10
                        }}
                       // onPress={() => navigation.navigate("QLTang")}
                    >
                        <Image
                            source={icons.dv}
                            style={{
                                
                                height: 60,
                                width: 60,
                                tintColor: COLORS.white,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={{ textAlign: "center", ...FONTS.h3, fontSize: 15, marginTop: 9 }}>Dịch vụ</Text>
                </View>
                </View>              
        </TouchableOpacity>
    )
}

export default Home;
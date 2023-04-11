import {
    View,
    ScrollView,
    SafeAreaView,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    Pressable,
    TouchableOpacity,
} from "react-native"
import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import { onChange } from "react-native-reanimated";
import { FlatList } from "react-native";
import MyProductItem from "../common/MyProductItem";

const images = [

    'https://loveincorporated.blob.core.windows.net/contentimages/gallery/6a985aaa-8a95-4382-97a9-91cdf96f43d3-Moraine_Lake_Dennis_Frates_Alamy_Stock_Photo.jpg',
    'https://www.eventstodayz.com/wp-content/uploads/2017/03/winter-wallpapers-2017.jpg',
    'https://images.ctfassets.net/wqkd101r9z5s/6F7zAoiaaiKCVEVlcgtvWs/99a68388fe179c5effa9f7fc6a37bbb9/Paris-1.jpg?w=1365&q=95'

]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const DetailProduct = () => {

    const [imgActive, setImgActive] = useState(0);
    const onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setImgActive(slide);
            }
        }
    }
    const dataimg = [
        {
            name: 'Giày Nam Siêu Đẹp',
            price: '300.000đ',
            gender: 'male',
            img: require('../imgs/shoes1.jpg'),
            sale: require('../Screen/image/coupon.png')
        },
        {
            name: 'Shoes 3',
            price: '350.000đ',
            gender: 'male',
            img: require('../imgs/shoes3.jpg'),
            sale: require('../Screen/image/coupon.png')
        },
        {
            name: 'Shoes 3',
            price: '350.000đ',
            gender: 'male',
            img: require('../imgs/shoes3.jpg'),
            sale: require('../Screen/image/coupon.png')
        },

    ]
    return (
        <View>
            <ScrollView>
                <SafeAreaView>
                    <View>
                        <View style={{
                            width: "100%",
                            height: 'auto',
                            borderRadius: 5,
                            elevation: 5,
                            backgroundColor: 'white',
                            marginTop: 3,
                        }}>
                            <Text style={{
                                marginLeft: 5,
                                fontWeight: 'bold',
                                fontSize: 15,
                            }}>Tên SP: Áo Hoodie nam, lót lông thú,</Text>
                            <Text style={{ color: 'orange', fontSize: 20, marginBottom: 5 }}>*****(390 đánh giá)</Text>
                        </View>
                        <ScrollView
                            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            horizontal
                            style={styles.wrap}
                        >
                            {images.map((e, index) =>
                                <Image key={e}
                                    style={styles.wrap}
                                    source={{ uri: e }}
                                />
                            )}

                        </ScrollView>
                        <View style={styles.wrapDot}>
                            {
                                images.map((e, index) =>
                                    <Text
                                        key={e}
                                        style={imgActive == index ? styles.dotActive : styles.dot}
                                    >●</Text>
                                )
                            }
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                        <Text style={{
                            height: 45,
                            width: 'auto',
                            fontWeight: 'bold',
                            color: 'red',
                            fontSize: 20,
                            marginRight: 10,
                        }}>599,000₫</Text>
                        <Text style={{
                            height: 45,
                            width: 'auto',
                            fontWeight: 'bold',
                            color: 'grey',
                            fontSize: 20,
                            textDecorationLine: 'line-through'
                        }}>1,299,000₫</Text>
                    </View>

                    <View>
                        <Text style={{
                            fontWeight: 'bold',
                            borderWidth: 1,
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            backgroundColor: 'black',
                            color: 'white',
                            padding: 12,
                            borderRadius: 4,
                        }}>Miễn Phí vận chuyển toàn quốc</Text>
                    </View>

                    <View>
                        <Text style={{
                            fontWeight: 'bold',
                            borderColor: 'grey',
                            backgroundColor: 'grey',
                            padding: 10,
                            marginTop: 30,
                            borderRadius: 4,
                        }}>Size: </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ marginTop: 10, marginLeft: 20, borderWidth: 1, borderRadius: 5, padding: 7, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ textAlign: 'center' }}>Size: M</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginTop: 10, marginLeft: 20, borderWidth: 1, borderRadius: 5, padding: 7, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ textAlign: 'center' }}>Size: L</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginTop: 10, marginLeft: 20, borderWidth: 1, borderRadius: 5, padding: 7, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ textAlign: 'center' }}>Size: XL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginTop: 10, marginLeft: 20, borderWidth: 1, borderRadius: 5, padding: 7, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ textAlign: 'center' }}>Size: XLL</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <Text style={{ fontWeight: 'bold', borderWidth: 1, borderColor: 'green', height: 40, width: 120, alignSelf: 'center', textAlign: 'center', marginTop: 30, marginLeft: -120 }}>Chính sách bảo hành</Text>
                        <View style={{ fontWeight: 'bold', borderWidth: 1, borderColor: 'red', width: 'auto', height: 'auto', alignSelf: 'center', marginTop: -1, }}>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <Text style={{ fontWeight: 'bold' }}>HOÀN TIỀN: </Text>
                                <Text><Text>Áp dụng cho sản phẩm lỗi và không lỗi.</Text></Text>
                            </View>

                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ marginTop: 10 }}>• Hoàn trả hàng trong vòng 7 ngày</Text>
                                <Text>• Tháng đầu tiên kể từ ngày mua: phí 20% giá trị hóa đơn.</Text>
                                <Text>•Tháng thứ 2 đến tháng thứ 12: phí 10% giá trị hóa đơn/tháng.</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
                        <TouchableOpacity style={{ marginTop: 10, marginRight: 20, borderWidth: 1, borderRadius: 7, padding: 10, width: 150, flexDirection: "row", justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
                            <Text style={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold', color: 'white' }}>Liên Hệ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 10, marginLeft: 20, borderColor: 'orange', borderRadius: 7, padding: 10, width: 150, flexDirection: "row", justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', backgroundColor: 'orange', }}>
                            <Text style={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold', color: 'white' }}>Giỏ Hàng</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={{
                            fontWeight: 'bold',
                            borderWidth: 1,
                            textTransform: 'uppercase',
                            backgroundColor: 'white',
                            color: 'black',
                            padding: 12,
                            borderRadius: 4,
                            marginTop: 10
                        }}>Thông tin nhà sản xuất</Text>

                        <TouchableOpacity>
                            <Text style={{
                                fontWeight: 'bold',
                                borderWidth: 1,
                                textAlign: 'center',
                                backgroundColor: 'black',
                                color: 'white',
                                padding: 12,
                                borderRadius: 4,
                                margin: 10
                            }}>Xem chi tiết sản phẩm</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        width: '100%',
                        height: 300,
                        borderRadius: 10,
                        elevation: 5,
                        height: 'auto',
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            borderWidth: 1,
                            textTransform: 'uppercase',
                            backgroundColor: 'black',
                            padding: 8,
                            borderColor: 'black',
                            color: 'white',
                            margin: 10,
                            borderRadius: 4,
                        }}>Sản phẩm khác: </Text>
                        <View>
                            <FlatList
                                data={dataimg}
                                renderItem={({ item }) =>
                                    <Image source={item.img} style={{
                                        height: 90,
                                        width: 100,
                                        margin: 5,
                                        marginLeft: 10,
                                    }} />
                                }
                            />
                        </View>
                    </View>

                    <View style={{
                        width: '100%',
                        height: 300,
                        borderRadius: 10,
                        elevation: 5,
                        height: 'auto',
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            borderWidth: 1,
                            textTransform: 'uppercase',
                            backgroundColor: 'white',
                            color: 'black',
                            textAlign: 'center',
                            padding: 12,
                            borderRadius: 4,
                            marginTop: 15
                        }}>Xem đánh giá & Review sản phẩm</Text>

                        <Text>Mặc dù Kia Seltos đã ra mắt cách đây hơn 1 tháng nhưng đến nay, trang chủ fanpage Kia Motors Việt Nam mới công bố "chính thức ra mắt và tiến hành bàn giao xe" từ ngày 9/9 tới đây. Nhiều khả năng, đây là sự kiện ra mắt xe tổ chức tại đại lý dành riêng cho khách hàng, đồng thời là sự kiện bàn giao xe cho những khách hàng đặt đầu tiên.

                            Hiện tại, những chiếc Kia Seltos xuất xưởng đầu tiên đã được đưa về đại lý trên toàn quốc. Hầu hết xe thuộc các bản 1.4 Premium và 1.4 Luxury. Trong đợt này, những khách đặt mua bản 1.4 Deluxe và 1.6 Premium sẽ chưa có xe mà có thể phải đợi sang tháng 10. Trong thời gian gần đây, khách hàng cũng không thể đặt cọc được bản 1.6 Premium nữa. Phiên bản này được cho là thiếu nguồn cung và chưa hẹn ngày trở lại.</Text>
                    </View>
                </SafeAreaView>
            </ScrollView>
            
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrap: {

        width: WIDTH,
        height: HEIGHT * 0.5,
        borderRadius: 15
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    }, dotActive: {
        margin: 3,
        color: 'white',
    },
    dot: {
        margin: 3,
        color: 'grey'
    }
});
export default DetailProduct;

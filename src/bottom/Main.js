import { Text, View, Image, FlatList, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import { products } from "../Screen/Product";
import MyProductItem from "../common/MyProductItem";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, addToWishlist } from "../redux/action/Actions";

const Main = () => {

    const dispatch = useDispatch();
    const [categoryList, setCategoryList] = useState([]);
    const [tshirtList, setTshirtList] = useState([]);
    const [jeansList, setJeansList] = useState([]);
    const [shoesList, setShoesList] = useState([]);
    const [jacketList, setJacketList] = useState([]);
    const [slipperList, setSlipperList] = useState([]);

    useEffect(() => {
        console.log(products);
        let tempCategory = [];
        products.category.map(item => {
            tempCategory.push(item);
        });
        setCategoryList(tempCategory);
        setTshirtList(products.category[0].data);
        setJeansList(products.category[1].data);
        setShoesList(products.category[2].data);
        setJacketList(products.category[3].data);
        setSlipperList(products.category[4].data);
    }, []);

    const items = useSelector(state => state);
    console.log(items);
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Header
                    title={'Home'} />
                <Image source={require('../imgs/banner.png')}
                    style={{
                        width: '94%',
                        height: 200,
                        borderRadius: 10,
                        alignSelf: 'center',
                        marginTop: 10,
                    }}
                />
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        data={categoryList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={{
                                    padding: 10,
                                    borderWidth: 1,
                                    marginLeft: 20,
                                    borderRadius: 20,
                                }}>
                                    <Text style={{ color: '#000' }}>{item.category}</Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
                <Text style={{
                    marginTop: 20,
                    marginLeft: 20,
                    color: '#000',
                    fontSize: 16,
                    fontWeight: '600',
                }}>
                    New T Shirts
                </Text>
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        data={tshirtList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <MyProductItem item={item}
                                    onAddWishlist={x => {
                                        dispatch(addToWishlist(x));
                                    }}
                                    onAddToCart={x => {
                                        dispatch(addItemToCart(item));
                                    }} />
                            );
                        }}
                    />
                </View>

                <Text style={{
                    marginTop: 20,
                    marginLeft: 20,
                    color: '#000',
                    fontSize: 16,
                    fontWeight: '600',
                }}>
                    New Jeans
                </Text>
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        data={jeansList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <MyProductItem item={item}
                                    onAddWishlist={x => {
                                        dispatch(addToWishlist(x));
                                    }}
                                    onAddToCart={x => {
                                        dispatch(addItemToCart(item));
                                    }} />
                            );
                        }}
                    />
                </View>
                <Text style={{
                    marginTop: 20,
                    marginLeft: 20,
                    color: '#000',
                    fontSize: 16,
                    fontWeight: '600',
                }}>
                    New Shoes
                </Text>
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        data={shoesList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <MyProductItem item={item}
                                    onAddWishlist={x => {
                                        dispatch(addToWishlist(x));
                                    }}
                                    onAddToCart={x => {
                                        dispatch(addItemToCart(item));
                                    }} />
                            );
                        }}
                    />
                </View>
                <Text style={{
                    marginTop: 20,
                    marginLeft: 20,
                    color: '#000',
                    fontSize: 16,
                    fontWeight: '600',
                }}>
                    New Jackets
                </Text>
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        data={jacketList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <MyProductItem item={item}
                                    onAddWishlist={x => {
                                        dispatch(addToWishlist(x));
                                    }}
                                    onAddToCart={x => {
                                        dispatch(addItemToCart(item));
                                    }} />
                            );
                        }}
                    />
                </View>

                <Text style={{
                    marginTop: 20,
                    marginLeft: 20,
                    color: '#000',
                    fontSize: 16,
                    fontWeight: '600',
                }}>
                    New Slipper
                </Text>
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        data={slipperList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <MyProductItem item={item}
                                    onAddWishlist={x => {
                                        dispatch(addToWishlist(x));
                                    }}
                                    onAddToCart={x => {
                                        dispatch(addItemToCart(x));
                                    }} />
                            );
                        }}
                    />
                </View>

            </View>
        </ScrollView>
    )
}
export default Main;
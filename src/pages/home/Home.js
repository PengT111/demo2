import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View, ScrollView, ScrollList, FlatList, TextInput, Image,Platform, StatusBar, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

export default class Home extends Component{

    constructor(props){
        super(props)
    }

    // sectionItem=({item})=>()
    render(){
        return(
            <ScrollView style={styles.container} 
                keyboardDismissMode={'on-drag'}
                keyboardShouldPersistTaps={'never'}
            >
                <StatusBar
                    translucent={true}
                    backgroundColor={'transparent'}
                    barStyle={'dark-content'}
                />
                <View style={styles.header}>
                    <View style={styles.inputBox}>
                        <Image style={{width:24,height:24,marginLeft:16}} source={require('../../images/nav_ico_search.png')}/>
                        <TextInput 
                            style={styles.input}
                            placeholder='你想住在哪？'
                            placeholderTextColor={'#999999'}
                            underlineColorAndroid="transparent"
                        ></TextInput>
                    </View>
                    <Image style={{width:12,height:15}} source={require('../../images/nav_icon_locate.png')}/>
                    <Text style={{fontSize:14,color:'#333'}}>临沂</Text>
                </View>

                <View style={styles.section}>
                    <TouchableOpacity style={styles.itemBox} activeOpacity={0.6}>
                        <View style={styles.item}>
                            <Image style={styles.itemImg} source={require('../../images/home_ico_zuf.png')} />
                            <Text style={styles.itemTitle}>二手房</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemBox} activeOpacity={0.6}>
                        <View style={styles.item}>
                            <Image style={styles.itemImg} source={require('../../images/home_ico_newhouse.png')} />
                            <Text style={styles.itemTitle}>租房</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemBox} activeOpacity={0.6}>
                        <View style={styles.item}>
                            <Image style={styles.itemImg} source={require('../../images/home_ico_zjkp.png')} />
                            <Text style={styles.itemTitle}>新房</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemBox} activeOpacity={0.6}>
                        <View style={styles.item}>
                            <Image style={styles.itemImg} source={require('../../images/home_ico_buy.png')} />
                            <Text style={styles.itemTitle}>最近开盘</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemBox} activeOpacity={0.6}>
                        <View style={styles.item}>
                            <Image style={styles.itemImg} source={require('../../images/home_ico_rent.png')} />
                            <Text style={styles.itemTitle}>我要买房</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemBox} activeOpacity={0.6}>
                        <View style={styles.item}>
                            <Image style={styles.itemImg} source={require('../../images/home_ico_gujia.png')} />
                            <Text style={styles.itemTitle}>我要租房</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemBox} activeOpacity={0.6}>
                        <View style={styles.item}>
                            <Image style={styles.itemImg} source={require('../../images/home_ico_jisuan.png')} />
                            <Text style={styles.itemTitle}>房屋估价</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemBox} activeOpacity={0.6}>
                        <View style={styles.item}>
                            <Image style={styles.itemImg} source={require('../../images/home_ico_ershou.png')} />
                            <Text style={styles.itemTitle}>房贷计算</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <ImageBackground style={styles.itemBg} source={require('../../images/home_ico_zdm.png')}>
                        <Text style={styles.itemBgTitle}>本周值得买</Text>
                        <Text style={styles.itemBgCont}>总价50万</Text>
                    </ImageBackground>
                    <ImageBackground style={styles.itemBg} source={require('../../images/home_ico_ppz.png')}>
                        <Text style={styles.itemBgTitle}>超级品牌周</Text>
                        <Text style={styles.itemBgCont}>首付30万</Text>
                    </ImageBackground>
                </View>

                <Text style={styles.title}>房价指数</Text>
                <View style={styles.section}>
                    <View style={[styles.fjzsItem,{borderRightWidth:1,borderRightColor:'#C3CCE4'}]}>
                        <Text style={{fontSize:24,color:'#333',fontWeight:'bold',marginVertical:6}}>7000</Text>
                        <Text style={{fontSize:12,color:'#C3CCE4'}}>全市均价(元/平)</Text>
                    </View>
                    <View style={styles.fjzsItem}>
                        <Text style={{fontSize:24,color:'#333',fontWeight:'bold',marginVertical:6}}>99</Text>
                        <Text style={{fontSize:12,color:'#C3CCE4'}}>昨日成交(套)</Text>
                    </View>
                </View>

                <Text style={styles.title}>热门主题</Text>
                <ScrollView style={styles.swiper} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={{marginLeft:10}} activeOpacity={0.6}>
                        <View style={styles.swiperItem}>
                            <Image style={styles.swiperImg} source={require('../../images/home_ico_ppz.png')} />
                            <Text style={styles.swiperText}>房东急售  低至85万</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:10}} activeOpacity={0.6}>
                        <View style={styles.swiperItem}>
                            <Image style={styles.swiperImg} source={require('../../images/home_ico_ppz.png')} />
                            <Text style={styles.swiperText}>房东急售  低至85万</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:10}} activeOpacity={0.6}>
                        <View style={styles.swiperItem}>
                            <Image style={styles.swiperImg} source={require('../../images/home_ico_ppz.png')} />
                            <Text style={styles.swiperText}>房东急售  低至85万</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>

                <View style={styles.fyzsTitle}>
                    <Text style={{fontSize:16,color:'#333',fontWeight:'bold',marginLeft:15}}>房源展示</Text>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <TouchableOpacity style={{marginRight:15}} onPress={()=>{}} activeOpacity={0.6}>
                            <Text style={false?styles.norTitle:styles.activeTitle}>二手房</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginRight:15}} onPress={()=>{}} activeOpacity={0.6}>
                            <Text style={true?styles.norTitle:styles.activeTitle}>新房</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginRight:15}} onPress={()=>{}} activeOpacity={0.6}>
                            <Text style={true?styles.norTitle:styles.activeTitle}>租房</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    activeTitle:{
        fontSize:12,
        color:'#7B9FFF'
    },
    norTitle:{
        fontSize:12,
        color:'#9C9FA1'
    },
    fyzsTitle:{
        width:'100%',
        marginTop:28,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    swiperText:{
        fontSize:14,
        color:'#333'
    },
    swiperImg:{
        width:'100%',
        height:100,
        borderRadius:5
    },
    swiperItem:{
        width:168,
        height:128,
        display:'flex',
        alignItems:'flex-start',
        justifyContent:'space-between',
    },
    swiper:{
        width:'100%',
        height:128,
    },
    fjzsItem:{
        flex:1,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:16,
        color:'#333',
        fontWeight:'bold',
        marginTop:28,
        marginLeft:15,
        marginBottom:15,
    },
    itemBgCont:{
        fontSize:12,
        color:'#C3CCE4',
        marginLeft:12,
        marginBottom:12,
    },
    itemBgTitle:{
        fontSize:16,
        color:'#333',
        fontWeight:'bold',
        marginTop:24,
        marginLeft:12,
    },
    itemBg:{
        width:168,
        height:100,
        borderRadius:5,
        overflow:'hidden',
        display:'flex',
        justifyContent:'space-between',
        marginTop:28,
    },
    itemTitle:{
        fontSize:14,
        color:'#333'
    },
    itemImg:{
        width:48,
        height:48,
    },
    item:{
        flex:1,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
    },
    itemBox:{
        width:'25%',
        height:76,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:20,
    },
    section:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        paddingHorizontal:15,
    },
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    header:{
        width:'100%',
        height:45,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:5,
        justifyContent: 'space-between',
        marginTop:Platform.OS==='android'?StatusBar.currentHeight :29
    },
    inputBox:{
        width:272,
        height:'100%',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#DDE2EF',
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    input:{
        padding:0,
        flex:1
    }
})
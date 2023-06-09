import { View, Text, StyleSheet, Image, ScrollView, FlatList, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getNews } from '../../services/NewsService'
import Trending from './Trending'
import Latest from '../../components/NewsItem'

const Home = (props) => {
    useEffect(() => {
        getNewsData();
    }, [])

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    const renderItem = (value) => {
        const { item: news } = value;
        return (
            <Latest
                onPress={() => props.navigation.navigate('Detail', { id: news._id, createdBy: news.createdBy })}
                thumb={{ uri: news.image }}
                title={news.title}
                avatar={{ uri: news.createdBy.avatar }}
                author={news.createdBy.name}
                time={news.createdAt}
            />
        )
    }
    
    
    // res.data.forEach(async news => {
    //     await deleteNews(news._id);
    // });

    const getNewsData = async () => {
        setLoading(true);
        const res = await getNews();
        if (res?.statusCode === 200) {
            setNews(res.data);

        }
        setLoading(false);
    }

    return (
        <View style={myStyle.body}>
            <View style={myStyle.header}>
                <Image source={require('../../assets/images/kabar.png')} />
                <View style={myStyle.notifi_icon}>
                    <Image source={require('../../assets/images/notifi_icon.png')} />
                </View>
            </View>
            <Pressable onPress={() => props.navigation.navigate('Search')}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderRadius: 6, borderColor: '#4E4B66', padding: 10 }}>
                    <Image source={require('../../assets/images/search_icon.png')} />
                    <Text style={{ marginLeft: 8, flex: 1 }}>Search</Text>
                    <Image source={require('../../assets/images/search2_icon.png')} />
                </View>
            </Pressable>
            <View style={myStyle.trendingContainer}>
                <View style={myStyle.headerForTrending} >
                    <Text style={myStyle.fontTrending}>Trending</Text>
                    <Text style={myStyle.fontSeeall}>See all</Text>
                </View>
                <Trending
                    title="Russian warship: Moskva sinks in Black Sea"
                    thumb={require('../../assets/images/trending1.png')}
                    time="4h ago"
                    author="BBC News"
                    avatar={require('../../assets/images/logoBBC.png')}
                    country="Europe"
                />
            </View>

            <View style={myStyle.latestContainer}>
                <View style={myStyle.headerForTrending}>
                    <Text style={myStyle.fontTrending}>Latest</Text>
                    <Text style={myStyle.fontSeeall}>See all</Text>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={myStyle.tabLatest}>
                    <Text style={myStyle.itemTabLatest}>All</Text>
                    <Text style={myStyle.itemTabLatest}>Sports</Text>
                    <Text style={myStyle.itemTabLatest}>Politics</Text>
                    <Text style={myStyle.itemTabLatest}>Business</Text>
                    <Text style={myStyle.itemTabLatest}>Health</Text>
                    <Text style={myStyle.itemTabLatest}>Travel</Text>
                    <Text style={myStyle.itemTabLatest}>Science</Text>
                </ScrollView>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={news}
                    refreshing={loading}
                    onRefresh={getNewsData}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => item._id} />
            </View>
        </View>
    )
}

export default Home


//css
const myStyle = StyleSheet.create({
    //latest


    listLatest: {
        // backgroundColor:"red",
        height: 120,
    },

    itemTabLatest: {
        fontFamily: 'Arial',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
        marginBottom: 16,
        paddingRight: 15,
        // backgroundColor:'red'
    },

    tabLatest: {
        height: 40,
        marginTop: 16,
    },

    latestContainer: {

    },

    fontSeeall: {
        fontFamily: 'Arial',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },

    fontTrending: {
        fontFamily: 'Arial',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
    },

    headerForTrending: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:'red'
    },
    trendingContainer: {
        marginTop: 16,
        marginBottom: 16,
        // backgroundColor:'green',
    },

    notifi_icon: {
        backgroundColor: '#FFFFFF',
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 6,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 56,
        // backgroundColor:'red'
    },
    body: {
        padding: 24,
        // backgroundColor:'red',
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100%',
    }
})

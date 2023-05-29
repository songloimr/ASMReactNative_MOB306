import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const Detail = () => {
    return (
        <View style={detailStyles.body}>
            <View style={detailStyles.toolbar}>
                <Image style={detailStyles.backIcon} source={require('../../../media/backpress.png')}></Image>
                <View style={detailStyles.shareContainer}>
                    <Image style={detailStyles.shareIcon} source={require('../../../media/link_icon.png')}></Image>
                    <Image style={detailStyles.backIcon} source={require('../../../media/dot_icon_vertical.png')}></Image>
                </View>
            </View>
            <View style={detailStyles.followContainer}>
                <View style={detailStyles.followTitleContainer}>
                    <Image style={detailStyles.bbcnewIcon} source={require('../../../media/bbc_logo.png')}></Image>
                    <View style={detailStyles.followTitle}>
                        <Text style={detailStyles.followTitleBBC}>BBC News</Text>
                        <Text style={detailStyles.followTitleTime}>14m ago</Text>
                    </View>
                </View>
                <Pressable style={detailStyles.buttonFollowing}>
                    <Text style={detailStyles.buttonFollowingLabel}>Following</Text>
                </Pressable>
            </View >
            <Image style={detailStyles.imgDetail} source={require('../../../media/ukraine_president.png')}></Image>
            <View style={detailStyles.titleContainer}>
                <Text style={detailStyles.titleEurope}>Europe</Text>
                <Text style={detailStyles.titleUkraine}>Ukraine's President Zelensky to BBC: Blood money being paid for Russian oil</Text>
            </View>
            <Text style={detailStyles.content}>Ukrainian President Volodymyr Zelensky has accused European countries that continue to buy Russian oil of "earning their money in other people's blood". 
                {'\n\n'}
                In an interview with the BBC, President Zelensky singled out Germany and Hungary, accusing them of blocking efforts to embargo energy sales, from which Russia stands to make up to £250bn ($326bn) this year.
            </Text>
            <View style={detailStyles.bottomContainer}>
                <View style={detailStyles.likeContainer}>
                    <View style={detailStyles.like}>
                        <Image style={detailStyles.backIcon} source={require('../../../media/heart_icon.png')}></Image>
                        <Text style={detailStyles.likeNumber}>24.5k</Text>
                    </View>
                    <View style={detailStyles.like}>
                        <Image style={detailStyles.backIcon} source={require('../../../media/comment_icon.png')}></Image>
                        <Text style={detailStyles.likeNumber}>1k</Text>
                    </View>
                </View>
                <View style={detailStyles.like}>
                    <Image style={detailStyles.backIcon} source={require('../../../media/bookmark_icon.png')}></Image>
                </View>
            </View>
        </View>
    )
}

export default Detail

const detailStyles = StyleSheet.create({
    content: {
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#4E4B66'
    },
    likeNumber: {
        marginLeft: 5,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#050505'
    },
    like: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 8
    },
    likeContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        
    },
    titleUkraine: {
        fontWeight: '400',
        lineHeight: 36,
        fontSize: 24,
        letterSpacing: 0.12,
        color: '#000000'
    },
    titleEurope: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66'
    },
    titleContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    imgDetail: {
        marginTop: 20,
        width: '100%'
    },
    buttonFollowingLabel: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#FFFFFF'
    },
    buttonFollowing: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 24,
        height: 34,
        backgroundColor: '#1877F2',
        borderRadius: 6,
    },
    followTitleTime: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66'
    },
    followTitleBBC: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000'
    },
    followTitle: {
        marginLeft: 5,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    followTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bbcnewIcon: {
    },
    followContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    shareIcon: {
        marginRight: 10,
        width: 24,
        height: 24
    },
    shareContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    backIcon: {
        width: 24,
        height: 24
    },
    toolbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    body: {
        padding: 24,
        backgroundColor: 'while',
        width: '100%',
        height: '100%'
    },
})
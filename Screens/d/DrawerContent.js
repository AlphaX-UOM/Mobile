import * as React from 'react';
import { View,Button,StyleSheet } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import{ Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


 function DrawerContent(props){
    return(
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
              <View style={styles.drawerContent}>
                  <View style={styles.userInfoSection}>
                     <View style={{flexDirection:'row',marginTop:15}}>
                         <Avatar.Image
                         source={{
                             uri:'https://www.theglobeandmail.com/resizer/ZTY0dRYn2x4dgSkwSPG-nyIjflU=/620x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/5HSZVXDII5BRRHH4S6KE4WZ7RE.jpg'
                         }}
                         size={50}
                         />
                         </View>
                         <View style={{marginLeft:15,flexDirection:'column'}}>
                             <Title style={styles.title}>DonaldTrump</Title>
                             <Caption style={styles.caption}>@Ttecs</Caption>
                         </View>
                         <View style={styles.row}>
                              <View style={styles.section}>
                                  <Paragraph style={styles.paragraph,styles.caption}>80</Paragraph>
                                  <Caption style={styles.caption}>Follow</Caption>
                              </View>
                              <View>
                                  <Paragraph style={styles.paragraph,styles.caption}>100</Paragraph>
                                  <Caption style={styles.caption}>Follow me</Caption>
                              </View>
                         </View>
                  </View>
                  <Drawer.Section style={styles.DrawerSection}>
                  <DrawerItem 
                  label="Home"
                  onPress={()=>{props.navigation.navigate('Home')}}
                  icon={(color,size)=>(
                      <Icon
                      name="home-outline"
                      color={'black'}
                      size={30}
                      />
                  )}
                />
                  <DrawerItem 
                  label="account"
                  onPress={()=>{props.navigation.navigate('Notifications')}}
                  icon={(color,size)=>(
                      <Icon
                      name="account-outline"
                      color={'black'}
                      size={30}
                      />
                  )}
                />
                 <DrawerItem 
                  label="bookmarks"
                  onPress={()=>{}}
                  icon={(color,size)=>(
                      <Icon
                      name="bookmark-outline"
                      color={'black'}
                      size={30}
                      />
                  )}
                />
                  </Drawer.Section>
                  
              </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                  label="Sign out"
                  onPress={()=>{}}
                  icon={(color,size)=>(
                      <Icon
                      name="exit-to-app"
                      color={'red'}
                      size={30}
                      />
                  )}
                />

            </Drawer.Section>
        </View>
    )
}

export default DrawerContent;

const styles = StyleSheet.create({
    drawerContent:{
        flex: 1,
    },
    userInfoSection:{
        paddingLeft:20,
    },
    titles:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold',
    },
    caption:{
        fontSize:14,
        lineHeight:14,

    },
    row:{
        marginTop:20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight:15
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    DrawerSection:{
        marginTop:15
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderWidth:1
    },
    preference:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16
    }
})
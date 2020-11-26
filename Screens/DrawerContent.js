import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import {
    useTheme,
    
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import AuthContext from '../components/context'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



 function DrawerContent(props) {
     const {signOut}= React.useContext(AuthContext);

    const paperTheme = useTheme();

   
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{
                            flexDirection:'row',
                            marginTop: 18,
                            justifyContent: "space-around",
                            alignItems: "center",
                            
                            }}>
                            <Image 
                                source={require('../assets/logo.png')}
                                borderWidth={2} 
                                resizeMode= 'contain'
                            />
                           
                        </View>

                        
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={'black'}
                                size={30}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('HomeDrawer')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={'black'}
                                size={30}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('userDetails')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={'black'}
                                size={30}
                                />
                            )}
                            label="Reservations"
                            onPress={() => {props.navigation.navigate('reservation')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={'black'}
                                size={30}
                                />
                            )}
                            label="Settings"
                            
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={'black'}
                                size={30}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                   
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={30}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}
export default DrawerContent;
const styles = StyleSheet.create({
    drawerContent: {
      flex: 0.5,
    },
    userInfoSection: {
      paddingLeft: 5,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

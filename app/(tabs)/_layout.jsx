import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";
import '../../global.css'
export default function TabLayout() {
    return(
        <Tabs>
            <Tabs.Screen name="index" 
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color}/>
                }}
            />
            <Tabs.Screen name="about" 
                options={{
                    title: 'About',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color}/>
                }}
            />
        </Tabs>
    )
}
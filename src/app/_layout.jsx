import "../global.css";
import { Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Home, Search, Bookmark, User } from 'lucide-react-native';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex flex-1 bg-white">
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: 'white' },
          }}
        />
        <Footer />
      </View>
    </GestureHandlerRootView>
  );
}

function Footer() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="bg-white border-t border-gray-50 pb-5 pt-4 shadow-2xl shadow-black/10"
      style={{ paddingBottom: bottom > 0 ? bottom : 15 }}
    >
      <View className="px-10 flex flex-row justify-between items-center">
        <FooterItem icon={Home} label="Home" active />
        <FooterItem icon={Search} label="Explore" />
        <FooterItem icon={Bookmark} label="Saved" />
        <FooterItem icon={User} label="Profile" />
      </View>
    </View>
  );
}

function FooterItem({ icon: Icon, label, active }) {
  return (
    <TouchableOpacity className="items-center px-2 shadow-sm">
      <View className={active ? 'bg-blue-50 p-2 rounded-2xl' : 'p-2 transparent'}>
        <Icon size={20} color={active ? '#2563eb' : '#9ca3af'} strokeWidth={active ? 3 : 2} />
      </View>
      <Text className={`text-[8px] font-black uppercase tracking-widest mt-1.5 ${active ? 'text-blue-600' : 'text-gray-300'}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

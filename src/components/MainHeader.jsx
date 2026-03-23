import { View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Bell } from "lucide-react-native";

export function MainHeader() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: Math.max(insets.top, 10),
        paddingBottom: 15,
      }}
      className="bg-white px-6 flex-row items-center justify-between border-b border-gray-50/50"
    >
   
      <View className="flex-row items-center mt-3">
        <View className="bg-blue-600 w-9 h-9 rounded-xl items-center justify-center mr-3 shadow-xl shadow-blue-500/10">
          <Text className="text-white font-black text-xl italic">W</Text>
        </View>

        <View>
          <Text className="text-lg font-black text-gray-900 tracking-tighter">
            WayGood
          </Text>
          <Text className="text-[8px] font-black text-blue-600 uppercase tracking-[2px] mt-[-2px]">
            Education
          </Text>
        </View>
      </View>

      
      <TouchableOpacity className="mt-3 p-2 bg-gray-50 rounded-xl border border-gray-100">
        <Bell size={18} color="#1f2937" strokeWidth={2.5} />
      </TouchableOpacity>
    </View>
  );
}
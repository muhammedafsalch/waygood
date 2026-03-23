import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  ChevronLeft,
  MapPin,
  Star,
  DollarSign,
  Clock,
  Users,
  Heart,
} from "lucide-react-native";

import { programs } from "../../data/programs";

const { width } = Dimensions.get("window");

export default function Details() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const program = programs.find((p) => p.id === params.id);

  // console.log(program);
  if (!program) return null;

  return (
    <View className="flex-1 bg-white">
      
      {/* Header */}
      <View
        style={{ paddingTop: insets.top + 10 }}
        className="absolute top-0 left-0 right-0 z-50 px-6 flex-row items-center justify-between"
      >
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 items-center justify-center rounded-full bg-white/90 shadow-sm"
        >
          <ChevronLeft size={22} color="#111827" />
        </TouchableOpacity>

        <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full bg-white/90 shadow-sm">
          <Heart size={20} color="#111827" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        
        {/* Hero Image */}
        <Image
          source={{ uri: program.image }}
          className="w-full h-[400px] bg-gray-100"
          style={{
            borderBottomLeftRadius: 32,
            borderBottomRightRadius: 32,
          }}
        />

        <View className="px-6 mt-8">
          
          {/* Top Badges */}
          <View className="flex-row items-center space-x-2 mb-4">
            <View className="bg-blue-50 px-3 py-1 rounded-lg">
              <Text className="text-blue-600 text-[11px] font-semibold uppercase tracking-wider">
                {program.country}
              </Text>
            </View>

            <View className="flex-row items-center bg-amber-50 px-3 py-1 rounded-lg">
              <Star size={12} color="#d97706" fill="#d97706" />
              <Text className="text-amber-700 font-bold text-[11px] ml-1">
                {program.ranking}
              </Text>
            </View>
          </View>

          <Text className="text-3xl font-bold text-gray-900 leading-tight">
            {program.university}
          </Text>

          <View className="flex-row items-center mt-2 mb-8">
            <MapPin size={14} color="#6b7280" />
            <Text className="text-gray-500 text-sm ml-1 font-medium">
              {program.location}
            </Text>
          </View>

          <View className="flex-row justify-between py-6 bg-gray-50 rounded-3xl px-2">
            <InfoItem label="Students" value={program.students} icon={Users} />
            <InfoItem label="Tuition" value={program.fee} icon={DollarSign} />
            <InfoItem label="Duration" value={program.duration} icon={Clock} />
          </View>

          {/* About Section */}
          <View className="mt-10 mb-20">
            <Text className="text-lg font-bold text-gray-900 mb-3">
              About the Program
            </Text>

            <Text className="text-gray-600 text-[15px] leading-6">
              {program.details}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{ paddingBottom: insets.bottom + 16 }}
        className="px-6 pt-4 bg-white border-t border-gray-100 flex-row items-center space-x-4"
      >
        <View className="flex-1">
          <Text className="text-gray-400 text-xs font-medium">
            Starting from
          </Text>
          <Text className="text-gray-900 text-lg font-bold">
            {program.fee}
          </Text>
        </View>

        <TouchableOpacity className="bg-blue-600 px-8 py-4 rounded-2xl shadow-md active:opacity-90">
          <Text className="text-white font-bold text-base">
            Apply Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function InfoItem({ label, value, icon: Icon }) {
  return (
    <View className="items-center flex-1">
      <Icon size={20} color="#3b82f6" strokeWidth={2} />

      <Text className="text-gray-900 text-[13px] font-bold mt-2">
        {value}
      </Text>

      <Text className="text-gray-400 text-[10px] font-medium uppercase tracking-tighter mt-0.5">
        {label}
      </Text>
    </View>
  );
}
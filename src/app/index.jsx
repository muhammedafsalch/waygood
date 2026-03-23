import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Link } from "expo-router";
import { programs } from "../data/programs";
import { Search, MapPin, ChevronRight, Star } from "lucide-react-native";
import { MainHeader } from "../components/MainHeader";

export default function Home() {
  return (
    <View className="flex-1 bg-white">
      <MainHeader />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        
       
        <View className="px-6 pt-10 mb-8">
          <Text className="text-blue-600 text-[12px] font-bold uppercase tracking-widest mb-2">
            Explore your future
          </Text>

          <Text className="text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            Find the best{"\n"}
            <Text className="text-gray-400">
              university for you
            </Text>
          </Text>
        </View>

        
        {/*
        <View className="px-6 mb-10">
          <View className="bg-gray-100/80 flex-row items-center px-5 py-4 rounded-2xl">
            <Search size={18} color="#6b7280" strokeWidth={2} />
            <TextInput
              placeholder="Search universities, degrees..."
              className="flex-1 ml-3 text-gray-900 text-base font-medium"
              placeholderTextColor="#9ca3af"
            />
          </View>
        </View>
        */}

       
        <View className="px-6 mb-6 flex-row items-center justify-between">
          <Text className="text-lg font-bold text-gray-900">
            Featured Programs
          </Text>

          <TouchableOpacity>
            <Text className="text-blue-600 font-semibold">
              View all
            </Text>
          </TouchableOpacity>
        </View>

        {/* Program List */}
        <View className="px-6 pb-12">
          {programs.map((program) => (
            <Link
              key={program.id}
              href={`/details/${program.id}`}
              asChild
            >
              <Pressable className="mb-8 bg-white rounded-[32px] border border-gray-100 overflow-hidden active:opacity-95">
                
                {/* Image */}
                <View className="h-64 relative">
                  <Image
                    source={{ uri: program.image }}
                    className="w-full h-full bg-gray-200"
                  />

                  {/* Ranking Badge */}
                  <View className="absolute top-4 right-4 bg-white/90 px-3 py-1.5 rounded-xl flex-row items-center">
                    <Star size={12} color="#f59e0b" fill="#f59e0b" />
                    <Text className="text-gray-900 text-xs font-bold ml-1">
                      #{program.ranking}
                    </Text>
                  </View>
                </View>

                {/* Content */}
                <View className="p-6">
                  
                  {/* Location */}
                  <View className="flex-row items-center mb-2">
                    <MapPin size={12} color="#6b7280" />
                    <Text className="text-gray-500 text-xs font-semibold ml-1 uppercase tracking-tighter">
                      {program.location}
                    </Text>
                  </View>

                  {/* Title */}
                  <Text className="text-xl font-bold text-gray-900 mb-2">
                    {program.university}
                  </Text>

                  {/* Description */}
                  <Text
                    className="text-gray-500 text-sm leading-5 mb-6"
                    numberOfLines={2}
                  >
                    {program.description}
                  </Text>

                  {/* Bottom Row */}
                  <View className="flex-row items-center justify-between pt-4 border-t border-gray-50">
                    
                    <View>
                      <Text className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                        Tuition
                      </Text>
                      <Text className="text-gray-900 font-bold">
                        {program.fee}
                      </Text>
                    </View>

                    <View className="bg-blue-50 p-3 rounded-full">
                      <ChevronRight size={20} color="#2563eb" />
                    </View>

                  </View>
                </View>

              </Pressable>
            </Link>
          ))}
        </View>

      </ScrollView>
    </View>
  );
}
// import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { images } from '../../constants'
// import SearchInput from '../../components/SearchInput'
// import Trending from '../../components/Trending'
// import EmptyState from '../../components/EmptyState'
// import { getAllPosts, getLatestPosts } from '../../lib/appwrite'
// import useAppwrite from '../../lib/useAppwrite'
// import VideoCard from '../../components/VideoCard'

// const Home = () => {
//   const {data: posts , refetch} = useAppwrite(getAllPosts)

//   const {data: latestPosts} = useAppwrite(getLatestPosts)

//   const [refreshing, setRefreshing] = useState(false)
//   const onRefresh = async () => {
//     setRefreshing(true);

//     //re call videos -> if any new videos appeared 
//     await refetch()
//     setRefreshing(false)
//   }

  
//   return (
//     <SafeAreaView className='bg-primary border-2 h-full'>
//       <FlatList 
//          data={posts}
//         //data={[]}
//         keyExtractor={(item) => item.$id}
//         renderItem={({item}) => (
//          <VideoCard video={item} />
//         )}
//         ListHeaderComponent={() => (
//           <View className="my-6 px-4 space-y-6">
//             <View className="justify-between items-start flex-row mb-6">
//               <View>
//                 <Text className='font-pmedium text-sm text-gray-100'>
//                   Welcome Back
//                 </Text>
//                 <Text className='text-2xl font-psemibold text-white'>
//                   JS Mastery
//                 </Text>
//               </View>

//               <View className='mt-1.5'>
//                 <Image
//                 source={images.logoSmall}
//                 className='w-9 h-10'
//                 resizeMode='contain'
//                  />
//               </View>
//             </View>

//             <SearchInput />
//             <View className='w-full flex-1 pt-5 pb-8'>
//               <Text className='text-gray-100 text-lg font-pregular mb-3'>
//                 Latest Videos
//                 </Text>
//               <Trending posts={latestPosts ?? []} />
//             </View>
//           </View>
//         )}
//         ListEmptyComponent={() => (
//          <EmptyState 
//          title="No Videos Found"
//          subtitle="Be the first one to upload a video"
//           />
//         )}
//         refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
//        />
//     </SafeAreaView>
//   )
// }

// export default Home



import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";

import { images } from "../../constants";
import useAppwrite from "../../lib/useAppwrite";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import VideoCard from "../../components/VideoCard";
import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import { useGlobalContext } from "../../context/GlobalProvider";
import Trending from "../../components/Trending";

const Home = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();

  const { data: posts, refetch } = useAppwrite(getAllPosts);
  
  const { data: latestPosts } = useAppwrite(getLatestPosts);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  // one flatlist
  // with list header
  // and horizontal flatlist

  //  we cannot do that with just scrollview as there's both horizontal and vertical scroll (two flat lists, within trending)

  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.creator.username}
            avatar={item.creator.avatar}
          />
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back,
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  {user?.username}
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Trending Videos
              </Text>

              <Trending posts={latestPosts ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos created yet"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
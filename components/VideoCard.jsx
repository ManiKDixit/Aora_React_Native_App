// import { View, Text , Image, TouchableOpacity } from 'react-native'
// import React, { useCallback, useState } from 'react'
// import { icons } from '../constants'
// import { Video , ResizeMode } from 'expo-av'
// //import YoutubePlayer from "react-native-youtube-iframe";


// const VideoCard = ({video: {title , thumbnail , creator: {username , avatar} , video }}) => {
//     const [play, setPlay] = useState(false)
//     const [playing, setPlaying] = useState(false);

//   const onStateChange = useCallback((state) => {
//     if (state === "ended") {
//       setPlaying(false);
//       Alert.alert("video has finished playing!");
//     }
//   }, []);

//   const togglePlaying = useCallback(() => {
//     setPlaying((prev) => !prev);
//   }, []);
//   return (
//     <View className='flex-col items-center px-4 mb-14'>
//         <View className='flex-row gap-3 items-start'>
//             <View className='justify-center items-center flex-row flex-1'>
//                 <View className='w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5'>
//                     <Image 
//                     source={{uri: avatar}}
//                     className="w-full h-full rounded-lg"
//                     resizeMode='cover'
//                      />
//                 </View>

//                 <View className='justify-center flex-1 ml-3 gap-y-1'>
//                     <Text className='text-white font-psemibold text-sm' numberOfLines={1}>{title}</Text>
//                     <Text className='text-xs text-gray-100 font-pregular' numberOfLines={1}>{username}</Text>
//                 </View>
//             </View>
//                 <View className='pt-2'>
//                     <Image
//                     source={icons.menu}
//                     className='w-5 h-5'
//                     resizeMode='contain'
//                      />

//                 </View>
//         </View>

//         {play ? 
//        ( 
//        <Video 
//         source={{ uri: video}} 
//      //    onError={(error) => console.error('Video playback error:', error)}
//         className="w-full h-60 rounded-xl mt-3 "
//         resizeMode={ResizeMode.CONTAIN}
//         useNativeControls
//         shouldPlay
//         onPlaybackStatusUpdate={(status) => {
//          console.log(status)
//          if(status.didJustFinish) {
//              setPlay(false);
//          }
//         }}
//         />
    
//       ) 
//        : (<TouchableOpacity activeOpacity={0.7} className='w-full h-60 rounded-xl mt-3 relative justify-center items-center'
//        onPress={() => setPlay(true)}>
//         <Image
//         source={{uri: thumbnail}}
//         className='w-full h-full rounded-xl mt-3'
//         resizeMode='cover'
//          />
//          <Image
//          source={icons.play}
//          className='w-12 h-12 absolute'
//          resizeMode='contain'
//          />
//        </TouchableOpacity>)}
     
//     </View>
//   )
// }

//  export default VideoCard


// -------------------------------------------------------------------



import { useState } from "react";
import { ResizeMode, Video } from "expo-av";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const VideoCard = ({ title, creator, avatar, thumbnail, video }) => {
  const [play, setPlay] = useState(false);

  return (
    <View className="flex flex-col items-center px-4 mb-14">
      <View className="flex flex-row gap-3 items-start">
        <View className="flex justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>

          <View className="flex justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="font-psemibold text-sm text-white"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-xs text-gray-100 font-pregular"
              numberOfLines={1}
            >
              {creator}
            </Text>
          </View>
        </View>

        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>

      {play ? (
        <Video
          source={{ uri: video }}
          className="w-full h-60 rounded-xl mt-3"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />

          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;


// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import React, { useCallback, useState } from 'react';
// import { icons } from '../constants';
// import { Video, ResizeMode } from 'expo-av';
// // import YoutubePlayer from "react-native-youtube-iframe";

// const VideoCard = ({ video }) => {
//   const [play, setPlay] = useState(false);
//   const [playing, setPlaying] = useState(false);

//   const onStateChange = useCallback((state) => {
//     if (state === 'ended') {
//       setPlaying(false);
//       Alert.alert('Video has finished playing!');
//     }
//   }, []);

//   const togglePlaying = useCallback(() => {
//     setPlaying((prev) => !prev);
//   }, []);

//   // Destructure video properties and provide default values
//   const { title = '', thumbnail = '', video: videoUrl = '', creator = {} } = video || {};
//   const { username = '', avatar = '' } = creator;

//   return (
//     <View className="flex-col items-center px-4 mb-14">
//       <View className="flex-row gap-3 items-start">
//         <View className="justify-center items-center flex-row flex-1">
//           <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
//             <Image
//               source={{ uri: avatar }}
//               className="w-full h-full rounded-lg"
//               resizeMode="cover"
//             />
//           </View>

//           <View className="justify-center flex-1 ml-3 gap-y-1">
//             <Text className="text-white font-psemibold text-sm" numberOfLines={1}>
//               {title}
//             </Text>
//             <Text className="text-xs text-gray-100 font-pregular" numberOfLines={1}>
//               {username}
//             </Text>
//           </View>
//         </View>
//         <View className="pt-2">
//           <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
//         </View>
//       </View>

//       {play ? (
//         <Video
//           source={{ uri: videoUrl }}
//           className="w-full h-60 rounded-xl mt-3"
//           resizeMode={ResizeMode.CONTAIN}
//           useNativeControls
//           shouldPlay
//           onPlaybackStatusUpdate={(status) => {
//             console.log(status);
//             if (status.didJustFinish) {
//               setPlay(false);
//             }
//           }}
//         />
//       ) : (
//         <TouchableOpacity
//           activeOpacity={0.7}
//           className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
//           onPress={() => setPlay(true)}
//         >
//           <Image
//             source={{ uri: thumbnail }}
//             className="w-full h-full rounded-xl mt-3"
//             resizeMode="cover"
//           />
//           <Image
//             source={icons.play}
//             className="w-12 h-12 absolute"
//             resizeMode="contain"
//           />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// export default VideoCard;

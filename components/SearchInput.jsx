// import { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";

// import { icons } from "../constants";
// import { router, usePathname } from "expo-router";

// const SearchInput = ({initialQuery}) => {
//   //const [showPassword, setShowPassword] = useState(false);

//   const pathname = usePathname()
//   const [query, setQuery] = useState(initialQuery || '')

//   return (
    

//       <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex-row items-center space-x-4">
//         <TextInput
//           className="flex-1 text-white text-base mt-0.5 font-pregular"
//           value={query}
//           placeholder="Search for a video topic"
//           placeholderTextColor="#CDCDE0"
//           onChangeText={(e) => setQuery(e)}
         
//         />

        
//         <TouchableOpacity
//         onPress={() => {
//           if(!query)
//             {
//              return Alert.alert('Missing Query','Please input something to search results accross database')
//             }

//             if(pathname.startsWith('/search')) router.setParams({query})
//               else router.push(`/search/${query}`)
//         }}
//         >
//             <Image
//             source={icons.search}
//             className='w-5 h-5'
//             resizeMode="contain"
//              />
//         </TouchableOpacity>
//       </View>
      
    
//   );
// };

// export default SearchInput


import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";

import { icons } from "../constants";

const SearchInput = ({ initialQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className="flex flex-row items-center space-x-4 w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={query}
        placeholder="Search a video topic"
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (query === "")
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );

          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
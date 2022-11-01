import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import InfoText from "./Components/InfoText";

export default function App() {
  const [results, setResults] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "divyanshg809@gmail.com",
      phoneNumber: "1234567890",
      rollNumber: "1/20/FET/BCS/001",
      branch: "Computer Science",
      payments: {
        total: 100,
        status: "paid",
      },
      events: [
        {
          id: 1,
          name: "ANUBHUTI",
          isRefreshmentTaken: false,
          takenOn: null,
        },
        {
          id: 1,
          name: "Sirjun",
          isRefreshmentTaken: true,
          takenOn: "2021-09-01 12:00:00 AM",
        },
      ],
    },
  ]);

  useEffect(() => {}, []);

  return (
    <SafeAreaView
      style={tw`pt-8 bg-gray-100 flex-1 dark:bg-black items-center`}
    >
      <View style={tw`p-2 my-2 w-full`}>
        <TextInput
          style={tw`bg-white px-3 py-3 w-full rounded-lg shadow`}
          placeholder="Roll no. / Phone no. / Email"
        />
      </View>
      <ScrollView style={tw`w-full px-2 flex flex-col`}>
        {!results && (
          <View style={tw`flex-1 items-center justify-center`}>
            <Text style={tw`text-xl`}>No registrations found</Text>
          </View>
        )}
        {results &&
          results.map((result, index) => (
            <View key={index}>
              <View
                style={tw`p-4 mt-2 w-full bg-white rounded-xl border-b border-dashed border-gray-200`}
              >
                <View style={tw`w-full flex flex-row justify-between my-2`}>
                  <InfoText title={"Name"} content={result.name} />
                  <InfoText title={"Roll Number"} content={result.rollNumber} />
                </View>
              </View>
              <View style={tw`flex flex-col py-4 rounded-xl mt-2 w-full`}>
                <Text style={tw`text-lg font-semibold mb-4 mx-2`}>
                  Refreshments
                </Text>
                {result.events.map((event, index) => (
                  <View
                    style={tw`flex flex-row justify-between items-center border-b border-dashed border-gray-200 py-5 bg-white my-2 rounded-xl px-3`}
                  >
                    <View style={tw`flex flex-col`}>
                      <Text style={tw`font-semibold`}>
                        {event.name} refreshment
                      </Text>

                      {event.isRefreshmentTaken ? (
                        <Text style={tw`text-red-400 font-semibold`}>
                          Taken on {event.takenOn}
                        </Text>
                      ) : (
                        <Text style={tw`text-green-400 font-semibold`}>
                          Not taken
                        </Text>
                      )}
                    </View>
                    {!event.isRefreshmentTaken && (
                      <TouchableOpacity
                        style={tw`bg-green-400 rounded py-2 px-6`}
                      >
                        <Text style={tw`text-gray-100 font-semibold text-lg`}>
                          Approve
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                ))}
              </View>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

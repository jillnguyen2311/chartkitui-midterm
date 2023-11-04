import { View, Dimensions, ScrollView } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { Text } from 'react-native-paper';

export default function Progress() {

    const screenWidth = Dimensions.get("window").width;

    const chartConfig = {
        backgroundColor: "#ffffff",
        backgroundGradientFrom: "white",
        backgroundGradientTo: "#fafafa",
        decimalPlaces: 4,
        fromZero: true,
        formatYLabel: (value) => value.toFixed(4) + "%",
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2,
        barRadius: 5,
        useShadowColorFromDataset: false

    };

    const data = {
        data: [0.027, 0.034, 0.042, 0.078, 0.087],
        labels: ["year 2017:", "year 2018:", "year 2019:", "year 2020:", "year 2021:"]

    };

    return (
        <ScrollView>
            <View>
                <Text variant="labelLarge" >E-commerce as percentage of total sales from 2017 - 2021 </Text>
                <Text variant="labelSmall">Progress Chart</Text>
                <ProgressChart
                    data={data}
                    width={screenWidth}
                    height={300}
                    strokeWidth={10}
                    radius={10}
                    chartConfig={chartConfig}
                    hideLegend={false}
                    style={{
                        borderRadius: 16,
                        marginVertical: 8,
                    }}

                />
            </View>
        </ScrollView>
    )
}
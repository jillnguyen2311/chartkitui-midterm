import { View, Dimensions, ScrollView } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Text } from 'react-native-paper';

const screenWidth = Dimensions.get("window").width;

export default function Pie() {

    const data = [
        {
            name: "very unlikely",
            percentage: 7.2,
            color: "red",
            legendFontColor: "black",
            legendFontSize: 11
        },
        {
            name: "somewhat unlikely",
            percentage: 3.6,
            color: "orange",
            legendFontColor: "black",
            legendFontSize: 11
        },
        {
            name: "uncertain",
            percentage: 4.3,
            color: "yellow",
            legendFontColor: "black",
            legendFontSize: 11
        },
        {
            name: "somewhat likely",
            percentage: 4.1,
            color: "aquamarine",
            legendFontColor: "black",
            legendFontSize: 11
        },
        {
            name: "very likely",
            percentage: 2.5,
            color: "lime",
            legendFontColor: "black",
            legendFontSize: 11
        }
    ];

    const chartConfig = {
        backgroundColor: "#ffffff",
        decimalPlaces: 4,
        fromZero: true,
        formatYLabel: (value) => value.toFixed(4) + "%",
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2,
        barRadius: 5,
        useShadowColorFromDataset: false

    };

    return (
        <ScrollView>
            <View>
                <Text variant="labelLarge" >Likelihood of investments in retail e-commerce or online sales over the next 12 months </Text>
                <Text variant="labelSmall"> Pie Chart </Text>
                <PieChart
                    data={data}
                    width={screenWidth}
                    height={270}
                    chartConfig={chartConfig}
                    accessor={"percentage"}
                    backgroundColor={"white"}
                    paddingLeft={"15"}
                    hasLegend={true}
                    center={[5, 0]}
                    style={{
                        borderRadius: 16,
                        marginVertical: 8,
                    }}

                />
            </View>
        </ScrollView>

    )

}
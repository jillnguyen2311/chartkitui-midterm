import { View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function Pie() {

    const data = [
        {
            name: "very unlikely",
            percentage: 45.9,
            color: "#770737",
            legendFontColor: "black",
            legendFontSize: 11
        },
        {
            name: "somewhat unlikely",
            percentage: 6.9,
            color: "#A95C68",
            legendFontColor: "black",
            legendFontSize: 11
        },
        {
            name: "uncertain",
            percentage: 9.3,
            color: "#D8BFD8",
            legendFontColor: "black",
            legendFontSize: 11
        },
        {
            name: "somewhat likely",
            percentage: 16.5,
            color: "#E0B0FF",
            legendFontColor: "black",
            legendFontSize: 11
        },
        {
            name: "very likely",
            percentage: 21.3,
            color: "#DA70D6",
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
            <View>
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
    )

}
import { StyleSheet, View, ScrollView } from 'react-native';
import Progress from '../components/ProgressChart';
import Pie from '../components/PieChart';
import { Text, Divider, List } from 'react-native-paper';

export default function Data({ }) {
    return (
        <ScrollView>
            <View style={styles.container}>

                {/*progress chart section*/}
                <View style={styles.chartTitle}>
                    <Text style={styles.title} variant="titleLarge" >E-commerce as percentage of total sales from 2017 - 2021 </Text>
                    <Text variant="titleSmall">|Progress Chart|</Text>
                </View>

                <Progress />

                <View style={styles.paragraph}>
                    <Text variant="bodyMedium">This progress chart illustrates the growth of e-commerce as a percentage of total sales from 2017 to 2021. Each circle represents a year, and the completion of the circle indicates the percentage of total sales that e-commerce accounted for in that year.</Text>
                    <View>
                        <Text variant="bodyMedium">According to the above data, the e - commerce sales as percentage of total sales in the following year are:</Text>
                        <View style={styles.datalist}>
                            <View>
                                <List.Item title="* 3% (~2.7% rounding ) in the year of 2017" />
                                <Text variant="titleSmall">→ E-commerce was a relatively small portion of total sales during this year.</Text>
                            </View>
                            <View>
                                <List.Item title="* 3% (~3.4% rounding ) in the year of 2018" />
                                <Text variant="titleSmall">→ A growing trend in the adoption of e-commerce.</Text>
                            </View>
                            <View>
                                <List.Item title="* 4% (~4.2% rounding ) in the year of 2019" />
                                <Text variant="titleSmall">→ Continuing the upward trend in e-commerce sales.</Text>
                            </View>
                            <View>
                                <List.Item title="* 8% (~7.8% rounding ) in the year of 2020" />
                                <Text variant="titleSmall">→ Global pandemic caused a shift in consumer behavior towards online shopping.</Text>
                            </View>
                            <View>
                                <List.Item title="* 9% (~8.7% rounding ) in the year of 2021" />
                                <Text variant="titleSmall">→ The trend towards e-commerce has persisted.</Text>
                            </View>
                        </View>
                    </View>
                    <Text variant="bodyMedium">The chart is crucial that it visually demonstrates the increasing importance of e-commerce in the retail industry. It shows that e-commerce has been growing year over year, indicating a shift in consumer behavior towards online shopping. This trend is essential for businesses to understand as they plan their sales strategies and investments in e-commerce capabilities. The likelihood of such investments is expected to increase in the future.</Text>
                </View>

                <Divider />

                {/*pie chart section*/}
                <View style={styles.chartTitle}>
                    <Text style={styles.title} variant="titleLarge" >Likelihood of investments in retail e-commerce or online sales over the next 12 months</Text>
                    <Text variant="titleSmall">|Pie Chart|</Text>
                </View>

                <Pie />

                <View style={styles.paragraph}>
                    <Text variant="bodyMedium">This pie chart provides a visual representation of the likelihood of investments in online sales or e-commerce capabilities in retail sales over the next 12 months. The data is divided into 5 categories from “very unlikely” to “very likely”, each represented by a different color.</Text>
                    <View>
                        <Text variant="bodyMedium">According to the above data, the likelihood of investment in retail e-commerce are:
                        </Text>
                        <View style={styles.datalist}>
                            <View>
                                <List.Item title="* “Very unlikely”: 46% (~45.9% rounding)" />
                                <Text variant="titleSmall">→ A large portion of the surveyed population does not see e-commerce as a viable or attractive investment opportunity.</Text>
                            </View>
                            <View>
                                <List.Item title="* “Somewhat unlikely”: 7% (~6.9% rounding)" />
                                <Text variant="titleSmall">→ Considerably lower than the “Very unlikely” category.</Text>
                            </View>
                            <View>
                                <List.Item title="* “Uncertain”: 9% (~9.3% rounding)" />
                                <Text variant="titleSmall">→ Individuals who are both likely and unlikely about the prospect of investing in this sector.</Text>
                            </View>
                            <View>
                                <List.Item title="* “Somewhat likely”: 17% (~16.5% rounding)" />
                                <Text variant="titleSmall">→ A moderate level of interest or optimism towards e-commerce investment.</Text>
                            </View>
                            <View>
                                <List.Item title="* “Very likely”: 21% (~21.3% rounding)" />
                                <Text variant="titleSmall">→ This is a significant portion and suggests that there is a substantial group of individuals who see great potential in e-commerce investments.</Text>
                            </View>
                        </View>
                    </View>
                    <Text variant="bodyMedium">The chart is crucial as it provides a clear and immediate understanding of investment trends in the retail sector for online sales and e-commerce capabilities. It demonstrates significant variations in the likelihood of retail businesses to invest in online sales or e-commerce capabilities over the next 12 months. Despite the abundance of opportunities, there is still a significant number of people who view e-commerce as unattractive. This observation could signal a potential gap in the market or reflect current economic conditions and their influence on retail strategies. Understanding these trends can assist businesses and investors in making informed decisions regarding where to direct their efforts and resources.</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        textAlign: 'center',
    },
    datalist: {
        gap: 15
    },
    chartTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 30,
        marginHorizontal: 30
    },
    title: {
        textAlign: 'center',
        fontWeight: 700,
        color: '#702963'
    },
    paragraph: {
        marginTop: 10,
        marginBottom: 50,
        marginHorizontal: 25,
        textAlign: 'justify',
        gap: 30
    }
});

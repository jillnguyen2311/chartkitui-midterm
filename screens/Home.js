import { StyleSheet, View, ScrollView, Button } from 'react-native';
import * as React from 'react';
import { Avatar, Card, Text, List, Divider, Icon } from 'react-native-paper';

export default function Home({ navigation }) {
    const LeftContent = props => <Avatar.Icon {...props} icon="store" />

    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text variant="displaySmall" style={styles.titlebig}>RETAIL TRADE E-COMMERCE</Text>
                    <Text style={styles.titlesmall}>Revolutionizing the way we shop</Text>
                    <Text variant="bodyLarge" style={styles.description}>
                        Retail trade e-commerce, the digital evolution of traditional retail, has emerged as a game-changer in the world of commerce. This transformative phenomenon involves the buying and selling of products and services online, allowing consumers to make purchases from the comfort of their homes or on the go, with just a few clicks. In recent years, it has gained unprecedented momentum, reshaping the retail landscape, and impacting the way we shop, businesses operate, and the global economy functions.
                    </Text>

                    <View style={styles.accordion}>
                        <List.Section>
                            <List.Accordion
                                title="Why it's important?"
                                left={props => <Avatar.Icon {...props} icon="help" color='white' />}
                                expanded={expanded}
                                onPress={handlePress}>
                                <Divider />
                                <List.Item title="Shop anytime, anywhere." />
                                <Divider />
                                <List.Item title="Expands businesses globally." />
                                <Divider />
                                <List.Item title="Diverse product options." />
                                <Divider />
                                <List.Item title="Competitive prices." />
                                <Divider />
                                <List.Item title="Tailored experiences." />
                                <Divider />
                                <List.Item title="Streamlined supply chains." />
                                <Divider />
                                <List.Item title="Job creation and growth." />
                                <Divider />
                                <List.Item title="Crucial during crises." />
                            </List.Accordion>
                        </List.Section>
                    </View>

                    <View>
                        <Card >
                            <Card.Title title="Enhance the Shopping Experience" subtitle="Changing Consumer Behavior" left={LeftContent} />
                            <Card.Cover source={require('../assets/image.jpg')} />
                            <Card.Content>
                                <Text variant="bodySmall">The rise of e-commerce has fundamentally transformed how consumers shop. Online retail provides unparalleled convenience, enabling shoppers to browse and make purchases from anywhere, at any time.</Text>
                            </Card.Content>
                        </Card>
                    </View>
                </View>

                <View style={styles.box}>
                    <Text style={styles.subtitle}>TO EXPLORE MORE</Text>
                    <Button
                        title="Go to data page"
                        onPress={() => navigation.push('Data')}
                        color="#5D3FD3"
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        margin: 30
    },
    titlebig: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
    },
    titlesmall: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 50,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        textAlign: 'justify',
    },
    accordion: {
        marginBottom: 40
    },
    box: {
        marginTop: 30,
        borderColor: "black",
        borderWidth: 2,
        padding: 10
    },
});



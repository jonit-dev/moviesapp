import React from 'react';
import {Image} from 'react-native';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right
} from 'native-base';

const Movie = ({title, subtitle, imageUrl, body, footer, votes, backdropUrl}) => {
    return (

        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{uri: backdropUrl}}/>
                    <Body>
                    <Text>{title}</Text>
                    <Text note>{subtitle}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{uri: imageUrl}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
                <Left>
                    <Button transparent>
                        <Icon active name="thumbs-up"/>
                        <Text>{votes} avg</Text>
                    </Button>
                </Left>
                <Body>
                {/*<Button transparent>*/}
                    {/*<Icon active name="chatbubbles"/>*/}
                    {/*<Text>4 Comments</Text>*/}
                {/*</Button>*/}
                </Body>
                {/*<Right>*/}
                    {/*<Text>11h ago</Text>*/}
                {/*</Right>*/}
            </CardItem>
        </Card>

    );

};


export default Movie;


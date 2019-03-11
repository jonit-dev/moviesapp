import React, {Component} from 'react';
import {ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';

export default class MovieAvatar extends Component {


    render() {
        return (


                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{uri: this.props.imageUrl}}/>
                            </Left>
                            <Body>
                            <Text>{this.props.title}</Text>
                            <Text note>{this.props.subtitle}</Text>
                            </Body>
                            <Right>
                                <Text note>{this.props.vote}</Text>
                            </Right>
                        </ListItem>


        );
    }
}
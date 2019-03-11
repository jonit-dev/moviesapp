import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text} from 'native-base';


export default class MovieList extends Component {

    state = {selected: 1, movies: []};

    static navigationOptions = {
        title: 'Movie List',
    };

    componentDidLoad() {

        //lets load our inital popular movies
        this.onFetchMovies('popular')


    }

    componentDidUpdate() {

    }


    onFetchMovies = async (type) => {

        switch (type) {
            case 'popular':

                const response = await axios.get('url', {
                    params: params,
                    headers: {
                        Authorization: 'authorization'
                    }
                });



                break;
            case 'top_rated':
                break;
            case 'upcoming':
                break;
        }




    };


    renderContent(segment) {

        switch (segment) {
            case 1:
                return <Text>popular movies here</Text>;
            case 2:
                return <Text>top rated movies here</Text>;
            case 3:
                return <Text>Upcoming movies here</Text>
        }


    }


    render() {
        return (
            <Container>
                <Header hasSegment>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back"/>
                        </Button>
                    </Left>
                    <Body style={{flex: 3, justifyContent: 'center'}}>
                    <Title style={{color: '#fff', alignSelf: 'center'}}>Movie Lists</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <Segment>
                    <Button first active={this.state.selected === 1} onPress={() => this.setState({selected: 1})}>
                        <Text>Popular</Text>
                    </Button>
                    <Button active={this.state.selected === 2} onPress={() => this.setState({selected: 2})}>
                        <Text>Top Rated</Text>
                    </Button>
                    <Button last active={this.state.selected === 3} onPress={() => this.setState({selected: 3})}>
                        <Text>Upcoming</Text>
                    </Button>
                </Segment>
                <Content padder>
                    {this.renderContent(this.state.selected)}
                </Content>
            </Container>
        );
    }
}
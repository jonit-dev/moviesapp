import React, {Component} from 'react';
import {
    Container, Header,
    Left,
    Body,
    Right,
    List,
    Button,
    Icon,
    Title, Input,
    Segment,
    Content,
    Text,
    Spinner, Item
} from 'native-base';
import Constants from '../../../classes/Constants';
import MovieAvatar from "../MovieList/MovieAvatar";
import axios from "axios";


export default class Search extends Component {

    state = {selected: 1, movies: [], keyword: "", scope: ""};

    static navigationOptions = {
        title: 'Search',
    };

    componentDidMount() {

        console.log("Search Tab");


        //first tab movie
        this.setState({selected: 1, movies: [], scope: "movie"});


    }

    componentDidUpdate() {

        console.log(this.state.keyword);

    }


    onRenderMovies() {

        if (this.state.movies.length > 0) {
            let i = 0;
            return this.state.movies.map((movie) => {
                if (i < 10) {
                    i++;
                    return <MovieAvatar key={movie.id} title={movie.title}
                                        subtitle={movie.popularity} vote={movie.vote_average}
                                        imageUrl={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>;

                }
            });
        } else {
            return <Text>Please use the search bar first</Text>
        }


    }

    onFetchMovies = async (type, query) => {
        console.log(`Fetching type: ${type} movies data using as query: ${query}`);
        let requestUrl = `${Constants.get().apiUrl}/search/${type}?api_key=${Constants.get().apiKey}&query=${query}&language=en-CA&page=1`;
        console.log(requestUrl);
        const response = await axios.get(requestUrl);
        let movies = response.data.results;

        console.log(movies);

        this.setState({movies});


    };

    onUserSubmittedSearch() {
        console.log("submitted search");
        this.setState({movies: []}); //refresh movies

        this.onFetchMovies(this.state.scope, this.state.keyword);
    }


    renderContent(segment) {

        switch (segment) {
            case 1:
                return <Content padder><List>{this.onRenderMovies()}</List></Content>;
            case 2:
                return <Content padder><List>{this.onRenderMovies()}</List></Content>;
            case 3:
                return <Content padder><List>{this.onRenderMovies()}</List></Content>;
        }


    }


    render() {
        return (
            <Container>
                <Header searchBar rounded hasSegment>

                    <Item>
                        <Icon name="ios-search"/>
                        <Input placeholder="Search" value={this.state.keyword}
                               onSubmitEditing={() => this.onUserSubmittedSearch()}
                               onChangeText={(text) => this.setState({keyword: text})}/>

                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>

                </Header>
                <Segment>
                    <Button first active={this.state.selected === 1} onPress={() => {
                        this.setState({selected: 1, movies: [], scope: "movie"});
                        //lets load our inital popular movies


                    }}>
                        <Text>Movies</Text>
                    </Button>
                    <Button active={this.state.selected === 2} onPress={() => {
                        this.setState({selected: 2, movies: [], scope: "person"});

                    }}>
                        <Text>People</Text>
                    </Button>
                    <Button last active={this.state.selected === 3} onPress={() => {
                        this.setState({selected: 3, movies: [], scope: "tv"});

                    }}>
                        <Text>TV Shows</Text>
                    </Button>
                </Segment>
                {this.renderContent(this.state.selected)}
            </Container>
        );
    }
}
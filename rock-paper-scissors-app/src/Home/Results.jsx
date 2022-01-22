
import React, { Component } from 'react';
import LoadingIcon from '../components/LoadingIcon';
import axios from 'axios';
import List from './List';

export default class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: [],
      isError: false,
    }

  }

  componentDidMount() {
    axios.get('../rps/history')
      .then((response) => {
        const data = response.data.data.sort((a, b) => {
          return new Date(b.t) - new Date(a.t);
        });
        this.setState({
          isLoading: false,
          data: data
        });

      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          isError: true,
        });
        console.error(error);

      });
  }

  componentWillUnmount() {
    this.setState = () => {
      return;
    };

  }

  render() {

    if (this.state.isLoading) {
      return (
        <LoadingIcon />
      )
    }

    if (this.state.isError) {
      return (
        <div>
          {this.state.isError && <center><p className="ListEndText error">Couldn't load content...</p></center>}
        </div>

      )
    }

    return (
      <div>
        {this.state.data && <List list={this.state.data} />}
      </div>
    )
  }

}
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Header from './component/Header.jsx';
import Nav from './component/Nav.jsx';
import Social from './component/Social.jsx';
import PostCap from './component/PostCap.jsx';
import About from './component/About.jsx';

import './styles/App.scss';


class ListOfPosts extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      allPosts: [],
      displayPosts: [],
      count: 7
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      this.setState({
        allPosts: response.data,
        displayPosts: response.data.slice(0, this.state.count)
      })
    })
    .catch(function (error) {
        console.log(error);
    })
  }

  addMorePosts() {
    let count = this.state.count + 7;
    let data = this.state.allPosts.slice(0, count);

    this.setState({
      displayPosts: data,
      count: count
    })
  }

  render() {
    return (
      <div className="posts">
        { this.state.displayPosts.map((post) => (
          <article className="posts_item" key={post.id}>
            <h3 className="posts_item_title">{post.title}</h3>

            <div className="posts_item_meta">
              <span className="posts_item_meta_date">March 2, 2016</span>
              <span className="posts_item_meta_separator">|</span>
              <span className="posts_item_meta_category">Travel</span>
            </div>
            
            <p className="posts_item_text">{post.body}</p>
            
            <Link className="button_continue-post" to={`/posts/${post.id}`}>Continue reading</Link>
          </article>
        ))}

        <button className="button_more-posts" onClick={this.addMorePosts}>More posts</button>
      </div>
    );
  }
}


class ViewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      user: []
    };
  }

  componentDidMount() {
    const { number } = this.props.match.params;

    axios.get('https://jsonplaceholder.typicode.com/posts/'+number)
    .then(response => {
      this.setState({ post: response.data })
    })
    .catch(function (error) {
        console.log(error);
    })
  }

  render() {
    return (
      <div>
        <section className="post">
          <header>
            <h2 className="post_title">{this.state.post.title}</h2>

            <div className="post_meta">
              <span className="post_meta_date">March 2, 2016</span>
              <span className="post_meta_separator">|</span>
              <span className="post_meta_category">Travel</span>
            </div>
          </header>

          <p className="post_text">{this.state.post.body}</p>
        </section>

        <PostCap />

        <Link className="button_all-posts" to='/'>View all posts</Link>
      </div>
    );
  }
}


const MainRouter = () => (
  <Switch>
    <Route exact path='/' component={ListOfPosts} />
    <Route path='/posts/:number' component={ViewPost} />
    <Route path='/about' component={About} />
  </Switch>
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <aside className="sidebar">
          <Header />
          <Nav />
          <Social />
        </aside>

        <main className="content">
          <MainRouter />
        </main>
      </div>
    );
  }
}

export default App;
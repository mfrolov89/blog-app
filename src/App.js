import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios';

import './App.css';

import iconFacebook from './images/FacebookIcon.png';
import iconInstagram from './images/InstagramIcon.png';
import iconGithub from './images/GithubIcon.png';
import iconTwitter from './images/TwitterIcon.png';


const Header = () => (
  <header>
    <h1 className="header_title">My personal blog</h1>
    
    <p className="header_desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet sodales ipsum. Aenean felis nibh, dignissim eu tortor ut, pulvinar commodo tortor. Pellentesque gravida sapien velit, in pellentesque sapien sagittis nec.
    </p>
  </header>
)


const Nav = () => (
  <nav>
    <ul className="nav_list">
      <li className="nav_list-item"><Link to='/' className="nav_list-item_link">Home</Link></li>
      <li className="nav_list-item"><Link to='/about' className="nav_list-item_link">About</Link></li>
    </ul>
  </nav>
)


const Social = () => (
  <section className="social">
    <a className="social_link" href="https://www.facebook.com/">
      <img className="social_link_img" src={iconFacebook} alt ="Facebook Icon" />            
    </a>

    <a className="social_link" href="https://www.instagram.com/">
      <img className="social_link_img" src={iconInstagram} alt="Instagram Icon" />
    </a>

     <a className="social_link" href="https://github.com/">
      <img className="social_link_img" src={iconGithub} alt="Github Icon" />
    </a>

    <a className="social_link" href="https://twitter.com/">
      <img className="social_link_img" src={iconTwitter} alt="Twitter Icon" />
    </a>
  </section>
)


const About = () => (
  <section className="about">
    <h2 className="about_title">About me</h2>
    
    <p className="about_note">
      Nulla lacinia, sapien nec mollis pharetra, neque diam sodales ipsum, suscipit commodo magna quam id felis. Morbi pulvinar venenatis elementum. Etiam est ex, accumsan eu pellentesque nec, maximus id sem. Nulla facilisi. Donec malesuada aliquet diam, in porta ex condimentum nec.
    </p>

    <h3 className="about_sub-title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </h3>

    <p className="about_paragraph">
      In laoreet consequat tellus ac bibendum. Nunc consectetur ante in orci viverra laoreet. Aliquam condimentum neque non cursus dapibus. Aliquam aliquet quam dui, nec facilisis velit ultricies at. Nullam eu sodales lectus. Sed interdum tempus libero sit amet pulvinar. Quisque fringilla augue ac massa interdum laoreet.
    </p>

    <h3 className="about_sub-title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </h3>

    <p className="about_paragraph">
      Aenean id neque porta, maximus tellus sit amet, aliquet mi. Curabitur lectus diam, pharetra vitae gravida in, faucibus nec tortor. Suspendisse porta, felis nec suscipit tincidunt, urna turpis bibendum nisi, eu malesuada ex magna id dolor. Praesent nunc turpis, elementum vitae dapibus ut, suscipit in lectus. In sit amet gravida dui. Quisque quis est urna. Ut eu malesuada eros. Aliquam pharetra pellentesque magna. Maecenas consequat quam sit amet diam faucibus accumsan. Aenean lectus elit, vestibulum id dui vitae, facilisis dictum augue. Curabitur viverra eu lorem eget facilisis. Sed ut risus sed tortor lacinia lacinia non in ex. Suspendisse tortor ante, interdum eget iaculis sit amet, blandit sit amet orci. Aenean tortor est, malesuada in tellus id, semper mollis risus.
    </p>
  </section>
)

const PostCap = () => (
  <section className="post-cap">
    <h3 className="post-cap_sub-title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </h3>

    <p className="post-cap_paragraph">
      In laoreet consequat tellus ac bibendum. Nunc consectetur ante in orci viverra laoreet. Aliquam condimentum neque non cursus dapibus. Aliquam aliquet quam dui, nec facilisis velit ultricies at. Nullam eu sodales lectus. Sed interdum tempus libero sit amet pulvinar. Quisque fringilla augue ac massa interdum laoreet.
    </p>

    <p className="post-cap_paragraph">
      Integer nulla ex, aliquet eget erat non, lobortis tristique risus. Aliquam gravida urna quis odio fermentum cursus. Donec semper ante quis vulputate sagittis. In diam est, pulvinar vehicula mattis at, elementum quis ex. Pellentesque vitae nisl at risus malesuada mattis. Sed et justo dui. Sed elementum orci in nisi ullamcorper scelerisque. Maecenas et tempor dui, a volutpat risus. Sed quam arcu, sagittis non leo et, condimentum porttitor arcu. Aenean orci ex, cursus sed feugiat et, finibus id diam. Etiam gravida volutpat consequat.
    </p>

    <p className="post-cap_paragraph">
      Aenean id neque porta, maximus tellus sit amet, aliquet mi. Curabitur lectus diam, pharetra vitae gravida in, faucibus nec tortor. Suspendisse porta, felis nec suscipit tincidunt, urna turpis bibendum nisi, eu malesuada ex magna id dolor. Praesent nunc turpis, elementum vitae dapibus ut, suscipit in lectus. In sit amet gravida dui. Quisque quis est urna. Ut eu malesuada eros. Aliquam pharetra pellentesque magna. Maecenas consequat quam sit amet diam faucibus accumsan. Aenean lectus elit, vestibulum id dui vitae, facilisis dictum augue. Curabitur viverra eu lorem eget facilisis. Sed ut risus sed tortor lacinia lacinia non in ex. Suspendisse tortor ante, interdum eget iaculis sit amet, blandit sit amet orci. Aenean tortor est, malesuada in tellus id, semper mollis risus.
    </p>

    <h3 className="post-cap_sub-title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </h3>

    <p className="post-cap_paragraph">
      In laoreet consequat tellus ac bibendum. Nunc consectetur ante in orci viverra laoreet. Aliquam condimentum neque non cursus dapibus. Aliquam aliquet quam dui, nec facilisis velit ultricies at. Nullam eu sodales lectus. Sed interdum tempus libero sit amet pulvinar. Quisque fringilla augue ac massa interdum laoreet.
    </p>

    <p className="post-cap_paragraph">
      Integer nulla ex, aliquet eget erat non, lobortis tristique risus. Aliquam gravida urna quis odio fermentum cursus. Donec semper ante quis vulputate sagittis. In diam est, pulvinar vehicula mattis at, elementum quis ex. Pellentesque vitae nisl at risus malesuada mattis. Sed et justo dui. Sed elementum orci in nisi ullamcorper scelerisque. Maecenas et tempor dui, a volutpat risus. Sed quam arcu, sagittis non leo et, condimentum porttitor arcu. Aenean orci ex, cursus sed feugiat et, finibus id diam. Etiam gravida volutpat consequat.
    </p>

    <p className="post-cap_paragraph">
      Aenean id neque porta, maximus tellus sit amet, aliquet mi. Curabitur lectus diam, pharetra vitae gravida in, faucibus nec tortor. Suspendisse porta, felis nec suscipit tincidunt, urna turpis bibendum nisi, eu malesuada ex magna id dolor. Praesent nunc turpis, elementum vitae dapibus ut, suscipit in lectus. In sit amet gravida dui. Quisque quis est urna. Ut eu malesuada eros. Aliquam pharetra pellentesque magna. Maecenas consequat quam sit amet diam faucibus accumsan. Aenean lectus elit, vestibulum id dui vitae, facilisis dictum augue. Curabitur viverra eu lorem eget facilisis. Sed ut risus sed tortor lacinia lacinia non in ex. Suspendisse tortor ante, interdum eget iaculis sit amet, blandit sit amet orci. Aenean tortor est, malesuada in tellus id, semper mollis risus.
    </p>
  </section>
)


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

        <button className="button_more-posts" onClick={this.addMorePosts.bind(this)}>More posts</button>
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
    axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.number)
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
        <aside>
          <Header />
          <Nav />
          <Social />
        </aside>

        <main>
          <MainRouter />
        </main>
      </div>
    );
  }
}

export default App;
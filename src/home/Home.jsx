import Navbar from "../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img
        src="https://th.bing.com/th/id/R.9d194017281d72d4c21e621637b1b147?rik=Qaq1iXH1h3OBhw&pid=ImgRaw&r=0"
        alt=""
      />
      <div>
        Here, useState is a Hook (we’ll talk about what this means in a moment).
        We call it inside a function component to add some local state to it.
        React will preserve this state between re-renders. useState returns a
        pair: the current state value and a function that lets you update it.
        You can call this function from an event handler or somewhere else. It’s
        similar to this.setState in a class, except it doesn’t merge the old and
        new state together. (We’ll show an example comparing useState to
        this.state in Using the State Hook.) The only argument to useState is
        the initial state. In the example above, it is 0 because our counter
        starts from zero. Note that unlike this.state, the state here doesn’t
        have to be an object — although it can be if you want. The initial state
        argument is only used during the first render. Declaring multiple state
        variables You can use the State Hook more than once in a single
        component: The array destructuring syntax lets us give different names
        to the state variables we declared by calling useState. These names
        aren’t a part of the useState API. Instead, React assumes that if you
        call useState many times, you do it in the same order during every
        render. We’ll come back to why this works and when this is useful later.
        But what is a Hook? Hooks are functions that let you “hook into” React
        state and lifecycle features from function components. Hooks don’t work
        inside classes — they let you use React without classes. (We don’t
        recommend rewriting your existing components overnight but you can start
        using Hooks in the new ones if you’d like.) React provides a few
        built-in Hooks like useState. You can also create your own Hooks to
        reuse stateful behavior between different components. We’ll look at the
        built-in Hooks first.
      </div>
    </div>
  );
};

export default Home;

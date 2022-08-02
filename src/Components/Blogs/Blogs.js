import React from 'react';
import Footer from '../../Shared/Footer'
import react from '../../assests/blog/react.png'
import hook from '../../assests/blog/hook.png'
import prototype from '../../assests/blog/prototypical.png'
import usestate from '../../assests/blog/state.jpg'
import unit from '../../assests/blog/unit.jpg'
const Blogs = () => {
    return (
        <div className='lg:px-20 px-4 mt-10'>
            <div class="hero ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img width={600} src={react} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='max-w-2xl'>
                        <h1 className='text-primary  text-xl  font-bold max-w-2xl'> How will you remove improve performance your React Application?</h1>
                        <p><span className='font-bold'></span>Optimization is the number one thing that is on the mind of every dev when building any software, especially web apps. JS frameworks like Angular, React and others, have included some awesome configurations and features. <br />
                            <span className='font-bold'>Here are some way to improve react application performance:</span>
                            1. useMemo()
                            This is a React hook that is used to cache functions in React, CPU-expensive functions. <br />
                            2. Virtualize long lists
                            If you render large lists of data, it is recommended that you render only a small portion of the datasets at a time within the visible viewport of a browser, then the next data are rendered as the lists is scrolled, this is called “windowing”. <br />
                            3. React.PureComponent
                            Just like what shouldComponentUpdate does to class components, so also React.PureComponent. <br />
                            4. Cashing Function, Function can be called react component jsx method.

                        </p>
                    </div>
                </div>
            </div>

            <div className='mb-10'>
                <h1 className="font-bold text-xl   text-info py-6">What are the different ways to manage a state in a React application?/ how may ways to manage a state in a React application</h1>
                <img className='w-xl  lg:w-1/2 mb-6' src={hook} alt="" />
                <p>In the React Application we cant manage state some ways. By Using Redux, UseQuery etc. The Problem. Redux, particularly, gives the developer a single place to put all their state that seems great at first. <br />
                    The Solution With a lot of trial and error, pilot programs, and personal observance, it has been proven that React Native apps can be structured into 5 types of state. <br />
                    1. Communication State:

                    Communication state forms the backbone of your React Native app without you even knowing about it. Remember when you had requested a call back to an HTTP request? That’s when you introduced the communication system in your app. <br />
                    2. Data State

                    Data state covers information that your React application stores temporarily for various business functions. <br />
                    3. Control State

                    Contrary to the state mentioned above in a React app, the control state does not represent the application’s environment. Instead, it refers to the state which the user has input into the app.
                    <br />
                    4. Sesson State,
                    <br />
                    5. Location State

                </p>
            </div>
            <div class="hero ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={prototype} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mb-10 max-w-2xl' >
                        <h1 className="font-bold   text-xl text-secondary">How does work Prototypical inheritance in JavaScript?</h1>
                        <p>
                            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Normally in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__. <br />
                            In JavaScript Prototypal Inheritance work by borrowing from parent to child. If Parent component has an attribute so child component can get this attribute fro parent.
                            <br />
                            The Prototypical Syntax: ChildObject.__proto__ = ParentObject.
                        </p>
                    </div>
                </div>
            </div>

            <div >
                <h1 className="text-xl font-bold text-center  text-orange-400">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h1>
                <img src={usestate} class="max-w-sm rounded-lg shadow-2xl py-6" />

                <p>
                    The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries.
                    <br />
                    In the useState hook one is setProducts. setProducts is a function . that are cash the value and set the value when state updated, but if we use [...] in component it's can't update the state.
                </p>
            </div>
            <div className='hero'>
                <div className='hero-content flex-col lg:flex-row-reverse'>
                    <img src={unit} class="max-w-sm rounded-lg shadow-2xl py-6" />
                    <div>
                        <h1 className="text-xl  font-bold my-6 text-red-400">What is a unit test? Why should write unit tests?</h1>

                        <p>
                            Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure. Generally, smaller tests are better as they give a more granular view of your code’s performance. Also, when you test very small units, your tests can run fast, like a thousand tests in a second fast.
                            <br />
                            There are two types of unit testing:

                            1. Manual: As the name implies, unit tests are run manually to verify the correctness of your code. This is done before writing automated tests. Its drawback is that you have to manually test your functions/classes whenever you make changes to them.
                            2. Automated: This is the preferred unit testing method as it can be carried out by simply running a script. Automated tests also make it easier to run tests when your application scales.
                            <br /><br />
                            <ul>
                                <li># Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users.</li>
                                <li># It simplifies the debugging process.</li>
                                <li># Unit tests make code reuse easier</li>
                                <li># Unit testing improves code coverage</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;
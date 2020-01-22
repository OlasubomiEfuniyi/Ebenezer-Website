import React from 'react';
import './App.css';
import banner from './images/banner.jpg';
import banner1 from './images/banner1.jpg';
import ClipLoader from "react-spinners/ClipLoader";
import {css} from "@emotion/core";
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
} from "react-router-dom";

const override = css`
    display: block;
    margin: 0 auto;
`;
const EMS = "ems";
const EMHS = "emhs";
const HOME_TEXT = "Home";
const HOME_PATH = "/home"
const PARENT_PORTAL_LOGIN_TEXT = "Parent Portal";
const PARENT_PORTAL_LOGIN_PATH = "/parent_portal"
const GALLERY_TEXT = "Gallery";
const GALLERY_PATH = "/gallery";
const CALENDAR_TEXT = "Calendar";
const CALENDAR_PATH = "/calendar";
const CONTACT_US_TEXT = "Contact Us";
const CONTACT_US_PATH = "/contact_us";
const WELCOME_TEXT = "Welcome";
const WELCOME_PATH = "/";
const PARENT_PORTAL_TEXT = "Parent Portal Dashboard";
const PARENT_PORTAL_PATH = "/parent_portal_dashboard";

let data = {
    "ems": {
        home: {
            banner: {
                img: banner1,
            },
            vision: {
                img: banner,
                title: "Vision",
                text: "Ebenezer some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
            },
            achievements: {
                img: banner,
                title: "Achievements",
                text: "Ebenezer some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",            },
            history: {
                img: banner,
                title: "History",
                text: "Ebenezer some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
            }
        },
        contactUs: {
            contactInfo: {
                phone: "08012345678",
                email: "ems@gmail.com",
                location: "Plot 5 & 6, Labak Estate, Oko-Oba, Agege, Lagos",
            }
        },
        calendar: {
            table: {
                events: [
                    {
                        date: "1/2/2020",
                        description: "School Resumes",
                        info: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum tortor. Duis vel tincidunt nulla, eget rutrum turpis. Nunc magna enim, pellentesque id pulvinar sit amet, aliquam consequat felis. Maecenas ut justo at tortor sagittis ultrices at nec metus. Nulla molestie eu libero nec accumsan. Cras malesuada purus ut sapien lacinia imperdiet. Sed interdum sit amet nunc vitae mollis. Phasellus placerat arcu ullamcorper, mattis ipsum eget, sagittis lacus. Donec imperdiet est ac consequat pharetra. Proin molestie dapibus pulvinar. Mauris finibus cursus nibh eu facilisis.",
                    },
                    {
                        date: "1/2/2020",
                        description: "School Resumes",
                        info: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum tortor. Duis vel tincidunt nulla, eget rutrum turpis. Nunc magna enim, pellentesque id pulvinar sit amet, aliquam consequat felis. Maecenas ut justo at tortor sagittis ultrices at nec metus. Nulla molestie eu libero nec accumsan. Cras malesuada purus ut sapien lacinia imperdiet. Sed interdum sit amet nunc vitae mollis. Phasellus placerat arcu ullamcorper, mattis ipsum eget, sagittis lacus. Donec imperdiet est ac consequat pharetra. Proin molestie dapibus pulvinar. Mauris finibus cursus nibh eu facilisis.",
                    },
                    {
                        date: "1/2/2020",
                        description: "School Resumes",
                        info: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum tortor. Duis vel tincidunt nulla, eget rutrum turpis. Nunc magna enim, pellentesque id pulvinar sit amet, aliquam consequat felis. Maecenas ut justo at tortor sagittis ultrices at nec metus. Nulla molestie eu libero nec accumsan. Cras malesuada purus ut sapien lacinia imperdiet. Sed interdum sit amet nunc vitae mollis. Phasellus placerat arcu ullamcorper, mattis ipsum eget, sagittis lacus. Donec imperdiet est ac consequat pharetra. Proin molestie dapibus pulvinar. Mauris finibus cursus nibh eu facilisis.",

                    },
                    {
                        date: "1/2/2020",
                        description: "School Resumes",
                        info: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum tortor. Duis vel tincidunt nulla, eget rutrum turpis. Nunc magna enim, pellentesque id pulvinar sit amet, aliquam consequat felis. Maecenas ut justo at tortor sagittis ultrices at nec metus. Nulla molestie eu libero nec accumsan. Cras malesuada purus ut sapien lacinia imperdiet. Sed interdum sit amet nunc vitae mollis. Phasellus placerat arcu ullamcorper, mattis ipsum eget, sagittis lacus. Donec imperdiet est ac consequat pharetra. Proin molestie dapibus pulvinar. Mauris finibus cursus nibh eu facilisis.",

                    },
                    {
                        date: "1/2/2020",
                        description: "School Resumes",
                        info: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum tortor. Duis vel tincidunt nulla, eget rutrum turpis. Nunc magna enim, pellentesque id pulvinar sit amet, aliquam consequat felis. Maecenas ut justo at tortor sagittis ultrices at nec metus. Nulla molestie eu libero nec accumsan. Cras malesuada purus ut sapien lacinia imperdiet. Sed interdum sit amet nunc vitae mollis. Phasellus placerat arcu ullamcorper, mattis ipsum eget, sagittis lacus. Donec imperdiet est ac consequat pharetra. Proin molestie dapibus pulvinar. Mauris finibus cursus nibh eu facilisis.",

                    },
                    {
                        date: "1/2/2020",
                        description: "School Resumes",
                        info: "6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum tortor. Duis vel tincidunt nulla, eget rutrum turpis. Nunc magna enim, pellentesque id pulvinar sit amet, aliquam consequat felis. Maecenas ut justo at tortor sagittis ultrices at nec metus. Nulla molestie eu libero nec accumsan. Cras malesuada purus ut sapien lacinia imperdiet. Sed interdum sit amet nunc vitae mollis. Phasellus placerat arcu ullamcorper, mattis ipsum eget, sagittis lacus. Donec imperdiet est ac consequat pharetra. Proin molestie dapibus pulvinar. Mauris finibus cursus nibh eu facilisis.",

                    },
                    {
                        date: "1/2/2020",
                        description: "School Resumes",
                        info: "7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum tortor. Duis vel tincidunt nulla, eget rutrum turpis. Nunc magna enim, pellentesque id pulvinar sit amet, aliquam consequat felis. Maecenas ut justo at tortor sagittis ultrices at nec metus. Nulla molestie eu libero nec accumsan. Cras malesuada purus ut sapien lacinia imperdiet. Sed interdum sit amet nunc vitae mollis. Phasellus placerat arcu ullamcorper, mattis ipsum eget, sagittis lacus. Donec imperdiet est ac consequat pharetra. Proin molestie dapibus pulvinar. Mauris finibus cursus nibh eu facilisis.",

                    },
                    {
                        date: "1/2/2020",
                        description: "School Resumes",
                        info: "8 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum tortor. Duis vel tincidunt nulla, eget rutrum turpis. Nunc magna enim, pellentesque id pulvinar sit amet, aliquam consequat felis. Maecenas ut justo at tortor sagittis ultrices at nec metus. Nulla molestie eu libero nec accumsan. Cras malesuada purus ut sapien lacinia imperdiet. Sed interdum sit amet nunc vitae mollis. Phasellus placerat arcu ullamcorper, mattis ipsum eget, sagittis lacus. Donec imperdiet est ac consequat pharetra. Proin molestie dapibus pulvinar. Mauris finibus cursus nibh eu facilisis.",

                    },
                    {
                        date: "1/2/2020",
                        description: "School Resumes",
                        info: "9 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum tortor. Duis vel tincidunt nulla, eget rutrum turpis. Nunc magna enim, pellentesque id pulvinar sit amet, aliquam consequat felis. Maecenas ut justo at tortor sagittis ultrices at nec metus. Nulla molestie eu libero nec accumsan. Cras malesuada purus ut sapien lacinia imperdiet. Sed interdum sit amet nunc vitae mollis. Phasellus placerat arcu ullamcorper, mattis ipsum eget, sagittis lacus. Donec imperdiet est ac consequat pharetra. Proin molestie dapibus pulvinar. Mauris finibus cursus nibh eu facilisis.",

                    },
                ],
            },
            img: banner,
        },
        gallery: {
            images: [
                {
                    title: "Event 1",
                    description: "",
                    src: banner1,
                    alt: "Poster image",
                    slides: [ 
                        { 
                            src: banner1, 
                            alt: "First Slide",
                        },
                        {
                            src: banner1,
                            alt: "Second Slide",
                        },
                        {
                            src: banner1,
                            alt: "Third Slide",
                        },
                        {
                            src: banner1,
                            alt: "Fourth Slide",

                        },
                    ],
                },

                {
                    title: "Event 2",
                    description: "",
                    src: banner1,
                    alt: "Poster image",
                    slides: [ 
                        { 
                            src: banner1, 
                            alt: "First Slide",
                        },
                        {
                            src: banner1,
                            alt: "Second Slide",
                        },
                        {
                            src: banner1,
                            alt: "Third Slide",
                        },
                        {
                            src: banner1,
                            alt: "Fourth Slide",

                        },
                    ],
                },

                {
                    title: "Event 3",
                    description: "",
                    src: banner1,
                    alt: "Poster image",
                    slides: [ 
                        { 
                            src: banner1, 
                            alt: "First Slide",
                        },
                        {
                            src: banner1,
                            alt: "Second Slide",
                        },
                        {
                            src: banner1,
                            alt: "Third Slide",
                        },
                        {
                            src: banner1,
                            alt: "Fourth Slide",

                        },
                    ],
                },

                {
                    title: "Event 4",
                    description: "",
                    src: banner1,
                    alt: "Poster image",
                    slides: [ 
                        { 
                            src: banner1, 
                            alt: "First Slide",
                        },
                        {
                            src: banner1,
                            alt: "Second Slide",
                        },
                        {
                            src: banner1,
                            alt: "Third Slide",
                        },
                        {
                            src: banner1,
                            alt: "Fourth Slide",

                        },
                    ],
                },
            ],
        },
        parentPortal: {
            backgroundImage: banner,
        }

    },
    "emhs": {
        home: {
            banner: {
                img: banner1,
            },
            vision: {
                img: banner,
                title: "Vision",
                text: "Especial some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
            },
            achievements: {
                img: banner,
                title: "Achievements",
                text: "Especial some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
            },
            history: {
                img: banner,
                title: "History",
                text: "Especial some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
            }
        },
        contactUs: {
            contactInfo: {
                phone: "08087654321",
                email: "emhs@gmail.com",
                location: "Plot 9 & 10, Labak Estate, Oko-Oba, Agege, Lagos",
            }
        },
        calendar: {
            table: {
                events: [
                    {
                        date: "1/2/2020",
                        description: "School Resumes",
                        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum tortor. Duis vel tincidunt nulla, eget rutrum turpis. Nunc magna enim, pellentesque id pulvinar sit amet, aliquam consequat felis. Maecenas ut justo at tortor sagittis ultrices at nec metus. Nulla molestie eu libero nec accumsan. Cras malesuada purus ut sapien lacinia imperdiet. Sed interdum sit amet nunc vitae mollis. Phasellus placerat arcu ullamcorper, mattis ipsum eget, sagittis lacus. Donec imperdiet est ac consequat pharetra. Proin molestie dapibus pulvinar. Mauris finibus cursus nibh eu facilisis.",

                    },
                    {
                        date: "1/2/2020",
                        description: "School Resumes",
                        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum tortor. Duis vel tincidunt nulla, eget rutrum turpis. Nunc magna enim, pellentesque id pulvinar sit amet, aliquam consequat felis. Maecenas ut justo at tortor sagittis ultrices at nec metus. Nulla molestie eu libero nec accumsan. Cras malesuada purus ut sapien lacinia imperdiet. Sed interdum sit amet nunc vitae mollis. Phasellus placerat arcu ullamcorper, mattis ipsum eget, sagittis lacus. Donec imperdiet est ac consequat pharetra. Proin molestie dapibus pulvinar. Mauris finibus cursus nibh eu facilisis.",

                    },
                    {
                        date: "1/2/2020",
                        description: "School Resumes",
                        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum tortor. Duis vel tincidunt nulla, eget rutrum turpis. Nunc magna enim, pellentesque id pulvinar sit amet, aliquam consequat felis. Maecenas ut justo at tortor sagittis ultrices at nec metus. Nulla molestie eu libero nec accumsan. Cras malesuada purus ut sapien lacinia imperdiet. Sed interdum sit amet nunc vitae mollis. Phasellus placerat arcu ullamcorper, mattis ipsum eget, sagittis lacus. Donec imperdiet est ac consequat pharetra. Proin molestie dapibus pulvinar. Mauris finibus cursus nibh eu facilisis.",

                    },
                    {
                        date: "1/2/2020",
                        description: "School Resumes",
                        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum tortor. Duis vel tincidunt nulla, eget rutrum turpis. Nunc magna enim, pellentesque id pulvinar sit amet, aliquam consequat felis. Maecenas ut justo at tortor sagittis ultrices at nec metus. Nulla molestie eu libero nec accumsan. Cras malesuada purus ut sapien lacinia imperdiet. Sed interdum sit amet nunc vitae mollis. Phasellus placerat arcu ullamcorper, mattis ipsum eget, sagittis lacus. Donec imperdiet est ac consequat pharetra. Proin molestie dapibus pulvinar. Mauris finibus cursus nibh eu facilisis.",

                    },
                    {
                        date: "1/2/2020",
                        description: "School Resumes",
                        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum tortor. Duis vel tincidunt nulla, eget rutrum turpis. Nunc magna enim, pellentesque id pulvinar sit amet, aliquam consequat felis. Maecenas ut justo at tortor sagittis ultrices at nec metus. Nulla molestie eu libero nec accumsan. Cras malesuada purus ut sapien lacinia imperdiet. Sed interdum sit amet nunc vitae mollis. Phasellus placerat arcu ullamcorper, mattis ipsum eget, sagittis lacus. Donec imperdiet est ac consequat pharetra. Proin molestie dapibus pulvinar. Mauris finibus cursus nibh eu facilisis.",

                    },
                    {
                        date: "1/2/2020",
                        description: "School Resumes",
                        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum tortor. Duis vel tincidunt nulla, eget rutrum turpis. Nunc magna enim, pellentesque id pulvinar sit amet, aliquam consequat felis. Maecenas ut justo at tortor sagittis ultrices at nec metus. Nulla molestie eu libero nec accumsan. Cras malesuada purus ut sapien lacinia imperdiet. Sed interdum sit amet nunc vitae mollis. Phasellus placerat arcu ullamcorper, mattis ipsum eget, sagittis lacus. Donec imperdiet est ac consequat pharetra. Proin molestie dapibus pulvinar. Mauris finibus cursus nibh eu facilisis.",

                    },
                    {
                        date: "1/2/2020",
                        description: "School Resumes",
                        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum tortor. Duis vel tincidunt nulla, eget rutrum turpis. Nunc magna enim, pellentesque id pulvinar sit amet, aliquam consequat felis. Maecenas ut justo at tortor sagittis ultrices at nec metus. Nulla molestie eu libero nec accumsan. Cras malesuada purus ut sapien lacinia imperdiet. Sed interdum sit amet nunc vitae mollis. Phasellus placerat arcu ullamcorper, mattis ipsum eget, sagittis lacus. Donec imperdiet est ac consequat pharetra. Proin molestie dapibus pulvinar. Mauris finibus cursus nibh eu facilisis.",

                    },
                    {
                        date: "1/2/2020",
                        description: "School Resumes",
                        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum tortor. Duis vel tincidunt nulla, eget rutrum turpis. Nunc magna enim, pellentesque id pulvinar sit amet, aliquam consequat felis. Maecenas ut justo at tortor sagittis ultrices at nec metus. Nulla molestie eu libero nec accumsan. Cras malesuada purus ut sapien lacinia imperdiet. Sed interdum sit amet nunc vitae mollis. Phasellus placerat arcu ullamcorper, mattis ipsum eget, sagittis lacus. Donec imperdiet est ac consequat pharetra. Proin molestie dapibus pulvinar. Mauris finibus cursus nibh eu facilisis.",

                    },
                    {
                        date: "1/2/2020",
                        description: "School Resumes",
                        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum tortor. Duis vel tincidunt nulla, eget rutrum turpis. Nunc magna enim, pellentesque id pulvinar sit amet, aliquam consequat felis. Maecenas ut justo at tortor sagittis ultrices at nec metus. Nulla molestie eu libero nec accumsan. Cras malesuada purus ut sapien lacinia imperdiet. Sed interdum sit amet nunc vitae mollis. Phasellus placerat arcu ullamcorper, mattis ipsum eget, sagittis lacus. Donec imperdiet est ac consequat pharetra. Proin molestie dapibus pulvinar. Mauris finibus cursus nibh eu facilisis.",

                    },
                ],
            },
            img: banner,
        },
        gallery: {
            images: [
                {
                    title: "Event 1",
                    description: "",
                    src: banner1,
                    alt: "Poster image",
                    slides: [ 
                        { 
                            src: banner1, 
                            alt: "First Slide",
                        },
                        {
                            src: banner1,
                            alt: "Second Slide",
                        },
                        {
                            src: banner1,
                            alt: "Third Slide",
                        },
                        {
                            src: banner1,
                            alt: "Fourth Slide",
    
                        },
                    ],
                },
    
                {
                    title: "Event 2",
                    description: "",
                    src: banner1,
                    alt: "Poster image",
                    slides: [ 
                        { 
                            src: banner1, 
                            alt: "First Slide",
                        },
                        {
                            src: banner1,
                            alt: "Second Slide",
                        },
                        {
                            src: banner1,
                            alt: "Third Slide",
                        },
                        {
                            src: banner1,
                            alt: "Fourth Slide",
    
                        },
                    ],
                },
    
                {
                    title: "Event 3",
                    description: "",
                    src: banner1,
                    alt: "Poster image",
                    slides: [ 
                        { 
                            src: banner1, 
                            alt: "First Slide",
                        },
                        {
                            src: banner1,
                            alt: "Second Slide",
                        },
                        {
                            src: banner1,
                            alt: "Third Slide",
                        },
                        {
                            src: banner1,
                            alt: "Fourth Slide",
    
                        },
                    ],
                },
    
                {
                    title: "Event 4",
                    description: "",
                    src: banner1,
                    alt: "Poster image",
                    slides: [ 
                        { 
                            src: banner1, 
                            alt: "First Slide",
                        },
                        {
                            src: banner1,
                            alt: "Second Slide",
                        },
                        {
                            src: banner1,
                            alt: "Third Slide",
                        },
                        {
                            src: banner1,
                            alt: "Fourth Slide",
    
                        },
                    ],
                },
            ],
        },
        parentPortal: {
            backgroundImage: banner,
        }
    },
} 

/*************************************************Navigation****************************************************************************/
/**
 * This class represents the list element that encapsulates a link in a navbar. It has the following properties:
 * className - The class to be given to the list element
 * text - The text to be displayed in the link within the list element
 * isActive - Set to true if this list element is active and false otherwise
 */
class NavBarListElement extends React.Component {
    render() {
        let element = null;
        
        element = (
        <Link to={this.props.path} onClick = {this.props.onClick}>
            <li className = {this.props.className}>
                {
                    this.props.isActive ?  
                    <span className = "nav-link navBarLink" id= "active">{this.props.text}<span className="sr-only">(current)</span></span>:
                    <span className = "nav-link navBarLink">{this.props.text}</span>  
                }
            </li>
        </Link>
        );
       

        return element;
    }
}

/**
 * A navbar list component displays a list of all the links in the navbar as specified by its parent compontent.
 * It also contains state that enables it to react to the clicking of a link.
 */
class NavBarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listElementsStatus: new Map(this.props.linkTexts.map((value) => {
                if(value === this.props.activeLink) {
                    return [value, true];
                } else {
                    return [value, false];
                }
            })),
        }
    }

    handleClick(key) {
        let newListElementsStatus = new Map(this.state.listElementsStatus);
        newListElementsStatus.set(this.props.activeLink, false);
        newListElementsStatus.set(key, true);
        this.setState({
            listElementsStatus: newListElementsStatus,
        });
    }

    render() {
        let listElements = this.props.linkTexts.map((value, index) => {
            return (<NavBarListElement key = {index} onClick = {() => this.handleClick(value)} className = "nav-item" path = {"/" + this.props.school + this.props.linkPaths[index]} text = {value} isActive = {this.state.listElementsStatus.get(value)}/>);
        });

        return (
            <ul className="navbar-nav navbar-center mr-auto">
                {listElements}
            </ul>
        );
    }
}

/** 
 * This class represents the navbar component of the website. Most of the render code was obtained from the bootstrap website.
 * A navbar contains the logo of the website as well as a NavBarList component, to which it passes an array of the texts to be displayed in
 * the navbar.
 * This navbar uses react-router
 * 
*/
class NavBar extends React.Component {
    render() {
        let linkTexts = this.props.linkTexts;
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
                <div className = "container-fluid">
                    <Link to={WELCOME_PATH} className="navbar-brand" id = "logo">{this.props.logo}</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars toggler-icon"></i>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavBarList activeLink = {this.props.activeLink} onClick = {this.props.onClick} linkTexts = {linkTexts} linkPaths={this.props.linkPaths} school={this.props.school}/>
                    </div>
                </div>
            </nav>
        );
    }
}

class Home extends React.Component {
    componentDidMount() {
        this.props.handleMount();
    }

    render() {
        return (
        <div className = "home-content">
            <div className = "banner" style={{backgroundImage:`url(${data[this.props.school].home.banner.img})`}}></div>
            <div className = "home-info">
                <div className = "home-info-content">
                    <nav id="home-info-nav">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-vision-tab" data-toggle="tab" href="#nav-vision" role="tab" aria-controls="nav-vision" aria-selected="true">Vision</a>
                            <a className="nav-item nav-link" id="nav-achievements-tab" data-toggle="tab" href="#nav-achievements" role="tab" aria-controls="nav-achievements" aria-selected="false">Achievements</a>
                            <a className="nav-item nav-link" id="nav-history-tab" data-toggle="tab" href="#nav-history" role="tab" aria-controls="nav-history" aria-selected="false">History</a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                            <div className = "tab-pane-img" style = {{backgroundImage: `url(${data[this.props.school].home.history.img})`}}></div>
                            <div className = "tab-pane-text">
                                <h5><strong>{data[this.props.school].home.vision.title}</strong></h5>
                                <p>{data[this.props.school].home.vision.text}</p>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-achievements" role="tabpanel" aria-labelledby="nav-achievements-tab">
                            <div className = "tab-pane-img" style = {{backgroundImage: `url(${data[this.props.school].home.achievements.img})`}}></div>
                            <div className = "tab-pane-text">
                                <h5><strong>{data[this.props.school].home.achievements.title}</strong></h5>
                                <p>{data[this.props.school].home.achievements.text}</p>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-history" role="tabpanel" aria-labelledby="nav-history-tab">
                            <div className = "tab-pane-img" style = {{backgroundImage: `url(${data[this.props.school].home.history.img})`}}></div>
                            <div className = "tab-pane-text">
                                <h5><strong>{data[this.props.school].home.history.title}</strong></h5>
                                <p>{data[this.props.school].home.history.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className = "home-info-small">
                <div className="card-row">
                    <div className="card-col">
                        <ExtraInfoCard class = "home-card" 
                            src = {data[this.props.school].home.vision.img} alt = "Vision Picture" title = {data[this.props.school].home.vision.title}
                            description = {data[this.props.school].home.vision.text}
                            buttonText = "More" />
                    </div>
                    <div className="card-col">
                        <ExtraInfoCard class = "home-card" 
                            src = {data[this.props.school].home.achievements.img} alt = "Achievements Picture" title = {data[this.props.school].home.achievements.title} 
                            description = {data[this.props.school].home.achievements.text}
                            buttonText = "More" />
                    </div>
                    <div className="card-col">
                    <ExtraInfoCard class = "home-card" 
                            src = {data[this.props.school].home.history.img} alt = "History Picture" title = {data[this.props.school].home.history.title}
                            description = {data[this.props.school].home.history.text}
                            buttonText = "More" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}

class Welcome extends React.Component {
    componentDidMount() {
        this.props.handleMount();
    }

    render() {
        return (
            <div id="welcome-page" style = {{backgroundImage: `url(${banner})`}}>
                <div className = "welcome">
                    <div className = "welcome-header">
                        <div className = "col-sm-12 center-text">
                            <h1 className="welcome-header-text">Welcome</h1>
                        </div>
                    </div>
                    <br />
                    <div className="welcome-buttons">
                        <Link to={"/" + EMS + HOME_PATH}><button type = "button" className = "welcome-button btn btn-primary" onClick={()=>this.props.handleSchoolChange(EMS)}>Primary School</button></Link>
                        <Link to={"/" + EMHS + HOME_PATH}><button type = "button" className = "welcome-button btn btn-primary" onClick={()=>this.props.handleSchoolChange(EMHS)}>Secondary School</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}
class Card extends React.Component {
    render() {
        let content = null;
        content  = (
            <div className={"card " + (this.props.class ? this.props.class:"")}>
                <img className="card-img-top" src={this.props.src} alt={this.props.alt} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">
                        {this.props.description}
                    </p>
                    <a href="#" onClick = {this.props.onClick} className="btn btn-primary">{this.props.buttonText}</a>
                </div>
            </div>
        );
        return content;
        
    }
}

/** 
 * This component represents a card bootstrap component that can be reused on different pages. 
 * It handles displaying extra information by default.
 */
class ExtraInfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingMore: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState({
            showingMore: !this.state.showingMore,
        });
    }

    /**
     * This method renders the default card by default and toggles between it and the more version depending on the showingMore state.
     */
    render() {
        const maxLen = 100;
        let content = null;
        let len = this.props.description.length;
        let description = this.props.description.substring(0, (maxLen < len ? maxLen:len)) + ((maxLen >= len) ? "":"...");

        if(!this.state.showingMore) {
            content  = <Card class={this.props.class} src={this.props.src} alt={this.props.alt} title={this.props.title} description={description} onClick = {this.handleClick} buttonText={this.props.buttonText} />
        } else {
            content = (
                <div className={"card text-white bg-primary mb-3 " + this.props.class}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <button type = "button" onClick = {this.handleClick} className = "btn btn-success">Less</button>
                    </div>
                </div>
            ); 
        }

        return content;
        
    }
}

class ContactUsContent extends React.Component {
    componentDidMount() {
        this.props.handleMount();
    }
    
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            submitFailed: false,
        }
    }

    validateContactUs(event) {
        let fullName = document.getElementById("fullName").value;
        let number = document.getElementById("number").value;
        let question = document.getElementById("question").value;

        //Test the full name
        if(!(/^([a-z]|[A-Z])+\s([a-z]|[A-Z])+$/.test(fullName))) {
            document.getElementById("fullNameHelp").innerHTML = "Please enter your first and last name separated by a space. Symbols are not allowed.";
            event.preventDefault();
        } else {
            document.getElementById("fullNameHelp").innerHTML = "";
        }

        //Test the number
        if(!(/^[0-9]{11}$/.test(number))) {
            document.getElementById("numberHelp").innerHTML = "Please enter a valid phone number.";
            event.preventDefault();
        } else {
            document.getElementById("numberHelp").innerHTML = "";
        }

        //Test the question
        if(!(/^[\w\s\?\.!""'':;,#%&\(\)\-\+]+$/.test(question))) {
            document.getElementById("questionHelp").innerHTML = "The question contains invalid characters.";
            event.preventDefault();
        } else {
            document.getElementById("questionHelp").innerHTML = "";
        }
        
    }

    sendMail(event) {
        let question = document.getElementById("question").value;
        let fullName = document.getElementById("honorifics").value + " " + document.getElementById("fullName").value;
        let phoneNumber = document.getElementById("number").value;
        let email = document.getElementById("email").value;

        let xhttp = new XMLHttpRequest();

        xhttp.open("POST", "https://ems-emhs-backend.herokuapp.com/form/send-mail", true);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify({
            question: question,
            fullName: fullName,
            phoneNumber: phoneNumber,
            email: email
        }));

        let outerThis = this;
        xhttp.onload = function() {
            if(this.status == 200) {
                outerThis.setState({submitted: true, submitFailed: false});
            } else {
                outerThis.setState({submitFailed: true});
            }
        }

        event.preventDefault();
    }

    render() {
        let questionSection = null;
        if(!this.state.submitted) {
            questionSection = 
            (
                <div className="contact-us-questions">
                    <div className="contact-us-questions-card-container">
                        <div className="card">
                            <div className="card-header contact-us-header">
                                <h5 className="card-title">Questions</h5>
                            </div>
                            <div className="card-body">
                                <form className="contact-us-form" onSubmit={(event) => this.sendMail(event)}>
                                    <div className = "form-row">
                                        <div className="form-group col-md-4">
                                            <select defaultValue = {"Mrs."} id="honorifics" className="form-control">
                                                <option value="Mrs.">Mrs.</option>
                                                <option value="Mr.">Mr.</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-8">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="fullName" aria-describedby = "fullNameHelp" placeholder="Full Name" required/>
                                                <small id="fullNameHelp" className="form-text text-muted invalid-text"></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input type="email" className="form-control" id="email" placeholder="Email"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="tel" className="form-control" id="number" aria-describedby = "numberHelp" placeholder="Phone Number" required/>
                                            <small id="numberHelp" className="form-text text-muted invalid-text"></small>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <textarea className="form-control" id="question" aria-describedby = "questionHelp" rows = "3" placeholder = "Question" required></textarea>
                                            <small id="questionHelp" className="form-text text-muted invalid-text"></small>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary" onClick = {(event) => this.validateContactUs(event)}>Submit</button>
                                    {this.state.submitFailed ? <small className="form-text text-muted invalid-text">We could not submit your question. Please try agian.</small>:null}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            questionSection = 
            (
                <div className="contact-us-questions col-lg-6">
                    <div className="card">
                        <div className="card-header contact-us-header">
                            <h5 className="card-title">Questions</h5>
                        </div>
                        <div className="card-body">
                            <p>Thank you for reaching out to us. We will get back to you as soon as possible.</p>
                            <button type="button" className="btn btn-primary" onClick={() => this.setState({submitted:false})}>Another Question</button>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <div className="contact-us-content">
                    {questionSection}
                    <div className="contact-us-info">
                        <div className="contact-us-info-card-container">
                            <div className="card">
                                <div className="card-header contact-us-header">
                                    <h5 className="card-title">Our Contact Information</h5>
                                </div>
                                <div className="card-body">
                                    <p className="card-text"><strong>Phone: </strong>{data[this.props.school].contactUs.contactInfo.phone}</p>
                                    <p><strong>Email: </strong>{data[this.props.school].contactUs.contactInfo.email}</p>
                                    <p><strong>Location: </strong>{data[this.props.school].contactUs.contactInfo.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

class InfoCard extends React.Component {
    render() {
        return (
            <div className="card">
                <div className={"card-header " + (this.props.headerClass ? this.props.headerClass:"")}>
                    {this.props.header}
                </div>
                <div className="card-body">
                    <p className="card-text">{this.props.info}</p>
                </div>
            </div>
        );
    }
}

class CalendarContent extends React.Component {
    componentDidMount() {
        this.props.handleMount();
    }

    constructor(props) {
        super(props);
        this.state = {
            rightContent:<img src = {data[this.props.school].calendar.img} className="img-fluid" alt="Academic Calendar Image" />,
        }
    }

    handleClick(index) {
        this.setState({
            rightContent: <InfoCard  headerClass = "calendar-card-header" header = {data[this.props.school].calendar.table.events[index].description} info = {data[this.props.school].calendar.table.events[index].info} />
        });
    }

    render() {
        return (
            <div>
                <div className="calendar">
                    <p>Click an event for more information</p>
                    <div className="calendar-content">
                        <div className="academic-calendar">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Events</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data[this.props.school].calendar.table.events.map((event, index) => <tr className = "calendar-table-row" key={index}><td>{event.date}</td><td><a href = "#" onClick={()=>this.handleClick(index)}>{event.description}</a></td></tr>)}
                                </tbody>
                            </table>
                        </div>
                        <div className="academic-calendar-description">
                            {this.state.rightContent}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

class Carousel extends React.Component {

    render() {
        return(
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {this.props.images.map((image, index)=><li key = {index} data-target="#carouselExampleIndicators" data-slide-to={index.toString()} className={index === 0 ? "active":""}></li>)}
                </ol>
                <div className="carousel-inner">
                    {this.props.images.map((image, index) => <div key={index} className={"carousel-item " + (index === 0 ? "active":"")}><img className="d-block w-100" src={image.src} alt={image.alt} /></div>)}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

class GalleryContent extends React.Component {
    componentDidMount() {
        this.props.handleMount();
    }

    constructor(props) {
        super(props);
        this.state = {
            currentSlideshow: null,
        }
    }

    handleClick(index) {
        this.setState({
            currentSlideshow: index,
        });
    }

    render() {
        return (
            <div className="gallery">
                {this.state.currentSlideshow != null ? (<div className="slideshow"><Carousel images={data[this.props.school].gallery.images[this.state.currentSlideshow].slides}/></div>) : ""}
                <div className="gallery-cards-container">
                    {data[this.props.school].gallery.images.map((image, index)=><div className = "gallery-card-container" key ={index}><Card class = "gallery-card" title={image.title} src={image.src} alt={image.alt} description={image.description} buttonText={"View Gallery"} onClick={() => this.handleClick(index)}/></div>)}
                </div>
                <Footer />
            </div>
        );
    }
}

class ParentPortalLogin extends React.Component {
    componentDidMount() {
        this.props.handleMount();
    }

    submit() {
        let xhttp = new XMLHttpRequest();
        let formData = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
        };

        let outerThis = this;
        xhttp.onload = function() {
            let status = this.status;
            if(status == 200) {
                outerThis.props.handleLogin(JSON.parse(this.response));
            }
        };

        xhttp.open("POST", "https://ems-emhs-backend.herokuapp.com/form/parent-portal-login", true);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify(formData));
    }

    validate(event) {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let doSubmit = true;

        if(!/^[\w]+$/.test(username)) {
            document.getElementById("usernameHelp").innerHTML =  "Username is emtpty or contains invalid characters.";
            event.preventDefault();
            doSubmit = false;
        } else {
            document.getElementById("usernameHelp").innerHTML = "";
        }
        
        if(!/^[\w!@#\$%\^&\*]+$/.test(password)) {
            document.getElementById("passwordHelp").innerHTML = "Password is empty or contains invalid characters.";
            event.preventDefault();
            doSubmit = false;
        } else {
            document.getElementById("passwordHelp").innerHTML = "";
        }

        if(doSubmit) {
            this.submit();
        }
    }

    render() {
        return (
            <div style={{backgroundImage: `url(${data[this.props.school].parentPortal.backgroundImage})`}} className = "parent-portal-login">
                <div className = "tint">
                    <div className="parent-portal-login-form-container">
                        <form className="parent-portal-login-form">
                            <div className="form-group">
                                <input type="text" className="form-control" id="username" aria-describedby="username" placeholder="username" />
                                <small style={{backgroundColor: "white"}} id="usernameHelp" className="form-text text-muted invalid-text"></small>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="password" aria-describedby="passwordHelp" placeholder="password" />
                                <small style={{backgroundColor: "white"}} id="passwordHelp" className="form-text text-muted invalid-text"></small>
                            </div>
                            <Link to={"/" + this.props.school + PARENT_PORTAL_PATH} onClick={(event) => this.validate(event)}><button type="button" className="btn btn-primary">Login</button></Link>
                        </form>
                    </div>
                    <Footer />
                </div>
            </div>
        );  
    }
}

/**
 * ParentPortalContent will make requests to the backend for its desired contents to allow rendering to begin 
 * even though all the data is not yet available. Passing all the desired contents as props does not
 * all this to happen.
 */
class ParentPortalContent extends React.Component {
    componentDidMount() {
        this.props.handleMount();
    }

    constructor(props) {
        super(props);
        this.state = {
            activeChild: null,
            totalBalace: null,
            paymentHistory: [],
            children: [],
            totalBalanceLoading: false,
            paymentHistoryLoading: true,
            childrenLoading: true,
        }
    }

    componentDidMount() {
        this.props.handleMount();
        this.getChildren();
        this.getPaymentHistory();
    }

    getChildren() {
        let xhttp = new XMLHttpRequest();

        let outerThis = this;
        xhttp.onload = function() {
            let status = this.status;

            if(status === 200) {
                outerThis.setState({
                    children: JSON.parse(this.response),
                    childrenLoading: false,
                });
            }
        }

        xhttp.open("POST", "https://ems-emhs-backend.herokuapp.com/parent-portal/get-children", true);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify({username: this.props.userData.username}));
    }

    getDataForChild(childData) {
        this.setState({activeChild: childData, totalBalanceLoading: true, paymentHistoryLoading: true});
        this.getTotalBalace(childData);
        this.getPaymentHistory(childData);
    }

    getTotalBalace(childData) {
        let xhttp = new XMLHttpRequest();

        let outerThis = this;
        xhttp.onload = function() {
            let status = this.status;

            if(status === 200) {
                let data = JSON.parse(this.response);
                console.log(data);
                outerThis.setState({
                    totalBalance: data.totalBalance,
                    totalBalanceLoading: false,
                });
            }
        };

        if(childData) {
            xhttp.open("POST", "https://ems-emhs-backend.herokuapp.com/parent-portal/get-data-for-child", true);
        } else {
            xhttp.open("POST", "https://ems-emhs-backend.herokuapp.com/parent-portal/get-total-balance", true);
        }
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify({child: childData, username: this.props.userData.username}));
    }

    getPaymentHistory(childData, oncComplete) {
        let xhttp = new XMLHttpRequest();

        let outerThis = this;
        xhttp.onload = function() {
            let status = this.status;
            if(status === 200) {
                let data = JSON.parse(this.response);
                outerThis.setState({
                    paymentHistory: data.paymentHistory,
                    paymentHistoryLoading: false,
                });
            }
        };

        xhttp.open("POST", "https://ems-emhs-backend.herokuapp.com/parent-portal/get-payment-history", true);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify({username: this.props.userData.username, child: childData}));
    }

    render() {
        let balance = (this.state.activeChild === null) ? this.props.userData.totalBalance : this.state.totalBalance;
        return(
            <div className="parent-portal-content">
                <div className="parent-portal-heading">
                    <div className="parent-portal-logout">
                        <Link to={"/" + this.props.school + PARENT_PORTAL_LOGIN_PATH} onClick={() => this.props.handleLogout()}><button type="button" className="float-right btn btn-danger">Logout</button></Link>
                    </div>
                </div>
                <div className="parent-portal-dashboard">
                    <div className="parent-portal-dashboard-controls bg-danger">
                    {
                        this.state.childrenLoading ?
                        <div><ClipLoader css={override} size={100} color={"white"} loading={this.state.loading}/></div>:
                        <div>
                            <div className = "parent-portal-full-name"><h5>{this.props.userData["lastName"] + "'s Account"}</h5></div>
                            <form>
                                <div className="radio">
                                    <label>
                                        <input type="radio" checked={!this.state.activeChild} value="All" onChange = {
                                            () => {
                                                this.getDataForChild(null);
                                            }
                                        }/>All
                                    </label>
                                </div>
                                {this.state.children.map((value, index) => 
                                    (
                                        <div key = {index} className="radio">
                                            <label>
                                                <input type="radio" 
                                                checked={this.state.activeChild && (this.state.activeChild.firstName === value.firstName && this.state.activeChild.lastName === value.lastName)} 
                                                value = {value.firstName + " " + value.lastName} 
                                                onChange={() => this.getDataForChild(value)}/>
                                            </label>{value.firstName + " " + value.lastName}
                                        </div>
                                    )
                                )}
                            </form>
                        </div>
                    }
                    </div>
                    <div className="parent-portal-dashboard-content">
                    {
                        (this.state.totalBalanceLoading || this.state.paymentHistoryLoading) ? 
                        <div><ClipLoader css={override} size={150} color={"red"} loading={this.state.loading}/></div>:
                        <div>
                            <h5>Total Balance: &#8358;{balance}</h5>
                            <table className="table">
                                <thead className="bg-danger">
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Payed for</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.paymentHistory.map((value, index) => 
                                        <tr key={index}>
                                            <td>{value.date}</td>
                                            <td>&#8358;{value.amount}</td>
                                            <td>{value.for.firstName} {value.for.lastName}</td>
                                        </tr>
                                    
                                    )}
                                
                                </tbody>
                            </table>
                        </div>
                    }
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className = "footer">
                <h5><i className="far fa-copyright"></i> Copyright 2020</h5>
            </div>
        );
    }
}
/*************************************************Web Page********************************************************************/
class Page extends React.Component {
    constructor(props) {
        super(props);
        //Get the url from the browser to determine if the school is the primary or secondary
        let url = window.location.pathname;
        //Get the section of the path after the school acronym
        let pathEnd = /(\/\w*)$/.exec(url)[0];
        let currentPage = "";

        switch(pathEnd) {
            case HOME_PATH:
                currentPage = HOME_TEXT;
                break;
            case PARENT_PORTAL_LOGIN_PATH:
                currentPage = PARENT_PORTAL_LOGIN_TEXT;
                break;
            case GALLERY_PATH:
                currentPage = GALLERY_TEXT;
                break;
            case CALENDAR_PATH:
                currentPage = CALENDAR_TEXT;
                break;
            case CONTACT_US_PATH:
                currentPage = CONTACT_US_TEXT;
                break;
        }

        this.state = {
            school: url.match(`\/${EMS}\/`) ? EMS : EMHS,   //Set the school from the url the first time the page component is rendered
            currentPage: currentPage,
            loggedIntoParentPortal: false,
            userData: null,
        };
    }
    
    handleMount(page) {
        this.setState({
            currentPage: page,
        })
    }

    handleParentPortalLogin(userData) {
        this.setState({
            loggedIntoParentPortal: true,
            userData: userData,
        });
        this.loadTotalBalance(userData);
    }

    handleParentPortalLogout() {
        this.setState({
            loggedIntoParentPortal: false,
            userData: null,
        });
    }

    handleSchoolChange(name) {
        this.setState({
            school: name,
        });
    }

    loadTotalBalance(userData) {
        let xhttp = new XMLHttpRequest();

        let outerThis = this;
        xhttp.onload = function() {
            if(this.status === 200) {
                let totalBalance = JSON.parse(this.response).totalBalance;
                userData = outerThis.state.userData;
                userData.totalBalance = totalBalance;
                outerThis.setState({
                    userData: userData,
                })
            }
        };

        xhttp.open("POST", "https://ems-emhs-backend.herokuapp.com/parent-portal/get-total-balance", true);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify({username:userData.username}));
    }

    render() {        
        return (
            <Router>
                <div id="page">
                    {
                    (this.state.currentPage !== PARENT_PORTAL_TEXT && this.state.currentPage !== WELCOME_TEXT) ? <NavBar linkTexts = 
                    {[HOME_TEXT, PARENT_PORTAL_LOGIN_TEXT , GALLERY_TEXT, CALENDAR_TEXT, CONTACT_US_TEXT]}
                    linkPaths = {[HOME_PATH, PARENT_PORTAL_LOGIN_PATH, GALLERY_PATH, CALENDAR_PATH, CONTACT_US_PATH]} 
                    logo = {this.state.school.toUpperCase()}
                    school = {this.state.school}
                    activeLink={this.state.currentPage}
                    />:null
                    }

                    <Switch>
                        {/*EMS Routes*/}
                        <Route path={"/" + EMS + HOME_PATH}>
                            <Home school={EMS} handleMount={()=>{this.handleMount(HOME_TEXT)}}/>
                        </Route>
                        <Route path={"/" + EMS + PARENT_PORTAL_LOGIN_PATH}>
                            <ParentPortalLogin school={EMS} handleLogin={(userData) => {this.handleParentPortalLogin(userData)}} handleMount={() => this.handleMount(PARENT_PORTAL_LOGIN_TEXT)}/>
                        </Route>
                        <Route path={"/" + EMS + GALLERY_PATH}>
                            <GalleryContent school={EMS} handleMount={()=>this.handleMount(GALLERY_TEXT)}/>
                        </Route>
                        <Route path={"/" + EMS + CALENDAR_PATH}>
                            <CalendarContent school={EMS} handleMount={()=>this.handleMount(CALENDAR_TEXT)}/>
                        </Route>
                        <Route path={"/" + EMS + CONTACT_US_PATH}>
                            <ContactUsContent school={EMS} handleMount={()=>this.handleMount(CONTACT_US_TEXT)}/>
                        </Route>
                        <Route path={"/" + EMS + PARENT_PORTAL_PATH}>
                            {
                                this.state.loggedIntoParentPortal ? 
                                <ParentPortalContent school={EMS} userData={this.state.userData} handleLogout={() => this.handleParentPortalLogout()} handleMount={()=>this.handleMount(PARENT_PORTAL_TEXT)}/>:
                                <ParentPortalLogin school={EMS} handleLogin={(userData) => this.handleParentPortalLogin(userData)} handleMount={()=>this.handleMount(PARENT_PORTAL_LOGIN_TEXT)}/>
                            }
                        </Route>
                        
                        {/*EMHS Routes*/}
                        <Route path={"/" + EMHS + HOME_PATH}>
                            <Home school={EMHS} handleMount={()=>this.handleMount(HOME_TEXT)}/>
                        </Route>
                        <Route path={"/" + EMHS + PARENT_PORTAL_LOGIN_PATH}>
                            <ParentPortalLogin school={EMHS} handleLogin={(userData) => this.handleParentPortalLogin(userData)} handleMount={()=>this.handleMount(PARENT_PORTAL_LOGIN_TEXT)}/>
                        </Route>
                        <Route path={"/" + EMHS + GALLERY_PATH}>
                            <GalleryContent school={EMS} handleMount={()=>this.handleMount(GALLERY_TEXT)}/>
                        </Route>
                        <Route path={"/" + EMHS + CALENDAR_PATH}>
                            <CalendarContent school={EMHS} handleMount={()=>this.handleMount(CALENDAR_TEXT)}/>
                        </Route>
                        <Route path={"/" + EMHS + CONTACT_US_PATH}>
                            <ContactUsContent school={EMHS} handleMount={()=>this.handleMount(CONTACT_US_TEXT)}/>
                        </Route>
                        <Route path={"/" + EMHS + PARENT_PORTAL_PATH}>
                            {
                                this.state.loggedIntoParentPortal ? 
                                <ParentPortalContent school={EMHS} userData={this.state.userData} handleLogout={() => this.handleParentPortalLogout()} handleMount={()=>this.handleMount(PARENT_PORTAL_TEXT)}/>:
                                <ParentPortalLogin school={EMHS} handleLogin={(userData) => this.handleParentPortalLogin(userData)} handleMount={()=>this.handleMount(PARENT_PORTAL_LOGIN_TEXT)}/>
                            }
                        </Route>

                        {/* Welcome page route */}
                        <Route path={WELCOME_PATH}>
                            <Welcome handleMount={()=>this.handleMount(WELCOME_TEXT)} handleSchoolChange={(school) => this.handleSchoolChange(school)}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Page
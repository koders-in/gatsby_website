import React from "react";
import DefaultTemplate from "../components/organism/defaultTemplate";
import { HEADER, LINK } from '../components/constants/header';
import FooterContainer from '../components/organism/footer.js';
import { Paragraph, Header4 } from '../components/atoms/header';
import { BlogPragraph, BlogSpan } from '../components/templates/blog.style';
import NavContainer from '../components/organism/nav';
import Images from '../components/atoms/Images';
import blogImg1 from '../images/blogImg1.jpg';
import blogImg2 from '../images/blogImg2.jpg';
import blogImg3 from '../images/blogImg3.png';

const BlogPage = () => {

    return (<>
        
        <DefaultTemplate
            
            title={HEADER.DEVELOPMENT_TOOL}
            isBlog
        >
            <NavContainer isBlogPage/>
            <BlogPragraph>
                <Images src={blogImg1} alt="Card" />
                <Paragraph primary>
                    If you are reading this article, you are unsure about one of the most important decisions before making your first app. You are dying to start working on this marvelous idea for an app. Which one to do it for, iOS or Android?
                </Paragraph>
                <Paragraph primary>
                    Before you start on the adventurous journey of creating an app, you need to choose the right web application development framework. You know you want your app to be easily accessible across platforms.
                </Paragraph>
                <Paragraph primary>
                    This tutorial will help you make the right decision for your business by helping you pick out the right cross-platform solution for your app. There are different types of mobile applications, but React native and flutter fit right if you want to create hybrid apps?
                </Paragraph>
                <Paragraph primary>
                    Although there are many options for choosing the right app development framework, we will restrain our focus on Flutter and react as this segment is a drop in the ocean.
                </Paragraph>
                <Paragraph primary>
                    Flutter and react-native are both platforms to build web applications. Flutter is new to the market and lacks the popularity achieved by React.
                    React has been used to create popular apps like Facebook, Instagram, Skype, Pinterest, and uber.
                    Flutter is faster than React. Both the frameworks possess reactive UI architecture and can debug on emulator and device from VS code. Let’s look at both the app development frameworks in detail.
                </Paragraph>
                <Header4>Maturity</Header4>
                <Paragraph primary>
                    React is an app development framework that is being used for major app developers like Facebook, Instagram, Airbnb, Skype, and Walmart. It was launched in 2015 whereas Flutter is a new framework that was launched in 2017. It doesn’t have as much market credibility as React.
                    <br /><BlogSpan>Winner: React</BlogSpan>
                </Paragraph>
                <Header4>Language</Header4>
                <Paragraph primary>
                    React native uses Javascript which is a very popular language used by almost all programmers across the globe. Javascript is a dynamically typed language and almost anything can be programmed to be done in java. Flutter developed by Google founded Dart in 2011 which they used to make Flutter. It is comparatively uncommon in web application developers.
                    <br /> <BlogSpan> Winner: React</BlogSpan>
                </Paragraph>
                <Header4>Technical architecture</Header4>
                <Paragraph primary>
                    The React Native architecture depends on JavaScript bridge which is the JS runtime environment architecture. The react native uses the Flux architecture developed by Facebook. Flutter instead uses the Dart framework that comes with many native components in the framework so a bridge is not needed for communication.
                    <br /> <BlogSpan> Winner: Flutter</BlogSpan>
                </Paragraph>
                <Header4>Performance and Appearance</Header4>
                <Images src={blogImg3} alt="Card" />
                <Paragraph primary>
                    The UI components in React are compiled to their native equivalents. The JS runs in a separate thread and connects to the native modules using a bridge. It is fast but is put in a tough spot when compared to Flutter.
                    Flutter fares better because of its Dart Frame which is faster than other frameworks because it is well connected to the native framework which makes making an app easier.
                    <br /> <BlogSpan> Winner: Flutter</BlogSpan>
                </Paragraph>
                <Header4>Stability</Header4>
                <Paragraph primary>
                    The user base of React Native are very loyal in terms of their consistency. React Native is already established and relied on by users for its features. Flutter is relatively new to gain such support and enthusiasm.
                    <br /> <BlogSpan> Winner: React</BlogSpan>
                </Paragraph>
                <Header4>Setup and Project Configuration</Header4>
                <Paragraph primary>
                    React native has a setup <a href={LINK.GUIDE} target="_blank" rel="noreferrer">guide</a> which assumes that the developer has all the tools necessary to develop for iOS and Android. It has no setup guide for Android app development. On the other hand, Flutter has detailed information on the setup of the platform and IDE for Android as well as iOS. It also has a tool called Flutter Doctor which can usher developers through
                    <br /><BlogSpan> Winner: Flutter</BlogSpan>
                </Paragraph>
                <Header4>Developer Productivity</Header4>
                <Paragraph primary>
                    For a developer well versed with JavaScript, it is possible to build a cross-platform app with ease. React Native saves a lot of developer time because of its hot reload feature testing the alterations in the UI. Flutter also comes with a hot reload feature. But dart is not a common language and there is a lack of support for IDE and text editors
                    <br /> <BlogSpan> Winner: React</BlogSpan>
                </Paragraph>

                <Header4>Community Support</Header4>
                <Paragraph primary>
                    React Native which was launched by Facebook in 2015 has gained a lot of popularity since its inception. There exist a lot of get-togethers and conferences globally in almost every major city. Flutter gained a lot of attention after Google promoted it in its Google I/O conference in 2017. Flutter’s community is growing at a rapid pace now with conferences being held online. There are not enough resources for users/developers to resolve common problems.
                    <br /> <BlogSpan> Winner: React</BlogSpan>
                </Paragraph>

                <Header4>Testing</Header4>
                <Paragraph primary>
                    There exist third party tools like <a href={LINK.JEST} target="_blank" rel="noreferrer">Jest</a> which can be used for snapshot testing. Still, when we look at integration or UI level testing. There is still no official support given by React Native.
                    Flutter has great documentation for testing apps created by <a href={LINK.FLUTTER} target="_blank" rel="noreferrer">Flutter</a>, you can also read this <a href={LINK.ARTICLE} target="_blank" rel="noreferrer">article</a> on testing Flutter’s web applications for more information. Flutter also has a <a href={LINK.WIDGETS} target="_blank" rel="noreferrer">widget testing</a> feature where we can create widget tests for UI testing and run them.
                    <br /> <BlogSpan> Winner: Flutter</BlogSpan>
                </Paragraph>

                <Header4>Installation</Header4>
                <Images src={blogImg2} alt="Card" />
                <Paragraph primary>
                    React native app development framework can be installed using Node Package Manager (NPM). Most developers that use JavaScript know how to use a <a href={LINK.NODEMANAGER} target="_blank" rel="noreferrer">Node package manager</a>.
                    Flutter is installed by downloading from Github, the binary for a specific platform. For macOS, we download <a href={LINK.ZIP} target="_blank" rel="noreferrer">flutter.zip</a> file and add this as a PATH variable.
                <br /> <BlogSpan> Winner: React</BlogSpan>
                </Paragraph>

                <Header4>Code reuse</Header4>
                <Paragraph primary>
                    React Native lets you create a code and send it anywhere provided developers take a look at the platform they are running their app on and load various components depending on the platform. Flutter instead has a very reusable code. It lets users define a single UI widget tree and reuse the logic so that it gets easier for users.
                <br /><BlogSpan> Winner: Flutter</BlogSpan>
                </Paragraph>

                <Header4>Support</Header4>
                <Paragraph primary>
                    Flutter has a powerful command-line interface that can create a binary of the Android or iOS app by using command-line tools and reading the instructions given by Flutter in their documentation for building and releasing apps. React Native provides a <a href={LINK.MANNUAL} target="_blank" rel="noreferrer">manual</a> for deploying apps. It doesn't have any automated steps to release iOS apps to the App Store. It employs third party libraries like Fastlane for this feature.
                <br /><BlogSpan> Winner: Flutter</BlogSpan>
                </Paragraph>

                <Paragraph primary>
                    Both mobile app developments have their pros and cons, flutter came out the winner at this race.
                    I hope this helped you in making the right step towards creating your own app. You should take into a note what your business needs are and who you are working for? Every app is different and needs to be treated differently. What is your idea?
                </Paragraph>

                <Paragraph primary>
                    Go on, tell us, and turn that idea into an elegant product. Start Koding.
                </Paragraph>

                <Paragraph primary>
                    Keywords: app development,  web application
                </Paragraph>
            </BlogPragraph>
        </DefaultTemplate>
        <FooterContainer isBlogPage/>
    </>
    )
};


export default BlogPage;

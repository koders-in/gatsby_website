import React from "react";
import DefaultTemplate from "../components/organism/defaultTemplate";
import { HEADER } from '../components/constants/header';
import FooterContainer from '../components/organism/footer.js';
import NavContainer from '../components/organism/nav';
import { Paragraph, Header4 } from '../components/atoms/header';
//import { ImageContainer,ImageView } from '../components/templates/blog.style';
//import blogImg1 from '../images/blog3_1.jpg';


const BlogPage = () => {

    return (<>
        <NavContainer isBlogPage/>
        <DefaultTemplate
            title={HEADER.SOFTWARE_DEVELOPMENT}
            isBlog
        >
           
          
                <br></br>
                <Paragraph primary>
                Hi, Looking for advice to go online with a software development company? 
                </Paragraph>
                <Paragraph primary>
                Software is everywhere in today’s world. Anybody with a mobile phone or a desktop can use applications or programs that can be accessed at any time anywhere on the globe. These programs must be created, distributed and maintained. This is the  work of software development companies in a capsule. It is a giant industry and has an annual revenue of a staggering $238 Billion and a growth rate of 3.9% per year. The software industry employs more than half a million people.
                </Paragraph>
                <br></br>
                <Paragraph primary>
                Learn how to start your own Software Development Business and whether it is the right fit for you.
                </Paragraph>
                <Header4>1. Understand the market and customer</Header4>
                <Paragraph primary>
                This is the most important step of the process and it lays down the foundation for the software business on the internet. Your product needs to understand the customer and fulfill their desires. To market your product the best, you need to understand the competition as well. The time you spent on research will help you make more informed decisions about many aspects of your business like distribution channels, pricing, identifying opportunities or even marketing channels. This helps you understand your product better and reach your target audience more easily. You will also more easily identify problems and reach solutions faster.
                </Paragraph>
                <Header4>2. Create a business plan</Header4>
                <Paragraph primary>
                Your research will lead to the next step of creating a business plan for your online business. A SWOT analysis will help you gain clarity of your product and create a  detailed profile. Documentation of the various aspects of your business is very important. The knowledge you have gained so far will help you set realistic targets and identify potential customers. A business plan should most importantly contain the answer to the questions- Why do we care? Does the business need a mobile app or website? How to customize your product for the target audience? Is my business registered, licensed and insured? This is done to avoid problems in the future.
                </Paragraph>
                <Header4>3. Choose a domain name and site location</Header4>
                <Paragraph primary>
                If you choose a wrong domain name, it will be a hassle to change later without hurting your brand and search rankings. So be sure to use keywords in your domain name while keeping it easy to spell and remember. You can even use domain name generators like Namemesh to create domain names that resonate with your business for free. 
You also have to choose a hosting site which helps you create a website for your software development business. The most used hosting site is Wordpress. In fact, 37% of the internet was built on it.
                </Paragraph>
                <Header4>4.Create a marketing strategy</Header4>
                <Paragraph primary>
                    TNow that you have done your software development market research, developed a business plan and chosen a domain name, it is time to let your target customers know about your product. Your marketing strategy has to resonate with your brand values and your customers values. You have to make them understand that you care and create experience that helps your customers trust your product. You should also keep tabs on the marketing strategy of your competitors. Keep analysing and updating your strategy as the market trends suggest.
                </Paragraph>
                <Header4>5. Use social media well</Header4>
                <Paragraph primary>
                Social media is a powerful tool which can create a credible reputation and attract potential customers. You should use the right tools and techniques to connect with like minded professionals and to drive traffic to your website or app. You can learn from like minded business professionals and keep creating better services for the software development market.
                </Paragraph>
                <Header4>6. Create a Newsletter and maintain it</Header4>
                <Paragraph primary>
                Every successful software development website will tell you the same truth. The money is in the newsletter. Let me explain this to you. You need to talk to your customers, let them know your business in person. It is a very important step in marketing your product and building a relationship with your customers which can be done in the form of text messages or even email blasts.
                </Paragraph>
                <Header4>7. Maintenance </Header4>
                <Paragraph primary>
                Your online presence has needs and it needs to be taken care of like a child. There are regular search engine updates which are tiny shifts in algorithms. You have to stay on top of these changes and ensure good google ranks. The only way to do that is to provide some form of a service to your visitors. Your online presence should provide value to your clients and create positive experiences, this is the best way to get loyal customers and make the best use of your digital investment.
                </Paragraph>

                <Header4>8. Focus on the big picture</Header4>
                <Paragraph primary>
                When you have so many aspects to tend to, it is easy to get lost in the details, but you are running a business with an online presence but business is your focus. You should always remember that. Logging down all your work and delegating tasks to individuals or companies that provide website maintenance can make this task much easier. Believe in your product and keep working to make your business better. Do not deviate from the service that you are providing me.
                </Paragraph>

                <Header4>9. Customer service </Header4>
                <Paragraph primary>
                Feedback from a client should always be welcomed. This is a form of market research and thus it can provide invaluable advice to grow your work. Customer support will help the business work on their strengths and also weaknesses. 70% of people prefer buying things where there is excellent customer service.
                </Paragraph>
                <br></br>
                <Paragraph primary>
                We have gone through the various stages of starting a software development business online. These steps work with most businesses and will support your business completely. Follow these steps and see your business grow online. Share your doubts and concerns with us in the comments section below.
                </Paragraph>
        
        </DefaultTemplate>
        <FooterContainer isBlogPage/>
    </>
    )
};


export default BlogPage;

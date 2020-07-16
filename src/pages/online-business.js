import React from "react";
import DefaultTemplate from "../components/organism/defaultTemplate";
import { HEADER, LINK } from '../components/constants/header';
import FooterContainer from '../components/organism/footer.js';
import NavContainer from '../components/organism/nav';
import { Paragraph, Header4 } from '../components/atoms/header';
import { BlogPragraph } from '../components/templates/blog.style';

const BlogPage = () => {

    return (<>
        <NavContainer isBlogPage />
        <DefaultTemplate
            title={HEADER.ONLINE_BUSINESS}
            isBlog>
            <BlogPragraph>
                <Paragraph primary>
                    Hello Mighty Creator, I am sure you have a great idea about taking your business online. Maybe you don’t know where to start? But you need an online presence for your business to increase marketing and create a loyal customer base.
                </Paragraph>
                <Paragraph primary>
                    Deciding whether you need an app or a website is crucial to beginning digitalization for our business. By the end of this blog you would understand better how to choose between the two options.
                </Paragraph>
                <Paragraph primary>
                    It is an era of Mobiles over Laptops. The <a href={LINK.STATISTICS} target="_blank" rel="noreferrer">statistics</a> state that mobile traffic has increased by more than 200% in the past 7 years. We access information in two forms: Websites and Mobile Applications. Continue reading to understand your business needs and bring it to the digital world.
                </Paragraph>
                <Header4>Websites</Header4>
                {/* <Images src={blogImg1} alt="Card" /> */}
                <Paragraph primary>
                    Websites are honestly fairly easy and inexpensive to build. You could use simple coding to create a basic website or use tools like <a href={LINK.WIX} target="_blank" rel="noreferrer">Wix</a> to use their amenities for almost nothing. The best feature of websites is they are easily accessible across all platforms - be it a PC, Mac, Smart TV, iOS or Android. Any device with a web browser can access a website.
                    A website consists of web pages which are easy to share and most browsers have a simple sharing option for all pages. Pages are converted into links and passed on via any medium since it is just a string of text sharing which is allowed through every social media.
                </Paragraph>
                <Paragraph primary>
                    The <a href={LINK.MAINTAIN} target="_blank" rel="noreferrer">maintenance</a> and upgradation cost of a webpage is minimal. You have to stay updated with the trends of the market or at least make sure that the loading time of a webpage is not very high as google <a href={LINK.CHNAGE} target="_blank" rel="noreferrer">changes</a> their algorithms quite frequently (800+ times an year) which may give a low search indexing. This directly impacts ranking.
                </Paragraph>
                <Paragraph primary>
                    While creating content for a website, you have to ensure that you have used the appropriate keywords using SEO tools so that your content ranks high on google and thus generate traffic. Generating traffic is essential if you want your online presence to have any impact.
                </Paragraph>
                <Paragraph primary>
                    Getting a major boost on <a href={LINK.GOOGLERANK} target="_blank" rel="noreferrer">Google ranking</a> lies solely in the amount of work you are willing to do. It takes 3-4 months (sometimes even more) of strategic work to generate results for any website.
                </Paragraph>
                <Header4>App</Header4>
                {/* <Images src={blogImg1} alt="Card" /> */}
                <Paragraph primary>
                    Mobile applications have gained major popularity after the launch of handheld smartphones. Mobile apps are faster but take some time during installation. Most people find using apps easier than websites because of a much more friendly user interface. They make it very easy to <a href={LINK.INTERACT} target="_blank" rel="noreferrer">interact</a> with customers and receive feedback on provided services.
                </Paragraph>
                <Paragraph primary>
                    The best feature of mobile applications is that it <a href={LINK.MONITOR} target="_blank" rel="noreferrer">monitors</a> the behaviour of the users and customize their experience on the basis of that. Not all apps save user data and they require your permission to access your personal data. For example: if you are a travel agency, your app would show different recommendations to different demographics. A married couple with kids are more likely to visit a headline with information about a family vacation than other archetypes.
                </Paragraph>
                <Paragraph primary>
                    You can even send them notifications about events right to their phone’s notification bar. Websites can use newsletters for the same purpose but opening links through emails is much more difficult than tapping on an icon on their notification bar.
                    But mobile apps were built for regular users of the service. It may belong to a niche like food delivery apps in a given geographical area. Applications can even customize local recommendations via geolocation.
                </Paragraph>
                <Paragraph primary>
                    It creates a direct marketing channel and increases brand recognition. Mobile apps help brands stand out from the crowd because of their loyal consumer base.
                </Paragraph>
                <Paragraph primary>
                    None of them are good or bad but Developers generally recommend creating a website before creating an app for marketing purposes. Try to pinpoint what you want out of your online presence and proceed such that you justify your business needs. I hope the above list helped you decide whether you need an app or website. If you’re still not sure, do inform us in the comments below and we’ll help you make the right choice.
                </Paragraph>
            </BlogPragraph>
        </DefaultTemplate>
        <FooterContainer isBlogPage/>
    </>
    )
};


export default BlogPage;

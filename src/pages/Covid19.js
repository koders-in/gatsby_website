import React from "react";
import DefaultTemplate from "../components/organism/defaultTemplate";
import { HEADER } from '../components/constants/header';
import FooterContainer from '../components/organism/footer.js';
import NavContainer from '../components/templates/nav';
import { Paragraph } from '../components/atoms/header';
import { BlogPragraph } from '../components/templates/blog.style';

const BlogPage = () => {
  return (<>
    <NavContainer />
    <DefaultTemplate
      title={HEADER.BLOGTITLE}
      isBlog
    >
      <BlogPragraph>
        <Paragraph primary>
          Procrastination? Well it is one aspect of the story. You are a busy person; you have things to do. After running all errands, doing chores and completing your part of the work for the day. You finally sit down to write something, something which you wanted to put up on your blog. But too bad, you are suffering from a writer’s block or worse you are too tired to write anything. So, you relax and push the thought in the back of your head. And the next day, same story. And the next day and the next day and so on….
        </Paragraph>
        <Paragraph primary>
          However, in recent times particularly after the outbreak of coronavirus which originated from the wet food market in Wuhan, China. There has been a surge in numbers of users writing blogs. It seems like the time people were trying to find all those years has finally been given to them.
          </Paragraph>
        <Paragraph primary>
          While the pandemic has affected more than 200 countries around the globe and putting half of those in a lockdown, it has not yet shown any signs of slowing down.As they say, Innovation is the need of the hour. People are finding new ways to spend their time at home. While some are busy and bored with social media platforms like Tik-Tok, Facebook, Instagram etc. others went on a nostalgic voyage of finding their long-lost passion of cooking and learning new things. Oh, and if you think there has been no innovation regarding this, you are not a man of culture. Please, follow memes. People are being more creative than usual. I mean the recent funeral service meme is just hilarious.
        </Paragraph>
        <Paragraph primary>
          Anyway, one such passion as we have seen is blogging. I do not think, any other time will be more suitable for getting started on it and to go viral. Second to memes, of course. If you like to know how to write a blog, at Koders we have a tutorial/how-to section dedicated to it. Check it out.In this time of self-isolation and social distancing, which hitherto is the only way to halt the possible spread of coronavirus, the little we can do to keep our sanity intact is by writing or sharing our experiences with the world. And a little trade secret for you, people have been doing it for a while. It is your turn to rise and shine now.
        </Paragraph>
        <Paragraph primary>
          Hurry up and get started! There will never be a perfect time.
        </Paragraph>
      </BlogPragraph>
    </DefaultTemplate>
    <FooterContainer />
  </>
  )
};


export default BlogPage;

import { FunctionComponent, useEffect } from "react";
import { PageContainer } from "../components/page-container";
import { useNavigate } from "react-router-dom";
import { blogPage } from "../constants-and-types/constants";
import { Header, Link, Text } from "../components/page-text";
import { apiUrl } from "../api/api";

export const HomePage: FunctionComponent = () => {

    const navigate = useNavigate();

    const onBlogClick = () => {
        navigate(blogPage.path);
    }

    // Warm up lambda function
    useEffect(() => {
        var script = document.createElement("script");
        
        script.onload = function () {
            setTimeout(async () => {
            
                console.log("AwsWafIntegration", AwsWafIntegration);

                // const token = await AwsWafIntegration.getToken();

                // console.log("token", token);

                const hasToken = await AwsWafIntegration.hasToken();

                console.log("has token", hasToken);

                try {            
                    const output =  await AwsWafIntegration.fetch(`${apiUrl}/health_check`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        }
                    });

                    console.log("output", output);

                } catch (err) {
                    console.error("err", err)
                }
             
            
            }, 1000)
        };
        
        const scriptSrc = "https://7587a9016aca.eu-west-2.captcha-sdk.awswaf.com/7587a9016aca/jsapi.js"; 
        
        if (!Object.values(document.head.childNodes).some((node) => node.src?.includes("awswaf"))) {
            script.src = scriptSrc;
            document.head.appendChild(script);
        }

    }, []);

    return (
        <PageContainer>
            <div className="flex flex-col gap-5">
                <Header>Hi, I'm Josh!</Header>
                <Text>I am a 25 year old software engineer who is living in the United Kingdom. I have a big interest in web development, technology, and sports. Currently I am working for <Link href="https://www.iventis.co.uk/" newTab>Iventis</Link> who are a company who specialise in event software.</Text>
                <Text> I am fascinated by web development and the amazing community that surrounds it and lately have had a real drive to create new things that I would find useful. I wanted a way to document my journey of creating these new things, with all bumps in the road and interesting stuff I find along the way. </Text>
                <Text>I hope you enjoy visiting my website, if you want or need to contact me please use the socials in the footer of every page. If you want to know what I am currently up to check out my <Link onClick={onBlogClick}>blog</Link>. On it you can find articles on personal projects, opinions about sport, coding rabbit holes I have gone down and much more! I hope you enjoy it.</Text>
            </div>
        </PageContainer>
    )
}
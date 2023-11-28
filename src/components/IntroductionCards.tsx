import { FiBookOpen, FiGithub, FiMail, FiTool } from "react-icons/fi";
import { Card } from "./Card";

export const IntroductionCards = () => {
    return (
        <>
            <Card
                title="Projects"
                icon={<FiTool />}
                body="In development..."
            />
            <Card
                href="https://github.com/Loupeznik"
                title="GitHub"
                icon={<FiGithub />}
                body="My personal GitHub page."
            />
            <Card
                href="https://blog.dzarsky.eu"
                title="Blog"
                icon={<FiBookOpen />}
                body="Technical blog."
            />
            <Card
                href="mailto:contact@dzarsky.eu"
                title="Contact"
                icon={<FiMail />}
                body="Contact me via email."
            />
        </>
    );
}
